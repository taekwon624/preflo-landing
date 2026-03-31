const CTA_LINK = 'mailto:hello@preflo.io?subject=Preflo Enquiry';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple pricing. No surprises.</h2>
          <p className="text-slate-400">All prices in AUD.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-slate-900 p-10 rounded-xl border border-slate-800 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-slate-400 text-sm mb-8">
              Set up and handed over. You run it from there.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$2,500</span>
              <span className="text-slate-400 text-sm">–$3,500 AUD</span>
              <div className="text-slate-400 text-sm mt-1">one-time setup</div>
            </div>
            <ul className="space-y-3 mb-10 flex-grow text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Lead intake form
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> 3 automation workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Preflo dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Custom email template
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Onboarding call (60 min)
              </li>
            </ul>
            <a
              href={CTA_LINK}
              className="w-full text-center py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Growth — Most Popular */}
          <div
            className="bg-slate-900 p-10 rounded-xl border-2 border-cyan-500 relative flex flex-col"
            style={{ boxShadow: '0 0 40px -15px rgba(76,215,246,0.15)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-slate-400 text-sm mb-8">We stay on and keep it running well.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$3,000</span>
              <div className="text-slate-400 text-sm mt-1">
                setup + <span className="text-cyan-400 font-semibold">$400–500/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-10 flex-grow text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Everything in Starter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Monthly monitoring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Template updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Priority support (24h)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Quarterly check-in
              </li>
            </ul>
            <a
              href={CTA_LINK}
              className="w-full text-center py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg transition-all"
            >
              Book a Call
            </a>
          </div>

          {/* Done For You */}
          <div className="bg-slate-900 p-10 rounded-xl border border-slate-800 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Done For You</h3>
            <p className="text-slate-400 text-sm mb-8">
              We own the whole stack. You just use Preflo.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$4,000</span>
              <span className="text-slate-400 text-sm">–$5,000 AUD</span>
              <div className="text-slate-400 text-sm mt-1">
                setup + <span className="text-slate-300 font-semibold">$800–1,200/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-10 flex-grow text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Everything in Growth
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> We host the full stack
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Follow-up sequences
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> White-label dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Dedicated support &amp; guidance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Monthly performance report
              </li>
            </ul>
            <a
              href={CTA_LINK}
              className="w-full text-center py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
