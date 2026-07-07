import { createContext } from 'react';
import type { Language, Translations } from './translations';

export const STORAGE_KEY = 'portfolio-lang';

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') return stored;
  return 'pt';
}
