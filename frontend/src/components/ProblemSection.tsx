import { AlertTriangle, Heart, Moon, Zap, TrendingDown, Shield } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: 'Overtraining Creeps In',
    desc: 'It doesn\'t announce itself. By the time you feel it, you\'ve already lost weeks of adaptation.',
  },
  {
    icon: Zap,
    title: 'Nutrient Deficiencies',
    desc: 'Low iron, vitamin D, B12 — silently eroding your potential while your training log looks fine.',
  },
  {
    icon: Moon,
    title: 'Poor Sleep Compounds',
    desc: 'Bad sleep tanks recovery, hormones, and immune function. Most athletes have no idea how broken their sleep is.',
  },
  {
    icon: Shield,
    title: 'Immune Suppression',
    desc: 'High training volume suppresses immunity. Getting sick two weeks before your goal race is brutal — and preventable.',
  },
  {
    icon: Heart,
    title: 'Undetected Cardiac Risk',
    desc: 'Most age-group athletes have never had a meaningful cardiovascular screening, yet they\'re routinely asking their hearts to perform at extreme levels.',
  },
  {
    icon: AlertTriangle,
    title: 'No Medical Team',
    desc: 'Elite athletes have physicians, physiologists, and nutritionists watching all of this. Most age-groupers are troubleshooting on Reddit.',
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-vp-dark-2 section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            The Problem
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 mb-6 leading-tight">
            There's a Gap in the Middle.<br />
            <span className="text-vp-amber">That's Where Things Go Sideways.</span>
          </h2>
          <p className="text-vp-white-muted text-lg leading-relaxed">
            You've got a coach handling the training plan. Maybe you see an orthopedist when something breaks.
            But there's a gap in the middle — where overtraining creeps in unnoticed, where deficiencies silently
            erode your potential, and where an undetected cardiac issue puts you at real risk every time you push
            into high-intensity training.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-vp-dark-3 border border-vp-dark-border rounded-lg p-6 hover:border-vp-amber/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-vp-amber/10 flex items-center justify-center mb-4 group-hover:bg-vp-amber/20 transition-colors">
                  <Icon size={20} className="text-vp-amber" />
                </div>
                <h3 className="font-display font-700 text-lg uppercase tracking-wide text-vp-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-vp-white-muted text-sm leading-relaxed">{problem.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 p-6 md:p-8 border-l-4 border-vp-amber bg-vp-dark-3 rounded-r-lg">
          <p className="text-vp-white text-lg md:text-xl font-300 leading-relaxed">
            <span className="text-vp-amber font-600">Velocity Prime fills that gap</span> — including cardiovascular
            clearance through advanced imaging to make sure you can train hard with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
