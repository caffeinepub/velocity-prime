import { Check, ArrowRight } from 'lucide-react';

const inclusions = [
  'All diagnostic testing',
  'Three comprehensive physician visits (intravisit text/email access)',
  'Three blood draws with serial analysis',
  'Springbok MRI body composition analysis',
  'DUTCH hormone panel',
  'Sleep study',
  'Micronutrient testing',
  'GI-MAP gut health test',
  'Continuous wearable monitoring',
  'Weekly plan adjustments',
  'Ongoing medical support',
  'Peptide and hormone therapy recommendations when indicated',
  'CCTA and EKG for complete cardiac prescreening',
];

export default function PricingSection() {
  const handleApplyClick = () => {
    document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="bg-vp-dark-2 section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            Investment
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 leading-tight">
            Program Pricing
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-vp-dark-3 border border-vp-amber/40 rounded-2xl overflow-hidden shadow-amber-glow">
            {/* Price Header */}
            <div className="bg-gradient-to-br from-vp-dark-4 to-vp-dark-3 px-8 py-10 text-center border-b border-vp-dark-border">
              <div className="font-display font-900 text-6xl md:text-7xl text-vp-amber leading-none mb-2">
                $12,000
              </div>
              <div className="font-display text-xl text-vp-white-muted uppercase tracking-widest">
                6-Month Program
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-vp-amber/10 border border-vp-amber/30 rounded-full px-4 py-1.5">
                <Check size={14} className="text-vp-amber" />
                <span className="text-vp-amber text-xs font-display font-600 uppercase tracking-wider">
                  No hidden fees. No surprise bills.
                </span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="px-8 py-8">
              <h3 className="font-display font-700 text-sm uppercase tracking-widest text-vp-white-muted mb-6">
                Everything Included:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-vp-amber/15 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-vp-amber" />
                    </div>
                    <span className="text-vp-white-muted text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Pharmacy note */}
              <p className="mt-6 text-vp-white-dim text-xs leading-relaxed border-t border-vp-dark-border pt-4">
                * Pharmacy costs for peptide and hormone therapies are additional and vary based on individual prescriptions.
                Stem cell therapy access through partner clinics is available at separate cost.
              </p>

              {/* CTA */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleApplyClick}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-vp-amber text-vp-dark font-display font-800 text-base uppercase tracking-widest rounded hover:bg-vp-amber-light transition-all shadow-amber-glow hover:scale-105 active:scale-100"
                >
                  Apply for the Program
                  <ArrowRight size={18} />
                </button>
                <p className="mt-3 text-vp-white-dim text-xs">
                  Limited enrollment. Spots fill quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
