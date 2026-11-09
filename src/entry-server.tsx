import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { LanguageProvider } from './i18n/LanguageProvider';
import type { Language } from './i18n/translations';

export { LANGUAGES, PAGE_META, pageUrl, renderHead } from './seo';

/** Renderiza a página inteira em HTML para um idioma (usado só no build, por scripts/prerender.mjs). */
export function render(lang: Language): string {
  return renderToString(
    <StrictMode>
      <LanguageProvider initialLanguage={lang}>
        <App />
      </LanguageProvider>
    </StrictMode>,
  );
}
