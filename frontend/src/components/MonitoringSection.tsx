import { Moon, Zap, Activity, Cpu, TrendingDown, Shield, Droplets, BarChart2 } from 'lucide-react';

const areas = [
  {
    icon: Moon,
    title: 'Sleep & Recovery',
    desc: 'If your sleep is broken — whether it\'s apnea, fragmented sleep, or just bad habits — you\'re not recovering. We figure out what\'s going on and fix it. Better sleep means you can actually absorb hard training.',
  },
  {
    icon: Zap,
    title: 'Nutrient Deficiencies',
    desc: 'Low iron is incredibly common in endurance athletes and will absolutely limit your performance. Same with vitamin D, B12, magnesium. We test for it, treat it, and retest to make sure it\'s fixed.',
  },
  {
    icon: Activity,
    title: 'Hormone & Tissue Optimization',
    desc: 'When panels show optimization opportunities — thyroid, testosterone, hormonal imbalances — we prescribe targeted therapies. Peptides when indicated: BPC-157 for injury recovery, thymosin beta-4 for tissue repair, growth hormone secretagogues for adaptation. Evidence-based, not doping.',
  },
  {
    icon: Cpu,
    title: 'Mitochondrial Function',
    desc: 'Your mitochondria produce the ATP that powers every session. When compromised by high training volume or nutrient deficiencies, you\'ll see unexplained fatigue and poor power output. We monitor and intervene with targeted supplementation and light therapy protocols.',
  },
  {
    icon: TrendingDown,
    title: 'Overtraining Signals',
    desc: 'Overtraining doesn\'t announce itself. It creeps in. We\'re watching hormone patterns, inflammatory markers, and your wearable data for early signs. The goal is to catch it before you lose weeks to it.',
  },
  {
    icon: Shield,
    title: 'Immune Function',
    desc: 'Getting sick right before your race is brutal. High training volume suppresses immune function — that\'s just how the body works. We work on keeping you healthy, especially in the final weeks before race day.',
  },
  {
    icon: Droplets,
    title: 'GI Issues',
    desc: 'GI problems in training or racing ruin everything. We look at gut health, work on building tolerance for your fueling strategy, and make sure your gut can handle what you\'re asking it to do on race day.',
  },
  {
    icon: BarChart2,
    title: 'Training Load vs. Recovery',
    desc: 'Every week we\'re looking at whether you\'re actually recovering from your training or just digging a deeper hole. Your wearable gives you data; we tell you what it means and what to do about it.',
  },
];

export default function MonitoringSection() {
  return (
    <section className="bg-vp-dark section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            Monitoring
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 mb-4 leading-tight">
            What We're Watching For
          </h2>
          <p className="text-vp-white-muted text-lg">
            Every week, an actual person on our medical team reviews your data and tells you what it means.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-vp-dark-2 border border-vp-dark-border rounded-lg p-6 hover:border-vp-amber/40 transition-all group hover:bg-vp-dark-3"
              >
                <div className="w-10 h-10 rounded bg-vp-amber/10 flex items-center justify-center mb-4 group-hover:bg-vp-amber/20 transition-colors">
                  <Icon size={20} className="text-vp-amber" />
                </div>
                <h3 className="font-display font-700 text-base uppercase tracking-wide text-vp-white mb-2 leading-tight">
                  {area.title}
                </h3>
                <p className="text-vp-white-dim text-xs leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
