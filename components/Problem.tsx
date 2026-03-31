export default function Problem() {
  const problems = [
    {
      title: 'Lost in the inbox',
      body: "You got an enquiry last Tuesday. You think someone replied. You're not sure.",
    },
    {
      title: 'Slow response',
      body: 'Leads expect a reply in minutes. Manual processing creates delays that cost you jobs.',
    },
    {
      title: 'No follow-up system',
      body: 'Your follow-up system is "try to remember" — and it\'s costing you work.',
    },
    {
      title: 'No visibility',
      body: 'Leads come from your site, Instagram, referrals. They all end up in the same inbox chaos.',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Sound familiar?</h2>
        <p className="text-slate-400 max-w-xl mb-16">
          Every minute your leads sit in an unorganised inbox is revenue slipping through the cracks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {problems.map((p) => (
            <div key={p.title} className="bg-slate-800 p-8 hover:bg-slate-700 transition-all">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
