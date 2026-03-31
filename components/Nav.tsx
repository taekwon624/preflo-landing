'use client';

export default function Nav() {
  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{ background: 'rgba(12, 19, 36, 0.7)', backdropFilter: 'blur(20px)' }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-xl font-bold tracking-tighter text-slate-100">Preflo</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-slate-400 hover:text-slate-100 transition-colors text-sm" href="#how-it-works">
            How it works
          </a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors text-sm" href="#features">
            Features
          </a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors text-sm" href="#pricing">
            Pricing
          </a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors text-sm" href="#faq">
            FAQ
          </a>
        </div>
        <a
          href="mailto:hello@preflo.io?subject=Preflo Enquiry"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
