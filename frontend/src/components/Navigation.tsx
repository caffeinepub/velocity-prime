import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Program', href: '#program' },
  { label: 'Testing', href: '#testing' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-vp-dark/95 backdrop-blur-md border-b border-vp-dark-border shadow-card-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/assets/generated/logo-wordmark.dim_400x80.png"
              alt="Velocity Prime"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-vp-white-muted hover:text-vp-white transition-colors tracking-wide uppercase font-display"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#apply')}
              className="ml-4 px-5 py-2 bg-vp-amber text-vp-dark font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-vp-amber-light transition-all shadow-amber-glow-sm"
            >
              Apply
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-vp-white-muted hover:text-vp-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-vp-dark-2 border-t border-vp-dark-border">
          <nav className="container-site py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-display font-600 uppercase tracking-wide text-vp-white-muted hover:text-vp-white hover:bg-vp-dark-3 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#apply')}
              className="mt-2 mx-4 py-3 bg-vp-amber text-vp-dark font-display font-700 text-sm uppercase tracking-widest rounded text-center hover:bg-vp-amber-light transition-all"
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
