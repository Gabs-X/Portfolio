import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import LanguageSwitch from './LanguageSwitch';
import AnimateIn from './AnimateIn';
import BrandLogo from './BrandLogo';

const navLinks = [
  { href: '#sobre', key: 'sobre' as const },
  { href: '#projetos', key: 'projetos' as const },
  { href: '#contato', key: 'contato' as const },
];

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const menuLabel = menuOpen ? t.header.closeMenu : t.header.openMenu;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md text-white border-b border-slate-900 z-50">
      <AnimateIn trigger="load" delay={0} direction="down">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex justify-between items-center gap-4">
            <a href="#" className="flex items-center gap-2.5 min-w-0" onClick={closeMenu}>
              <BrandLogo size="sm" />
              <span className="font-mono font-bold tracking-tight text-sm truncate hidden sm:inline">
                gabriel.anthony
              </span>
            </a>

            <div className="flex items-center gap-3 md:gap-6">
              <nav className="hidden md:block">
                <ul className="flex space-x-8 text-xs font-mono uppercase tracking-wider text-slate-400">
                  {navLinks.map((link) => (
                    <li key={link.key}>
                      <a href={link.href} className="hover:text-cyan-400 transition-colors">
                        {t.header[link.key]}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="hidden md:block">
                <LanguageSwitch />
              </div>

              <button
                type="button"
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuLabel}
              >
                <span className="sr-only">{menuLabel}</span>
                {menuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </AnimateIn>

      {menuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-[57px] bg-slate-950/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label={t.header.closeMenu}
          />
          <nav className="md:hidden relative border-t border-slate-800 bg-slate-950/95 backdrop-blur-md animate-fade-in-down">
            <ul className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                  >
                    {t.header[link.key]}
                  </a>
                </li>
              ))}
            </ul>
            <div className="max-w-6xl mx-auto px-4 pb-5 pt-1 border-t border-slate-800/80">
              <p className="px-4 pb-2 text-[10px] font-mono uppercase tracking-widest text-slate-500">
                {t.header.language}
              </p>
              <div className="px-4">
                <LanguageSwitch />
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
