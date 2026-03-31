export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center bg-slate-900 py-16 rounded-2xl border border-cyan-500/20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to stop losing leads?</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
          Send us a message and we will get back to you within one business day.
        </p>
        <a
          href="mailto:hello@preflo.io?subject=Preflo Enquiry"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-10 py-5 rounded-lg font-bold text-xl shadow-2xl transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
