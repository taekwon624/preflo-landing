"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know how to use Airtable or any automation tool?",
    a: "No. We set it all up for you. Once it's live, you log into Preflo and see your leads. That's it. You don't need to touch Airtable, n8n, or anything else.",
  },
  {
    q: "How long does setup take?",
    a: "Usually 3–5 business days from when we receive your details. We build, test, and walk you through it before it goes live with real leads.",
  },
  {
    q: "Does it send emails from my actual address?",
    a: "Yes. Automated responses go out from your email address, not ours and not a generic noreply. Your leads have no idea it's automated.",
  },
  {
    q: "What happens if I already have a contact form or use Typeform/Webflow forms?",
    a: "We can connect to your existing form setup in most cases. We'll confirm during scoping — but this is standard for us.",
  },
  {
    q: "Can I cancel the monthly plan?",
    a: "Yes. Growth and Done For You plans are month-to-month after setup. If you cancel, you keep the system — we just hand over the keys and stop the ongoing management.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
      >
        <span className="text-white font-medium text-base group-hover:text-cyan-300 transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 text-sm transition-all duration-200 ${
            open ? "rotate-45 border-cyan-500/50 text-cyan-400" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-slate-400 text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 text-center">
          FAQ
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">
          Honest answers.
        </h2>
        <p className="text-slate-400 text-center mb-12">
          To the questions you&apos;re probably thinking.
        </p>

        <div className="rounded-2xl card-border bg-slate-900/50 px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
