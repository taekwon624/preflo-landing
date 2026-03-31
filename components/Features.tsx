export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Here is what is included</h2>
        <p className="text-slate-400 mb-16">Everything you need. Nothing you do not.</p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-4">Automated first response</h3>
            <p className="text-slate-400">
              Every new enquiry gets a personalised reply from your email within minutes, on your
              schedule. Smart rules automatically classify and sort your leads — high priority,
              standard, or incomplete.
            </p>
          </div>
          <div className="md:col-span-4 bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-2">Airtable-powered lead database</h3>
            <p className="text-slate-400 text-sm">Clean, organised, and easy to search.</p>
          </div>
          <div className="md:col-span-4 bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-2">24/7 intake</h3>
            <p className="text-slate-400 text-sm">
              While you sleep, Preflo handles the initial qualification and response.
            </p>
          </div>
          <div className="md:col-span-4 bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-2">Preflo dashboard</h3>
            <p className="text-slate-400 text-sm">
              One clean view of your entire pipeline. No spreadsheet required.
            </p>
          </div>
          <div className="md:col-span-4 bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-2">Source tracking</h3>
            <p className="text-slate-400 text-sm">
              See which channels bring your best leads — website, referral, social.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
