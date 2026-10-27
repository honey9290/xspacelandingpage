import { useEffect, useRef, useState } from 'react';
import { BOOKING_INTENT, DEFAULT_INTENT } from '../config';
import { CHAT_TOPICS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import { waLink, waNumber } from '../lib/format';
import Icon from './Icon';

const HELLO = "Hi! I'm the Xspace assistant. Ask me something below, or book time with the team.";

/* Solid speech bubble with three dots, for the launcher. */
function ChatGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2c-5 0-9 3.5-9 7.9 0 2.3 1.1 4.4 2.9 5.8l-.7 3.4c-.1.5.4.9.9.6l3.6-1.9c1 .3 2.1.4 3.3.4 5 0 9-3.5 9-7.9S17 3.2 12 3.2Z"
      />
      <circle className="dot" cx="8" cy="11.2" r="1.3" />
      <circle className="dot" cx="12" cy="11.2" r="1.3" />
      <circle className="dot" cx="16" cy="11.2" r="1.3" />
    </svg>
  );
}

/* Chat box pinned to the corner of the screen. It answers the common
   questions in CHAT_TOPICS on the spot; anything typed goes to the team on
   WhatsApp (or the call-back form until a number is configured). */
export default function Chat() {
  const openEnquiry = useEnquiry();
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([{ from: 'bot', text: HELLO }]);
  const [draft, setDraft] = useState('');
  const body = useRef(null);

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight;
  }, [log, open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = (q, a) => setLog((l) => [...l, { from: 'me', text: q }, { from: 'bot', text: a }]);

  function send(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft('');
    if (waNumber) {
      ask(text, 'Thanks! WhatsApp is opening with your message so the team can reply there.');
      window.open(waLink(text), '_blank', 'noopener');
    } else {
      ask(text, 'Thanks! Leave your number and the team will call you back.');
      openEnquiry('Chat with an advisor', { note: 'Chat message: ' + text });
    }
  }

  return (
    <div className={'chat' + (open ? ' open' : '')}>
      {open && (
        <section className="chat-panel" role="dialog" aria-label="Chat with Xspace">
          <header>
            <div>
              <b>Xspace &amp; Co.</b>
              <span className="live">Usually replies within the day</span>
            </div>
            <button type="button" className="chat-x" aria-label="Close chat" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
          </header>
          <div className="chat-body" ref={body} aria-live="polite">
            {log.map((m, i) => <p key={i} className={'msg ' + m.from}>{m.text}</p>)}
            <div className="chat-quick">
              {CHAT_TOPICS.map(([q, a]) => (
                <button key={q} type="button" className="chip" onClick={() => ask(q, a)}>{q}</button>
              ))}
              <button type="button" className="chip" onClick={() => openEnquiry(BOOKING_INTENT)}>Book an appointment</button>
              <button type="button" className="chip" onClick={() => openEnquiry(DEFAULT_INTENT)}>Find my property</button>
            </div>
          </div>
          <form className="chat-send" onSubmit={send}>
            <input
              aria-label="Your message" placeholder="Type your question…" maxLength={500}
              value={draft} onChange={(e) => setDraft(e.target.value)}
            />
            <button type="submit" aria-label="Send"><Icon name="send" /></button>
          </form>
        </section>
      )}
      {!open && <span className="chat-label" aria-hidden="true">Chat with us</span>}
      <button
        type="button" className="chat-btn" aria-label={open ? 'Close chat' : 'Chat with us'} aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="chat-ico" key={open ? 'x' : 'c'}>{open ? <Icon name="close" /> : <ChatGlyph />}</span>
      </button>
    </div>
  );
}
