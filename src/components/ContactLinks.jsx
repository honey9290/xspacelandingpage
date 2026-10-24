import { CONFIG } from '../config';
import { useEnquiry } from '../lib/enquiry';
import { telLink, waLink, waNumber } from '../lib/format';

const GREETING = "Hi Xspace & Co., I'm looking for a property and would like some help.";

/* Call and WhatsApp links. Until CONFIG has a number, they open the
   enquiry form instead of going nowhere. */
export function CallLink({ className, children }) {
  const openEnquiry = useEnquiry();
  if (telLink) return <a className={className} href={telLink}>{children}</a>;
  return <button type="button" className={className} onClick={() => openEnquiry('Request a call back')}>{children}</button>;
}

export function WhatsAppLink({ className, children, ...rest }) {
  const openEnquiry = useEnquiry();
  if (waNumber) {
    return <a className={className} href={waLink(GREETING)} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <button type="button" className={className} onClick={() => openEnquiry('Chat with an advisor')} {...rest}>{children}</button>;
}

export const phoneLabel = 'Get in touch';
