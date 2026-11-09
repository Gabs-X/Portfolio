import { createContext } from 'react';
import type { Language, Translations } from './translations';

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
