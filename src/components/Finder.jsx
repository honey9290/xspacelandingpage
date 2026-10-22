import { useState } from 'react';
import { useEnquiry } from '../lib/enquiry';
import Icon from './Icon';
import Reveal from './Reveal';

/* Chip-based quick finder. `groups` come from content.js; each fills `area`,
   `type` or `note` on the enquiry it opens. Multi-select groups add a line
   to the note ("Family priorities: …"). */
/* Location groups end with this chip, which opens a text box for an area
   that is not on the list. */
const OTHER = 'Other location';

export default function Finder({ title, sub, groups, intent = 'Free 24-hour shortlist', cta }) {
  const openEnquiry = useEnquiry();
  const [picked, setPicked] = useState(() => Object.fromEntries(groups.map((g) => [g.label, g.multi ? [] : ''])));
  const [typed, setTyped] = useState({}); // group label -> typed location

  const toggle = (g, o) => setPicked((p) => {
    const cur = p[g.label];
    if (g.multi) return { ...p, [g.label]: cur.includes(o) ? cur.filter((v) => v !== o) : [...cur, o] };
    return { ...p, [g.label]: cur === o ? '' : o };
  });
  const isOn = (g, o) => (g.multi ? picked[g.label].includes(o) : picked[g.label] === o);

  function submit() {
    const extra = {};
    const notes = [];
    for (const g of groups) {
      const v = picked[g.label];
      const text = v === OTHER ? (typed[g.label] || '').trim() : Array.isArray(v) ? v.join(', ') : v;
      if (!text) continue;
      if (g.field === 'note') notes.push(`${g.prefix}: ${text}`);
      else extra[g.field] = text;
    }
    openEnquiry(intent, { ...extra, note: notes.join(' · ') });
  }

  return (
    <Reveal className="finder">
      <div className="finder-head">
        <h3>{title}</h3>
        <span className="live">Advisors online</span>
      </div>
      <p className="sub">{sub}</p>
      {groups.map((g) => (
        <div key={g.label}>
          <p className="field-label">{g.label}</p>
          <div className="chips" role="group" aria-label={g.label}>
            {(g.field === 'area' ? [...g.options, OTHER] : g.options).map((o) => (
              <button key={o} type="button" className="chip" aria-pressed={isOn(g, o)} onClick={() => toggle(g, o)}>{o}</button>
            ))}
          </div>
          {picked[g.label] === OTHER && (
            <input
              className="chip-input" aria-label="Your location" placeholder="Type your location, e.g. Kokapet"
              maxLength={80} autoFocus value={typed[g.label] || ''}
              onChange={(e) => setTyped((t) => ({ ...t, [g.label]: e.target.value }))}
            />
          )}
        </div>
      ))}
      <button className="btn btn-primary btn-lg" onClick={submit}>{cta} <Icon name="arrow" /></button>
      <p className="fine">Free · No spam · Takes 30 seconds</p>
    </Reveal>
  );
}
