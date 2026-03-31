const features = [
  {
    icon: "⚡",
    title: "Automated first response",
    description:
      "Every new enquiry gets a reply from your email within minutes, on your schedule.",
  },
  {
    icon: "📊",
    title: "Lead pipeline view",
    description:
      "See every lead by stage: New, Contacted, Qualified, Proposal, Won, Lost.",
  },
  {
    icon: "🔴",
    title: "Real-time lead feed",
    description:
      "New enquiries appear the moment they come in. No manual import, no refreshing.",
  },
  {
    icon: "📬",
    title: "Email activity log",
    description:
      "Know exactly what was sent, to who, and when. No more guessing if someone replied.",
  },
  {
    icon: "👤",
    title: "Lead detail view",
    description:
      "Full contact info, enquiry text, and activity history in one click.",
  },
  {
    icon: "📈",
    title: "Quick stats",
    description:
      "Leads this week, response time, and conversion rate at a glance.",
  },
  {
    icon: "🎨",
    title: "Branded dashboard",
    description:
      "Your logo, your name. Looks like yours, not ours.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 text-center">
          What You Get
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">
          Here&apos;s what&apos;s included
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-lg mx-auto">
          Everything you need to stop losing leads. Nothing you need to learn how to configure.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl card-border bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
