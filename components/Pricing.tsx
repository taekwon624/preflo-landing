import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    badge: null,
    bestFor: "Agencies that want the system set up and handed over",
    price: "$2,500–$3,500",
    priceNote: "AUD · one-time",
    cta: "Get Started",
    ctaHref: "mailto:hello@preflo.io?subject=Preflo Enquiry",
    ctaVariant: "outline" as const,
    features: [
      "Lead intake form (embeddable or standalone page)",
      "Automated capture, classification & first-response email",
      "Preflo dashboard deployed and connected",
      "Custom first-response email template",
      "1× onboarding call (60 min)",
      "Handover documentation",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    bestFor: "Agencies that want the system looked after, not just handed over",
    price: "$3,000",
    priceNote: "AUD setup + $400–$500/mo",
    cta: "Book a Call",
    ctaHref: "mailto:hello@preflo.io?subject=Preflo Enquiry",
    ctaVariant: "primary" as const,
    features: [
      "Everything in Starter",
      "Monthly monitoring & maintenance",
      "Template and rule updates as needed",
      "Priority support (response within 24h)",
      "Quarterly check-in call",
    ],
  },
  {
    name: "Done For You",
    badge: null,
    bestFor: "Established agencies that want to hand the whole thing off",
    price: "$4,000–$5,000",
    priceNote: "AUD setup + $800–$1,200/mo",
    cta: "Let's Talk",
    ctaHref: "mailto:hello@preflo.io?subject=Preflo Enquiry",
    ctaVariant: "outline" as const,
    features: [
      "Everything in Growth",
      "We host & manage the full automation stack",
      "Multi-step follow-up sequences",
      "White-label branded dashboard",
      "Monthly performance report",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 text-center">
          Pricing
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">
          Simple pricing.
          <br />
          <span className="text-slate-400 font-normal">No lock-in surprises.</span>
        </h2>
        <p className="text-slate-400 text-center mb-4">
          All prices in AUD. Setup is one-off unless noted.
        </p>
        <p className="text-slate-500 text-sm text-center mb-16">
          We scope complex setups separately.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
                tier.ctaVariant === "primary"
                  ? "bg-slate-900 border border-cyan-500/40 glow-cyan"
                  : "bg-slate-900/50 card-border hover:border-slate-600/50"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-slate-950">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                <p className="text-slate-300 text-sm">{tier.bestFor}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white">{tier.price}</div>
                <div className="text-slate-500 text-sm mt-1">{tier.priceNote}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                      <span className="text-cyan-400 text-[10px]">✓</span>
                    </span>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  tier.ctaVariant === "primary"
                    ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                    : "border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
