export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Direct Teardown Call",
      desc: "No sales reps or 40-slide agency decks. We hop on a 30-minute screen-share to audit your existing website, search console errors, and current ad accounts."
    },
    {
      step: "02",
      title: "The 90-Day Sprint Scope",
      desc: "We write down exactly what we will design, code, shoot, and launch over the next quarter. You get fixed deliverables, clear ownership, and zero ambiguity."
    },
    {
      step: "03",
      title: "Rapid Build & Launch",
      desc: "Our engineers push Next.js code or fixes live, our media buyers configure conversion APIs, and our editors produce the first batch of vertical video reels."
    },
    {
      step: "04",
      title: "Review & Scale",
      desc: "Weekly updates with real numbers: Cost-per-lead, organic rank shifts, and user feedback. We cut what doesn't work and double down on what does."
    }
  ];

  return (
    <section className="py-20 bg-[#1a0601] border-b border-[#351508] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider mb-2">
            [ Operational Framework ]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How we actually work with you
          </h2>
          <p className="mt-2 text-[#c4b3a5] text-sm sm:text-base">
            No endless meetings or account managers in between. You communicate directly with the team doing the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#240c03] rounded-xl p-6 border border-[#3d190a] flex flex-col justify-between hover:border-[#5c2712] transition-colors shadow-lg"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#d0b38a] mb-4 block">
                  [{s.step}]
                </span>
                <h3 className="font-bold text-base text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#c4b3a5] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
