const testimonials = [
  {
    quote:
      "I'd been meaning to sort out our lead follow-up for literally years. We were losing work and I knew it, I just couldn't find the time to fix it. Preflo was live in under a week and now I actually know what's in our pipeline. Worth every cent.",
    author: "Sarah M.",
    role: "Director, marketing agency",
    location: "Melbourne",
    placeholder: true,
  },
  {
    quote:
      "We're a three-person design studio. We don't have time to manage a CRM, and honestly I don't want to. Preflo handles the boring part — the first reply, the tracking — and I just focus on the leads worth chasing. It's the first system I've actually stuck with.",
    author: "Dan K.",
    role: "Founder, design studio",
    location: "Sydney",
    placeholder: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 text-center">
          Social Proof
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
          What agency owners say
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl card-border bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-5xl text-slate-700 font-serif leading-none select-none">
                "
              </div>

              <blockquote className="text-slate-300 text-base leading-relaxed mb-6 relative">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-slate-700 flex items-center justify-center">
                  <span className="text-slate-300 text-sm font-semibold">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>

              {t.placeholder && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <p className="text-slate-600 text-xs italic">Placeholder — will be replaced with real client quote</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
