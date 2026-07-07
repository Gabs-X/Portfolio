import { useEffect, useState, type ReactNode } from 'react';
import { translations } from './translations';
import type { Language } from './translations';
import {
  LanguageContext,
  STORAGE_KEY,
  getInitialLanguage,
} from './languageContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
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
