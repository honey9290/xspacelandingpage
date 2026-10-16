import { CONFIG } from '../config';

export const digits = (s) => String(s || '').replace(/\D/g, '');

/* ₹1.17 Cr, ₹25 L, ₹80,000 */
export function inr(n) {
  if (n >= 1e7) return '₹' + (n / 1e7).toFixed(n >= 1e8 ? 1 : 2).replace(/\.?0+$/, '') + ' Cr';
  if (n >= 1e5) return '₹' + (n / 1e5).toFixed(1).replace(/\.0$/, '') + ' L';
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

/* Which BUDGET_OPTIONS bucket an amount falls in. */
export function budgetBucket(v) {
  if (v < 75e5) return 'Under ₹75 L';
  if (v < 1.2e7) return '₹75 L – 1.2 Cr';
  if (v < 2e7) return '₹1.2 – 2 Cr';
  if (v < 3.5e7) return '₹2 – 3.5 Cr';
  return '₹3.5 Cr +';
}

export const waNumber = digits(CONFIG.whatsapp || CONFIG.phone);
export const waLink = (text) => `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
export const telLink = CONFIG.phone ? 'tel:' + CONFIG.phone.replace(/\s/g, '') : '';
