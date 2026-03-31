export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Stop losing leads to <br className="hidden md:block" /> your{' '}
          <span className="text-cyan-400">inbox.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Preflo is a done-for-you lead management system for small service agencies. We connect your
          forms, automate your first response, and give you one clean dashboard.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#how-it-works"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-bold text-lg w-full sm:w-auto"
          >
            See how it works
          </a>
          <a
            href="#pricing"
            className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg w-full sm:w-auto border border-slate-700 hover:border-slate-500 transition-all"
          >
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
}
