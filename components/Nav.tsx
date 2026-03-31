"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            pref<span className="gradient-text">lo</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>
        <Link
          href="mailto:hello@preflo.io"
          className="px-4 py-2 rounded-lg text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
        >
          Book a 20-min call
        </Link>
      </div>
    </nav>
  );
}
