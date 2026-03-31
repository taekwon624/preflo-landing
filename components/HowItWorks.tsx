const steps = [
  {
    number: "01",
    title: "Lead submits an enquiry",
    description:
      "Someone fills out your contact form. That's it. They're in the system.",
    detail: "Works with your existing form, Typeform, Webflow forms — or we build a standalone intake page.",
  },
  {
    number: "02",
    title: "They get a response. Automatically.",
    description:
      "Within minutes, they receive a personalised reply from your email address — without you touching a thing.",
    detail:
      "They know they've been heard. You haven't had to stop what you were doing.",
  },
  {
    number: "03",
    title: "You see everything in one place",
    description:
      "Log into Preflo and see every lead: where they came from, what stage they're at, what's already been sent.",
    detail:
      "Spend 10 minutes a day instead of hunting through your inbox.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      {/* Section divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 text-center">
          How It Works
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight">
          Three things happen.
          <br />
          <span className="text-slate-400 font-normal">None of them are your problem.</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Once we're set up, leads flow through automatically. Your only job is to open Preflo and follow up with the ones worth closing.
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-18 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="p-6 rounded-2xl card-border bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300 text-base mb-3">{step.description}</p>
                    <p className="text-slate-500 text-sm">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
