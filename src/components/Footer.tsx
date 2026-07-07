import { useLanguage } from '../i18n/useLanguage';
import { CONTACT } from '../config';
import AnimateIn from './AnimateIn';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contato"
      className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400"
    >
      <AnimateIn trigger="view" delay={0}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-xl font-bold">{t.footer.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{t.footer.subtitle}</p>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {CONTACT.email}
            </a>

            <div className="flex gap-6 text-sm">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn trigger="view" delay={150}>
        <div className="mt-10 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Gabriel Anthony Botelho
        </div>
      </AnimateIn>
    </footer>
  );
}
