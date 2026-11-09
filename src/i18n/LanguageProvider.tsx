import { useEffect, useState, type ReactNode } from 'react';
import { translations } from './translations';
import type { Language } from './translations';
import { LanguageContext } from './languageContext';
import { PAGE_META } from '../seo';

interface LanguageProviderProps {
  children: ReactNode;
  /** Idioma da página: vem da URL ("/" = PT, "/en/" = EN), igual no HTML estático e no navegador. */
  initialLanguage: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Troca a URL sem recarregar, mantendo a âncora atual (ex.: #projetos)
    window.history.replaceState(null, '', `${PAGE_META[lang].path}${window.location.hash}`);
  };

  useEffect(() => {
    document.documentElement.lang = PAGE_META[language].htmlLang;
    document.title = PAGE_META[language].title;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
