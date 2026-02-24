const steps = [
  {
    phase: 'Start',
    title: 'Baseline Assessment',
    timing: 'Week 1',
    desc: 'Full diagnostic workup establishing what normal looks like for you: bloodwork, cardiac testing (including CCTA coronary artery screening), body composition via Springbok MRI, hormones, sleep study, gut health, and micronutrient panel.',
  },
  {
    phase: '01',
    title: 'Kickoff Visit',
    timing: '60–90 Minutes',
    desc: 'We sit down, review all your data, discuss your training history and race goals. Together we build your Prime Directives — a prioritized medical action plan covering sleep protocols, nutrition, supplements, and any medical interventions.',
  },
  {
    phase: '02',
    title: 'Ongoing Monitoring',
    timing: 'Months 1–6',
    desc: 'Weekly reviews of your wearable data (Garmin, Whoop, Oura, Apple Watch). HRV, resting heart rate, sleep quality, training load — reviewed by an actual person on our medical team. Ongoing access for questions.',
  },
  {
    phase: '03',
    title: 'Mid-Cycle Check',
    timing: 'Month 3',
    desc: 'Second physician visit. We rerun bloodwork and key markers to see how you\'re adapting. This is where we recalibrate — what\'s working, what\'s not, what needs to change for the final push to race day.',
  },
  {
    phase: 'Final',
    title: 'Final Check & After Action Report',
    timing: 'Month 6',
    desc: 'Third physician visit. Final bloodwork. Before your event to hone last-minute adjustments, or after for optimal recovery planning. Full After Action Report assessing targets for your next training cycle.',
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative section-pad overflow-hidden"
      style={{
        backgroundImage: "url('/assets/generated/timeline-bg.dim_1920x600.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-vp-dark/90" />

      <div className="relative z-10 container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            The Program
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 leading-tight">
            Your 6-Month Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-vp-dark-border -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.phase}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 mb-8 md:mb-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div
                      className={`bg-vp-dark-2 border border-vp-dark-border rounded-lg p-6 hover:border-vp-amber/40 transition-colors ${
                        isEven ? '' : ''
                      }`}
                    >
                      <div className="text-vp-amber font-display text-xs uppercase tracking-widest font-600 mb-1">
                        {step.timing}
                      </div>
                      <h3 className="font-display font-700 text-xl uppercase tracking-wide text-vp-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-vp-white-muted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-vp-dark border-2 border-vp-amber items-center justify-center z-10 shadow-amber-glow-sm">
                    <span className="font-display font-800 text-xs text-vp-amber">{step.phase}</span>
                  </div>

                  {/* Mobile left indicator */}
                  <div className="md:hidden flex items-center gap-3 absolute -left-1 top-6">
                    <div className="w-8 h-8 rounded-full bg-vp-dark border-2 border-vp-amber flex items-center justify-center">
                      <span className="font-display font-800 text-xs text-vp-amber">{i + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
