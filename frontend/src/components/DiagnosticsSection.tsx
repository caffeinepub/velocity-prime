import { Heart } from 'lucide-react';

const diagnostics = [
  {
    name: 'Comprehensive Blood Panel',
    badge: '3×',
    timing: 'Baseline · Month 3 · Month 6',
    desc: 'Iron status, vitamin D, inflammation markers, hormones, metabolic health. We\'re tracking how you\'re adapting over time — not just a one-time snapshot.',
    highlight: false,
  },
  {
    name: 'Springbok MRI',
    badge: 'Body Comp',
    timing: 'Baseline',
    desc: 'The most extensive body composition analysis available — muscle quality, imbalances, fat distribution, and injury risk patterns. Far more comprehensive than a DEXA scan.',
    highlight: false,
  },
  {
    name: 'DUTCH Test',
    badge: 'Hormones',
    timing: 'Baseline',
    desc: 'Complete hormone picture — stress hormones, sex hormones, cortisol patterns. Tells us if you\'re actually recovering or just accumulating stress. Standard blood tests don\'t reveal this.',
    highlight: false,
  },
  {
    name: 'Sleep Study',
    badge: 'Recovery',
    timing: 'Baseline',
    desc: 'Sleep architecture, apnea risk, how much you\'re actually recovering at night. Bad sleep tanks everything else — and most athletes have no idea how broken their sleep is.',
    highlight: false,
  },
  {
    name: 'Micronutrient Panel',
    badge: 'Deficiencies',
    timing: 'Baseline',
    desc: 'Catches the stuff basic bloodwork misses. You\'d be surprised how often we find deficiencies that explain fatigue or poor recovery that nothing else has identified.',
    highlight: false,
  },
  {
    name: 'GI-MAP',
    badge: 'Gut Health',
    timing: 'Baseline',
    desc: 'Gut health matters more than most people realize. Absorption, inflammation, microbiome balance — all relevant for race-day fueling and high-carbohydrate utilization events.',
    highlight: false,
  },
  {
    name: 'CCTA — Cardiac Readiness',
    badge: '❤ Critical',
    timing: 'Baseline',
    desc: 'A non-invasive scan giving us a detailed look at the arteries supplying your heart. Detects plaque buildup, narrowing, and structural issues a standard EKG misses. Clears you for hard training with confidence.',
    highlight: true,
  },
  {
    name: 'Wearable Integration',
    badge: 'Weekly',
    timing: 'Months 1–6',
    desc: 'We use your Garmin, Whoop, Oura, or Apple Watch and actually interpret the data. Weekly reviews — not just graphs you\'re supposed to figure out yourself.',
    highlight: false,
  },
];

export default function DiagnosticsSection() {
  return (
    <section id="testing" className="bg-vp-dark-2 section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            Diagnostics
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 mb-4 leading-tight">
            What We're Actually Testing
          </h2>
          <p className="text-vp-white-muted text-lg">
            Casting a wide net to find what's actually limiting you — not guessing.
          </p>
        </div>

        {/* Feature image */}
        <div className="relative rounded-xl overflow-hidden mb-12 max-h-64 md:max-h-80">
          <img
            src="/assets/generated/diagnostics-feature.dim_1200x600.png"
            alt="Biomarker monitoring visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vp-dark-2 via-transparent to-transparent" />
        </div>

        {/* Diagnostics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diagnostics.map((test) => (
            <div
              key={test.name}
              className={`relative rounded-lg p-6 border transition-all group ${
                test.highlight
                  ? 'bg-vp-dark-3 border-vp-amber/60 shadow-amber-glow-sm hover:shadow-amber-glow'
                  : 'bg-vp-dark-3 border-vp-dark-border hover:border-vp-amber/40'
              }`}
            >
              {test.highlight && (
                <div className="absolute top-4 right-4">
                  <Heart size={18} className="text-vp-amber fill-vp-amber/30" />
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span
                    className={`inline-block px-2 py-0.5 text-xs font-display font-600 uppercase tracking-wider rounded ${
                      test.highlight
                        ? 'bg-vp-amber text-vp-dark'
                        : 'bg-vp-amber/15 text-vp-amber'
                    }`}
                  >
                    {test.badge}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    <h3 className="font-display font-700 text-base uppercase tracking-wide text-vp-white">
                      {test.name}
                    </h3>
                    <span className="text-xs text-vp-white-dim font-display">{test.timing}</span>
                  </div>
                  <p className="text-vp-white-muted text-sm leading-relaxed">{test.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cardiac highlight */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/assets/generated/cardiac-highlight.dim_800x600.png"
              alt="CCTA cardiac screening visualization"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
          <div>
            <span className="text-vp-amber font-display text-xs uppercase tracking-widest font-600">
              Cardiac Clearance
            </span>
            <h3 className="font-display font-800 text-2xl md:text-3xl uppercase text-vp-white mt-2 mb-4 leading-tight">
              Train Hard.<br />
              <span className="text-vp-amber">Know Your Heart Can Handle It.</span>
            </h3>
            <p className="text-vp-white-muted text-sm leading-relaxed mb-4">
              Years of high training volume create real cardiovascular demands. A standard EKG doesn't tell the whole story.
              The CCTA detects plaque buildup, narrowing, and structural issues that other screenings miss.
            </p>
            <p className="text-vp-white-muted text-sm leading-relaxed">
              Most age-group athletes have never had a meaningful cardiovascular screening, yet they're routinely
              asking their hearts to perform at extreme levels. We change that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
