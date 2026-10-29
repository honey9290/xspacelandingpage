import { useEffect, useState } from 'react';

/* Types a heading in, letter by letter, when the page loads. Every letter is
   laid out from the start (hidden until typed), so the heading never reflows.
   `parts` is a list of strings; the ones in `underline` are wrapped in <u>.
   Screen readers get the whole heading at once. */
const STEP_MS = 45;

export default function TypeIn({ as: Tag = 'h1', className, parts, underline = [] }) {
  const total = parts.join('').length;
  const [shown, setShown] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0,
  );

  useEffect(() => {
    if (shown >= total) return undefined;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 300 : STEP_MS);
    return () => clearTimeout(t);
  }, [shown, total]);

  let at = 0;
  return (
    <Tag className={className + (shown < total ? ' typing' : ' typed')} aria-label={parts.join('')}>
      {parts.map((part, p) => {
        const letters = [...part].map((ch) => {
          const i = at++;
          return (
            <span key={i} className={i < shown ? undefined : 'ti-hide'} aria-hidden="true">
              {ch}
              {i === shown - 1 && <span className="ti-caret" />}
            </span>
          );
        });
        return underline.includes(p) ? <u key={p}>{letters}</u> : <span key={p}>{letters}</span>;
      })}
    </Tag>
  );
}
