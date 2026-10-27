import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { WHATSAPP_TOPICS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import { telLink, waLink, waNumber } from '../lib/format';
import Icon from './Icon';

/* Call and WhatsApp links. Until CONFIG has a number, they open the
   enquiry form instead of going nowhere. */
export function CallLink({ className, children }) {
  const openEnquiry = useEnquiry();
  if (telLink) return <a className={className} href={telLink}>{children}</a>;
  return <button type="button" className={className} onClick={() => openEnquiry('Request a call back')}>{children}</button>;
}

/* "What's this about?" before WhatsApp opens: each choice starts the chat
   with its own message (WHATSAPP_TOPICS). Rendered into <body>, because a
   fixed overlay inside an animated section would move with it. */
function WhatsAppPicker({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div
      className="modal open" role="dialog" aria-modal="true" aria-labelledby="wa-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-box wa-pick">
        <button className="modal-close" aria-label="Close" onClick={onClose}><Icon name="close" /></button>
        <span className="wa-pick-icon"><Icon name="whatsapp" /></span>
        <h3 id="wa-title">What can we help with?</h3>
        <p className="sub">Pick one and WhatsApp opens with your message ready to send.</p>
        <ul>
          {WHATSAPP_TOPICS.map(([label, message]) => (
            <li key={label}>
              <a href={waLink(message)} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                {label}<Icon name="arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
}

export function WhatsAppLink({ className, children, ...rest }) {
  const openEnquiry = useEnquiry();
  const [picking, setPicking] = useState(false);
  if (!waNumber) {
    return <button type="button" className={className} onClick={() => openEnquiry('Chat with an advisor')} {...rest}>{children}</button>;
  }
  return (
    <>
      <button type="button" className={className} onClick={() => setPicking(true)} {...rest}>{children}</button>
      {picking && <WhatsAppPicker onClose={() => setPicking(false)} />}
    </>
  );
}

export const phoneLabel = 'Get in touch';
