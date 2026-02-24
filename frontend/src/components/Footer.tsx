import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'velocity-prime');

  return (
    <footer className="bg-vp-dark border-t border-vp-dark-border py-10">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="/assets/generated/logo-wordmark.dim_400x80.png"
              alt="Velocity Prime"
              className="h-7 w-auto opacity-80"
            />
            <p className="text-vp-white-dim text-xs">
              Precision Sports Medicine for High-Performance Athletes
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Program', 'Testing', 'Timeline', 'Pricing', 'FAQ', 'Apply'].map((item) => (
              <button
                key={item}
                onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-vp-white-dim text-xs font-display uppercase tracking-wider hover:text-vp-amber transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-vp-dark-border flex flex-col md:flex-row items-center justify-between gap-3 text-vp-white-dim text-xs">
          <p>© {year} Velocity Prime. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart size={12} className="text-vp-amber fill-vp-amber/60 mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vp-amber hover:text-vp-amber-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
