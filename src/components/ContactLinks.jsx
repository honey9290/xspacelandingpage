import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { isEmail, normalisePhone, useEnquiry, waIntro } from '../lib/enquiry';
import { telLink, waLink, waNumber } from '../lib/format';
import Icon from './Icon';

/* Call and WhatsApp links. Until CONFIG has a number, they open the
   enquiry form instead of going nowhere. */
export function CallLink({ className, children }) {
  const openEnquiry = useEnquiry();
  if (telLink) return <a className={className} href={telLink}>{children}</a>;
  return <button type="button" className={className} onClick={() => openEnquiry('Request a call back')}>{children}</button>;
}

/* Name, mobile and email before WhatsApp opens, so the first message says
   who is writing (waIntro). Rendered into <body>, because a fixed overlay
   inside an animated section would move with it. */
function WhatsAppForm({ onClose }) {
  const [f, setF] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});
  const set = (e) => {
    const { name, value } = e.target;
    setF((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: false }));
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  function submit(e) {
    e.preventDefault();
    const phone = normalisePhone(f.phone);
    const email = f.email.trim();
    const next = { name: !f.name.trim(), phone: !phone, email: !isEmail(email) };
    setErrors(next);
    if (next.name || next.phone || next.email) return;
    window.open(waLink(waIntro({ name: f.name.trim(), phone: '+91' + phone, email })), '_blank', 'noopener');
    onClose();
  }

  return createPortal(
    <div
      className="modal open" role="dialog" aria-modal="true" aria-labelledby="wa-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-box wa-pick">
        <button className="modal-close" aria-label="Close" onClick={onClose}><Icon name="close" /></button>
        <span className="wa-pick-icon"><Icon name="whatsapp" /></span>
        <h3 id="wa-title">Chat with us on WhatsApp</h3>
        <p className="sub">Add your details and WhatsApp opens with them in your first message.</p>
        <form noValidate onSubmit={submit}>
          <div className="f">
            <label htmlFor="wa-name">Your name</label>
            <input
              id="wa-name" name="name" autoComplete="name" placeholder="Full name" autoFocus
              value={f.name} onChange={set} aria-invalid={errors.name || undefined}
            />
            {errors.name && <span className="err">Please enter your name</span>}
          </div>
          <div className={'f phone-f' + (errors.phone ? ' bad' : '')}>
            <label htmlFor="wa-phone">Mobile number</label>
            <div className="phone-wrap">
              <span>+91</span>
              <input
                id="wa-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national"
                placeholder="10-digit mobile" maxLength={14} value={f.phone} onChange={set}
                aria-invalid={errors.phone || undefined}
              />
            </div>
            {errors.phone && <span className="err">Please enter a valid 10-digit mobile number</span>}
          </div>
          <div className="f">
            <label htmlFor="wa-email">Email</label>
            <input
              id="wa-email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
              value={f.email} onChange={set} aria-invalid={errors.email || undefined}
            />
            {errors.email && <span className="err">Please enter a valid email</span>}
          </div>
          <button className="btn btn-primary btn-lg wa-go" type="submit"><Icon name="whatsapp" />Open WhatsApp</button>
        </form>
      </div>
    </div>,
    document.body
  );
}

export function WhatsAppLink({ className, children, ...rest }) {
  const openEnquiry = useEnquiry();
  const [open, setOpen] = useState(false);
  if (!waNumber) {
    return <button type="button" className={className} onClick={() => openEnquiry('Chat with an advisor')} {...rest}>{children}</button>;
  }
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} {...rest}>{children}</button>
      {open && <WhatsAppForm onClose={() => setOpen(false)} />}
    </>
  );
}

export const phoneLabel = 'Get in touch';
