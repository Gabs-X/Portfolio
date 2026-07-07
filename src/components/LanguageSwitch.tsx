import { useLanguage } from '../i18n/useLanguage';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-[10px] font-mono uppercase tracking-wider"
      role="group"
      aria-label="Language"
    >
      {(['pt', 'en'] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            language === lang
              ? 'bg-slate-800 text-cyan-400'
              : 'text-slate-500 hover:text-slate-300'
          }`}
          aria-pressed={language === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
