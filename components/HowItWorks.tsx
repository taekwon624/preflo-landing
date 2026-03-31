export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      highlight: true,
      title: 'Lead submits an enquiry',
      body: 'Someone fills out your contact form. That is it. They are in the system.',
    },
    {
      num: '2',
      highlight: false,
      title: 'They get a response. Automatically.',
      body: 'Within minutes, they receive a personalised reply from your email address — without you touching a thing.',
    },
    {
      num: '3',
      highlight: false,
      title: 'You see everything in one place',
      body: 'Log into Preflo and see every lead: where they came from, what stage they are at, what has already been sent.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Three things happen. None of them are your problem.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 ${
                  step.highlight
                    ? 'bg-cyan-500'
                    : 'bg-slate-800 border border-slate-700'
                }`}
              >
                <span
                  className={`font-bold text-xl ${
                    step.highlight ? 'text-slate-950' : 'text-cyan-400'
                  }`}
                >
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
