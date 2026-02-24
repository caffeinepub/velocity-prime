export default function HeroSection() {
  const handleApplyClick = () => {
    const el = document.querySelector('#apply');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1920x1080.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-vp-dark/70 via-vp-dark/50 to-vp-dark" />
      {/* Side vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-vp-dark/60 via-transparent to-vp-dark/60" />

      {/* Content */}
      <div className="relative z-10 container-site text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-vp-amber" />
            <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
              Precision Sports Medicine
            </span>
            <span className="h-px w-8 bg-vp-amber" />
          </div>

          {/* Brand Name */}
          <h1 className="font-display font-900 text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-vp-white leading-none mb-4">
            Velocity
            <br />
            <span className="text-vp-amber">Prime</span>
          </h1>

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl text-vp-white-muted uppercase tracking-[0.15em] font-400 mb-8">
            For High-Performance Athletes
          </p>

          {/* Hook */}
          <p className="text-lg md:text-xl text-vp-white-muted max-w-2xl mx-auto mb-10 leading-relaxed font-300">
            Elite athletes have medical teams watching everything. Now you do too.
            Close the gap between your training and your physiology — and race with confidence.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleApplyClick}
              className="px-10 py-4 bg-vp-amber text-vp-dark font-display font-800 text-base uppercase tracking-widest rounded hover:bg-vp-amber-light transition-all shadow-amber-glow hover:shadow-amber-glow hover:scale-105 active:scale-100"
            >
              Apply for the Program
            </button>
            <button
              onClick={() => document.querySelector('#program')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-vp-white/30 text-vp-white font-display font-600 text-base uppercase tracking-widest rounded hover:border-vp-amber hover:text-vp-amber transition-all"
            >
              Learn More
            </button>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '6', label: 'Month Program' },
              { value: '3×', label: 'Physician Visits' },
              { value: '8+', label: 'Diagnostics' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-900 text-3xl text-vp-amber">{stat.value}</div>
                <div className="text-xs text-vp-white-dim uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-vp-white-dim">
        <span className="text-xs uppercase tracking-widest font-display">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-vp-white-dim to-transparent animate-pulse" />
      </div>
    </section>
  );
}
