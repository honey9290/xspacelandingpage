import { useState } from 'react';
import {
  AREA_OPTIONS, BUDGET_OPTIONS, DEFAULT_INTENT, INTENT_COPY, PROPERTY_OPTIONS, TIMELINE_OPTIONS,
} from '../config';
import { buildLead, normalisePhone, sendLead } from '../lib/enquiry';
import Icon from './Icon';

/* The area dropdown's last choice; picking it shows a text box instead. */
const OTHER_AREA = 'Other location';

function initialFields(intent, extra) {
  const pick = (list, ...values) => values.find((v) => v && list.includes(v)) || '';
  return {
    name: '',
    phone: '',
    type: pick(PROPERTY_OPTIONS, extra.type, intent),
    /* A location typed into the finder is not on the list; keep it as typed. */
    area: pick(AREA_OPTIONS, extra.area, intent) || (extra.area || '').trim(),
    budget: pick(BUDGET_OPTIONS, extra.budget),
    timeline: '',
    detail: '',
    website: '',
  };
}

function Select({ label, name, value, options, onChange }) {
  return (
    <div className="f">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">Select</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

/* The one enquiry form, used in the closing section and in the modal.
   `intent` is what the visitor clicked; it picks the heading and pre-fills
   whatever it can. `title`/`sub` override the heading (exit-intent uses it). */
export default function EnquiryForm({ intent = DEFAULT_INTENT, extra = {}, title, sub, autoFocus, idPrefix = 'f' }) {
  const [fields, setFields] = useState(() => initialFields(intent, extra));
  const [otherArea, setOtherArea] = useState(() => !!fields.area && !AREA_OPTIONS.includes(fields.area));
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(null); // { waLink } once submitted

  const copy = INTENT_COPY[intent] || INTENT_COPY[DEFAULT_INTENT];
  const detailLabel = copy[3]; // partner forms ask this instead of the property questions
  const id = (n) => `${idPrefix}-${n}`;
  const set = (e) => {
    const { name, value } = e.target;
    if (name === 'area' && e.target.tagName === 'SELECT') {
      const other = value === OTHER_AREA;
      setOtherArea(other);
      if (other) {
        setFields((f) => ({ ...f, area: '' }));
        return;
      }
    }
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: false }));
  };

  async function submit(e) {
    e.preventDefault();
    const phone = normalisePhone(fields.phone);
    const nextErrors = { name: !fields.name.trim(), phone: !phone };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) return;
    setBusy(true);
    const detail = fields.detail.trim() && `${detailLabel}: ${fields.detail.trim()}`;
    const note = [extra.note, detail].filter(Boolean).join(' · ');
    const link = await sendLead(buildLead(fields, phone, intent, note));
    setBusy(false);
    setSent({ waLink: link });
  }

  if (sent) {
    return (
      <div className="done" role="status">
        <div className="tick"><Icon name="check" /></div>
        <h3>Thank you. We have your request.</h3>
        <p>The Xspace team will call you soon. To start right away, send the message to us on WhatsApp.</p>
        {sent.waLink && (
          <a className="btn btn-primary" href={sent.waLink} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />Continue on WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit}>
      <div className="badge-row"><span>{intent}</span></div>
      <h3 id={id('title')}>{title || copy[0]}</h3>
      <p className="sub">{sub || copy[1]}</p>

      {/* Honeypot: off-screen and skipped by keyboard and screen readers.
          People leave it empty; spam bots fill it, and the portal drops them. */}
      <input
        name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={fields.website} onChange={set}
        style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
      />

      <div className="f">
        <label htmlFor={id('name')}>Your name</label>
        <input
          id={id('name')} name="name" autoComplete="name" placeholder="Full name" autoFocus={autoFocus}
          value={fields.name} onChange={set} aria-invalid={errors.name || undefined}
        />
        {errors.name && <span className="err">Please enter your name</span>}
      </div>

      <div className={'f phone-f' + (errors.phone ? ' bad' : '')}>
        <label htmlFor={id('phone')}>Mobile number</label>
        <div className="phone-wrap">
          <span>+91</span>
          <input
            id={id('phone')} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national"
            placeholder="10-digit mobile" maxLength={14} value={fields.phone} onChange={set}
            aria-invalid={errors.phone || undefined}
          />
        </div>
        {errors.phone && <span className="err">Please enter a valid 10-digit mobile number</span>}
      </div>

      {detailLabel ? (
        <div className="f">
          <label htmlFor={id('detail')}>{detailLabel}</label>
          <input id={id('detail')} name="detail" value={fields.detail} onChange={set} />
        </div>
      ) : (
        <>
          <div className="grid2">
            <Select label="Looking for" name="type" value={fields.type} options={PROPERTY_OPTIONS} onChange={set} />
            <Select
              label="Preferred area" name="area" value={otherArea ? OTHER_AREA : fields.area}
              options={[...AREA_OPTIONS, OTHER_AREA]} onChange={set}
            />
          </div>
          {otherArea && (
            <div className="f">
              <label htmlFor={id('area-other')}>Your location</label>
              <input
                id={id('area-other')} name="area" placeholder="e.g. Kokapet" maxLength={80}
                value={fields.area} onChange={set}
              />
            </div>
          )}
          <div className="grid2">
            <Select label="Budget" name="budget" value={fields.budget} options={BUDGET_OPTIONS} onChange={set} />
            <Select label="When are you buying?" name="timeline" value={fields.timeline} options={TIMELINE_OPTIONS} onChange={set} />
          </div>
        </>
      )}

      <button className="btn btn-primary btn-lg" type="submit" disabled={busy}>
        {busy ? 'Sending…' : copy[2]} <Icon name="arrow" />
      </button>
      <p className="consent">
        By submitting, you agree that Xspace &amp; Co. can contact you about your enquiry by call, SMS or WhatsApp. We never share your details.
      </p>
    </form>
  );
}
