import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'
import { languageFromPath } from './seo.ts'
import type { Language } from './i18n/translations.ts'

const container = document.getElementById('root')!
// No build, o HTML já vem pré-renderizado (scripts/prerender.mjs) e o React só hidrata.
// No `npm run dev` o #root chega vazio e o app é montado do zero.
const prerendered = container.firstElementChild !== null

// Hidratação precisa usar o idioma em que o HTML foi gerado; sem HTML pronto, vale a URL.
const language: Language = prerendered
  ? document.documentElement.lang === 'en' ? 'en' : 'pt'
  : languageFromPath(window.location.pathname)

const app = (
  <StrictMode>
    <LanguageProvider initialLanguage={language}>
      <App />
    </LanguageProvider>
  </StrictMode>
)

if (prerendered) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
