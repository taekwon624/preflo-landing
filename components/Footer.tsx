export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="text-lg font-bold text-slate-200 mb-4">Preflo</div>
          <p className="text-slate-500 text-xs max-w-xs">
            Lead intake automation for service agencies. Built in Australia.
          </p>
        </div>
        <div className="flex gap-16 text-sm">
          <div>
            <h5 className="text-slate-200 font-bold mb-4 uppercase tracking-widest text-xs">
              Product
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                  href="#how-it-works"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-cyan-400 transition-colors" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-200 font-bold mb-4 uppercase tracking-widest text-xs">
              Contact
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                  href="mailto:hello@preflo.io"
                >
                  hello@preflo.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
        <p className="text-slate-500 text-xs">© 2026 Preflo. Built in Australia.</p>
      </div>
    </footer>
  );
}
