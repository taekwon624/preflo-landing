import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Done-for-you. Live in under a week.
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Stop losing leads
          <br />
          <span className="gradient-text">to your inbox.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Preflo is a done-for-you lead management system for small service agencies. We connect your forms, automate your first response, and give you one clean dashboard to see exactly where every lead is — without touching any software.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#how-it-works"
            className="px-6 py-3.5 rounded-xl text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            See How It Works
          </Link>
          <Link
            href="#pricing"
            className="px-6 py-3.5 rounded-xl text-base font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all duration-200"
          >
            View Pricing
          </Link>
        </div>

        {/* Social signal */}
        <p className="mt-10 text-sm text-slate-600">
          Built for marketing, design & development studios · AUD pricing · No lock-in
        </p>
      </div>
    </section>
  );
}
