import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            pref<span className="gradient-text">lo</span>
          </Link>
          <p className="text-slate-600 text-sm mt-1">
            Turn every inquiry into a managed conversation — automatically.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="mailto:hello@preflo.io" className="hover:text-white transition-colors">Book a call</Link>
        </nav>

        <p className="text-slate-700 text-xs">
          © {new Date().getFullYear()} Preflo · Automation AI Agency · Melbourne, AU
        </p>
      </div>
    </footer>
  );
}
