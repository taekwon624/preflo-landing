export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'We went from a 12-hour response time to under 15 minutes. Our conversion rate went up noticeably in the first month.',
      name: 'Marcus T.',
      role: 'Founder, boutique marketing agency',
    },
    {
      quote:
        'I used to lose track of leads constantly. Now I open Preflo in the morning and I know exactly what needs attention.',
      name: 'Sarah J.',
      role: 'Director, design studio',
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-xl bg-slate-950 border-l-4 border-cyan-500"
            >
              <p className="text-xl italic text-white mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
