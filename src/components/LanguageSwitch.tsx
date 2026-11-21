import { useLanguage } from '../i18n/useLanguage';
import { PAGE_META } from '../seo';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-[10px] font-mono uppercase tracking-wider"
      role="group"
      aria-label="Language"
    >
      {(['pt', 'en'] as const).map((lang) => (
        // Link de verdade (/ e /en/): funciona sem JS e ajuda buscadores a achar a versão em inglês
        <a
          key={lang}
          href={PAGE_META[lang].path}
          hrefLang={PAGE_META[lang].htmlLang}
          onClick={(event) => {
            event.preventDefault();
            setLanguage(lang);
          }}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            language === lang
              ? 'bg-slate-800 text-cyan-400'
              : 'text-slate-500 hover:text-slate-300'
          }`}
          aria-current={language === lang ? 'page' : undefined}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
