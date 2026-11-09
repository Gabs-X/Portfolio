import { useLanguage } from '../i18n/useLanguage';
import { CONTACT } from '../config';
import AnimateIn from './AnimateIn';

export default function Footer() {
  const { t } = useLanguage();
  const { footer } = t;

  const channels = [
    { label: footer.email, value: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
    { label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedin, external: true },
    { label: 'GitHub', value: CONTACT.githubLabel, href: CONTACT.github, external: true },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <section id="contato" aria-labelledby="contato-titulo" className="py-20">
        <AnimateIn trigger="view" delay={0}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{footer.sectionLabel}</p>
              <h2 id="contato-titulo" className="text-white text-3xl font-bold tracking-tight mt-1">
                {footer.title}
              </h2>
              <p className="mt-3 text-sm text-slate-400">{footer.subtitle}</p>
              <a
                href={CONTACT.cv}
                download
                className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-lg font-bold transition-all"
              >
                {footer.downloadCv} &darr;
              </a>
            </div>

            <ul className="space-y-4">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{channel.label}</p>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>
      </section>

      <div className="py-6 border-t border-slate-900 text-center text-xs text-slate-600">
        {/* O ano do HTML pré-renderizado é o do build; no navegador pode mudar na virada do ano */}
        <span suppressHydrationWarning>© {new Date().getFullYear()} Gabriel Anthony Botelho</span>
      </div>
    </footer>
  );
}
