const painPoints = [
  "You got an enquiry last Tuesday. You\u2019re pretty sure someone replied. You\u2019re not sure.",
  "Your follow-up system is \u201ctry to remember\u201d \u2014 and it\u2019s costing you jobs.",
  "Leads come in from your site, Instagram, referrals, and email. They all end up in the same inbox chaos.",
  "You\u2019ve been meaning to set up a proper CRM for six months. You haven\u2019t. You won\u2019t. You don\u2019t need to.",
];

export default function Problem() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 text-center">
          The Problem
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
          Sound familiar?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl card-border bg-slate-900/50 group hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border border-red-500/40 bg-red-500/10 flex items-center justify-center">
                  <span className="text-red-400 text-xs">✕</span>
                </div>
                <p className="text-slate-300 text-base leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition bridge */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-lg">
            You don't need a CRM. You don't need to learn new software.{" "}
            <span className="text-white font-medium">You need a system that runs itself.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
