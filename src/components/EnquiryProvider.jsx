import { useCallback, useEffect, useRef, useState } from 'react';
import { DEFAULT_INTENT } from '../config';
import { EnquiryContext } from '../lib/enquiry';
import EnquiryForm from './EnquiryForm';
import Icon from './Icon';

const seen = (key) => {
  try { return sessionStorage.getItem(key) === '1'; } catch { return false; }
};

/* Holds the enquiry modal. Anything below it calls useEnquiry()(intent, extra)
   to open it. Also shows the exit-intent prompt once per session on desktop. */
export default function EnquiryProvider({ children }) {
  const [modal, setModal] = useState(null); // { intent, extra, title, sub, key }
  const lastFocus = useRef(null);
  const openRef = useRef(false);
  openRef.current = Boolean(modal);

  const openEnquiry = useCallback((intent, extra = {}, heading = {}) => {
    lastFocus.current = document.activeElement;
    setModal({ intent, extra, ...heading, key: Date.now() });
  }, []);

  const close = useCallback(() => {
    setModal(null);
    lastFocus.current?.focus?.();
  }, []);

  // Lock page scroll and listen for Escape while open.
  useEffect(() => {
    if (!modal) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [modal, close]);

  // Exit intent: pointer leaves through the top of the window.
  useEffect(() => {
    if (seen('xs_exit') || seen('xs_enquired')) return undefined;
    const onOut = (e) => {
      if (e.relatedTarget || e.clientY > 0 || openRef.current || window.innerWidth < 900) return;
      if (seen('xs_enquired')) return;
      try { sessionStorage.setItem('xs_exit', '1'); } catch { /* private mode */ }
      document.removeEventListener('mouseout', onOut);
      openEnquiry(DEFAULT_INTENT, {}, {
        title: "Before you go: tell us what you're looking for",
        sub: 'The Xspace team will come back with options that fit. No spam, no obligation.',
      });
    };
    document.addEventListener('mouseout', onOut);
    return () => document.removeEventListener('mouseout', onOut);
  }, [openEnquiry]);

  return (
    <EnquiryContext.Provider value={openEnquiry}>
      {children}
      {modal && (
        <div
          className="modal open" role="dialog" aria-modal="true" aria-labelledby="m-title"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="modal-box">
            <button className="modal-close" aria-label="Close" onClick={close}><Icon name="close" /></button>
            <div className="form-card">
              <EnquiryForm
                key={modal.key} idPrefix="m" autoFocus
                intent={modal.intent} extra={modal.extra} title={modal.title} sub={modal.sub}
              />
            </div>
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}
