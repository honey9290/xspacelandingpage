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
export async function sendLead(lead) {
  if (CONFIG.enquiryEndpoint) {
    try {
      await fetch(CONFIG.enquiryEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch {
      /* the WhatsApp button on the thank-you screen still reaches us */
    }
  }
  try { sessionStorage.setItem('xs_enquired', '1'); } catch { /* private mode */ }
  if (!waNumber) return null;
  const link = waLink(leadMessage(lead));
  if (!CONFIG.enquiryEndpoint) window.open(link, '_blank', 'noopener');
  return link;
}
