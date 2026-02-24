import { Target, Activity, TrendingUp } from 'lucide-react';

const pillars = [
  {
    number: '01',
    icon: Target,
    title: 'Establish Your Baseline',
    desc: 'Full diagnostic workup to understand what normal looks like for you — bloodwork, cardiac testing, body composition, hormones, sleep, gut health. Your reference point for everything that follows.',
  },
  {
    number: '02',
    icon: Activity,
    title: 'Continuous Monitoring',
    desc: 'Weekly reviews of your wearable data — HRV, resting heart rate, sleep quality, training load. Not just graphs you\'re supposed to figure out yourself. An actual person on our medical team telling you what it means.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Intervention to Peak Performance',
    desc: 'When something\'s off, we fix it. Sleep protocols, nutrition adjustments, targeted supplementation, hormone therapy when indicated, peptides for recovery. Evidence-based interventions to get your physiology working optimally.',
  },
];

export default function ValuePropositionSection() {
  return (
    <section id="program" className="bg-vp-dark section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            What We Do
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 mb-6 leading-tight">
            Your Coach Builds the Engine.
            <br />
            <span className="text-vp-amber">We Make Sure It Can Handle the Load.</span>
          </h2>
          <p className="text-vp-white-muted text-lg leading-relaxed">
            Velocity Prime is a 6-month program that runs alongside your training block.
            We establish your baseline, monitor continuously, and intervene to get you to peak performance.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="relative bg-vp-dark-2 border border-vp-dark-border rounded-lg p-8 hover:border-vp-amber/50 transition-all group hover:shadow-card-dark"
              >
                {/* Number */}
                <div className="font-display font-900 text-6xl text-vp-amber/10 group-hover:text-vp-amber/20 transition-colors absolute top-6 right-6 leading-none select-none">
                  {pillar.number}
                </div>
                {/* Icon */}
                <div className="w-12 h-12 rounded bg-vp-amber/10 flex items-center justify-center mb-6 group-hover:bg-vp-amber/20 transition-colors">
                  <Icon size={24} className="text-vp-amber" />
                </div>
                <h3 className="font-display font-700 text-xl uppercase tracking-wide text-vp-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-vp-white-muted text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
