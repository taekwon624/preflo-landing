import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-8">
          Setup takes less than a week
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Your next lead deserves
          <br />
          <span className="gradient-text">a reply in minutes,</span>
          <br />
          not days.
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Set up takes less than a week. You don&apos;t need to do the technical work. You just need to be ready to follow up when the right lead lands.
        </p>

        <Link
          href="mailto:hello@preflo.io?subject=Preflo Enquiry"
          className="inline-block px-8 py-4 rounded-xl text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/20"
        >
          Book a Free 20-Min Call
        </Link>

        <p className="mt-6 text-slate-600 text-sm">
          No pitch deck. Just a conversation about what you&apos;re dealing with and whether Preflo fits.
        </p>
      </div>
    </section>
  );
}
