import { useEffect, useRef } from 'react';

const HOVER = 'a, button, [role="button"], [role="radio"], label, select, summary, input[type="checkbox"], input[type="range"]';
const TEXT = 'input:not([type="checkbox"]):not([type="range"]), textarea, [contenteditable="true"]';

/* A dot that follows the mouse exactly, and a ring that trails it. The ring
   grows over anything clickable and shrinks while pressed. Mouse users
   only: touch screens and reduced-motion settings keep the normal cursor,
   and text fields show the normal text cursor. */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const root = document.documentElement;
    root.classList.add('has-cursor');
    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let frame = 0;

    const setState = (name, on) => {
      dot.current?.classList.toggle(name, on);
      ring.current?.classList.toggle(name, on);
    };
    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      setState('shown', true);
      setState('hover', !!e.target.closest?.(HOVER));
      setState('text', !!e.target.closest?.(TEXT));
    };
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      if (ring.current) ring.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      frame = requestAnimationFrame(tick);
    };
    const onDown = () => setState('down', true);
    const onUp = () => setState('down', false);
    const onLeave = () => setState('shown', false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(tick);
    return () => {
      root.classList.remove('has-cursor');
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ring} aria-hidden="true"><span /></div>
      <div className="cursor-dot" ref={dot} aria-hidden="true"><span /></div>
    </>
  );
}
