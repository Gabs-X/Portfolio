import { useLanguage } from '../i18n/useLanguage';
import { CONTACT } from '../config';
import AnimateIn from './AnimateIn';
import BrandLogo from './BrandLogo';

export default function TerminalHero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-950 text-white pt-24 px-6">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-slate-900 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          <div className="max-w-2xl space-y-4">
            <AnimateIn trigger="load" delay={100}>
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-900">
                {hero.badge}
              </span>
            </AnimateIn>
            <AnimateIn trigger="load" delay={250}>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                {hero.title}
              </h1>
            </AnimateIn>
            <AnimateIn trigger="load" delay={400}>
              <p className="text-slate-400 text-sm leading-relaxed">{hero.description}</p>
            </AnimateIn>
            <AnimateIn trigger="load" delay={550}>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-lg transition-all"
                >
                  {hero.viewProjects} &rarr;
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-lg font-bold transition-all"
                >
                  {hero.contact}
                </a>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn trigger="load" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 scale-90 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <BrandLogo
                size="lg"
                className="relative drop-shadow-[0_0_48px_rgba(34,211,238,0.12)]"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
