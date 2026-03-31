'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does setup take?',
    a: '3–5 business days from when we have your details. We handle everything — you just show up to the onboarding call.',
  },
  {
    q: 'Does it work with my current setup?',
    a: 'Yes. We connect to your existing contact form, email address, and any booking tools you use. No new software to learn.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No lock-in. Starter is one-off. Growth and Done For You are month-to-month — cancel any time.',
  },
  {
    q: 'What email address will the auto-replies come from?',
    a: 'Yours. We connect Preflo to your existing business email so responses look like they came from you.',
  },
  {
    q: 'What if I already have a CRM?',
    a: "That's fine. Preflo works alongside your existing tools, or we can use it as your primary lead tracker — your call.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-bold">{q}</h4>
        <span className="text-cyan-400 text-lg leading-none select-none">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="mt-4 text-slate-400 text-sm">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
