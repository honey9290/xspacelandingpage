import { createContext, useContext } from 'react';
import { CONFIG } from '../config';
import { digits, waLink, waNumber } from './format';

/* openEnquiry(intent, extra) opens the enquiry modal from anywhere on the
   page. EnquiryProvider supplies it. */
export const EnquiryContext = createContext(() => {});
export const useEnquiry = () => useContext(EnquiryContext);

/* A 10-digit Indian mobile, or null. Accepts +91 / 0 prefixes. */
export function normalisePhone(raw) {
  let p = digits(raw);
  if (p.length === 12 && p.startsWith('91')) p = p.slice(2);
  if (p.length === 11 && p.startsWith('0')) p = p.slice(1);
  return /^[6-9]\d{9}$/.test(p) ? p : null;
}

export function buildLead(fields, phone, intent, note) {
  return {
    name: fields.name.trim(),
    phone: '+91' + phone,
    propertyType: fields.type,
    preferredArea: fields.area,
    budget: fields.budget,
    timeline: fields.timeline,
    intent,
    note: note || '',
    source: 'Website',
    website: fields.website || '', // honeypot: hidden from people, filled by bots
    page: window.location.href,
    submittedAt: new Date().toISOString(),
  };
}

export function leadMessage(lead) {
  return [
    `Hi Xspace & Co., I'm ${lead.name}.`,
    `Request: ${lead.intent}`,
    lead.propertyType && `Looking for: ${lead.propertyType}`,
    lead.preferredArea && `Area: ${lead.preferredArea}`,
    lead.budget && `Budget: ${lead.budget}`,
    lead.timeline && `Timeline: ${lead.timeline}`,
    lead.note,
    `Phone: ${lead.phone}`,
  ].filter(Boolean).join('\n');
}

/* POST to the configured endpoint if there is one. With no endpoint,
   WhatsApp is the delivery channel, so open it straight away. Returns the
   WhatsApp link for the thank-you screen (null if WhatsApp isn't set up). */
/* Enquiries that did not reach the portal (it was down, asleep too long, or
   the visitor's network dropped). Kept in this browser and sent again: once
   30 s later while the page is still open, and on every later visit, until
   the portal accepts them. */
const OUTBOX_KEY = 'xs_outbox';
const readOutbox = () => {
  try { return JSON.parse(localStorage.getItem(OUTBOX_KEY)) || []; } catch { return []; }
};
const writeOutbox = (list) => {
  try {
    if (list.length) localStorage.setItem(OUTBOX_KEY, JSON.stringify(list.slice(-10)));
    else localStorage.removeItem(OUTBOX_KEY);
  } catch { /* private mode: nothing to keep it in */ }
};

/* true once the portal has the lead. A 4xx means the portal looked at it and
   refused it (bad phone, bot) — sending it again would not change that. */
async function postLead(lead) {
  try {
    /* text/plain keeps this a "simple" cross-origin request (no preflight),
       and keepalive lets it finish even if the visitor closes the tab. The
       portal parses it as JSON. */
    const res = await fetch(CONFIG.enquiryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(lead),
      keepalive: true,
    });
    return res.ok || (res.status >= 400 && res.status < 500 && res.status !== 404 && res.status !== 429);
  } catch {
    return false;
  }
}

export async function flushOutbox() {
  if (!CONFIG.enquiryEndpoint) return;
  const pending = readOutbox();
  if (!pending.length) return;
  const still = [];
  for (const lead of pending) if (!(await postLead(lead))) still.push(lead);
  /* Something may have been queued while this ran. */
  const added = readOutbox().filter((l) => !pending.some((p) => p.submittedAt === l.submittedAt));
  writeOutbox([...still, ...added]);
}

export async function sendLead(lead) {
  if (CONFIG.enquiryEndpoint) {
    const sent = postLead(lead).then((ok) => {
      if (ok) return;
      writeOutbox([...readOutbox(), lead]);
      setTimeout(flushOutbox, 30000);
    });
    /* A free Render instance can take ~50 s to wake, so the visitor waits at
       most a few seconds; the request carries on in the background. */
    await Promise.race([sent, new Promise((r) => setTimeout(r, 4000))]);
  }
  try { sessionStorage.setItem('xs_enquired', '1'); } catch { /* private mode */ }
  if (!waNumber) return null;
  const link = waLink(leadMessage(lead));
  if (!CONFIG.enquiryEndpoint) window.open(link, '_blank', 'noopener');
  return link;
}
