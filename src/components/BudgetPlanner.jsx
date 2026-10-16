import { useState } from 'react';
import { useEnquiry } from '../lib/enquiry';
import { budgetBucket, inr } from '../lib/format';
import Icon from './Icon';
import Reveal from './Reveal';

const SLIDERS = [
  { key: 'emi', label: "Monthly EMI you're comfortable with", min: 20000, max: 500000, step: 5000, show: (v) => '₹' + v.toLocaleString('en-IN') },
  { key: 'down', label: 'Down payment available', min: 500000, max: 30000000, step: 250000, show: inr },
  { key: 'years', label: 'Loan tenure', min: 5, max: 30, step: 1, show: (v) => v + ' yrs' },
  { key: 'rate', label: 'Interest rate (approx.)', min: 7, max: 12, step: 0.1, show: (v) => v.toFixed(1) + '%' },
];

/* Largest loan an EMI services at a given rate and tenure. */
function loanFor(emi, ratePct, years) {
  const r = ratePct / 12 / 100;
  const n = years * 12;
  return (emi * (1 - Math.pow(1 + r, -n))) / r;
}

export default function BudgetPlanner() {
  const openEnquiry = useEnquiry();
  const [v, setV] = useState({ emi: 80000, down: 2500000, years: 20, rate: 8.5 });
  const loan = loanFor(v.emi, v.rate, v.years);
  const budget = loan + v.down;

  return (
    <section className="block tight" id="budget">
      <div className="wrap">
        <Reveal className="head">
          <div className="kicker">Budget planner</div>
          <h2>Find out what you can afford.</h2>
          <p className="section-lead">Move the sliders. We'll show you an approximate home budget, then send verified homes within it.</p>
        </Reveal>
        <Reveal className="calc">
          <div className="calc-in">
            {SLIDERS.map((s) => (
              <div className="range" key={s.key}>
                <div className="range-top">
                  <label htmlFor={'calc-' + s.key}>{s.label}</label>
                  <output htmlFor={'calc-' + s.key}>{s.show(v[s.key])}</output>
                </div>
                <input
                  type="range" id={'calc-' + s.key} min={s.min} max={s.max} step={s.step} value={v[s.key]}
                  onChange={(e) => setV((prev) => ({ ...prev, [s.key]: Number(e.target.value) }))}
                />
              </div>
            ))}
          </div>
          <div className="calc-out">
            <div className="label">Your approximate home budget</div>
            <div className="big" aria-live="polite">{inr(budget)}</div>
            <div className="split">
              <div>Home loan<b>{inr(loan)}</b></div>
              <div>Down payment<b>{inr(v.down)}</b></div>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => openEnquiry('Homes in my budget', {
                budget: budgetBucket(budget),
                note: `Budget planner: approx. ${inr(budget)} (EMI ₹${v.emi.toLocaleString('en-IN')}/mo)`,
              })}
            >
              Show verified homes in this budget <Icon name="arrow" />
            </button>
            <p className="fine">
              This is an estimate, not a loan offer. Your actual loan depends on the bank, your income and your credit
              score. We can connect you with lenders.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
