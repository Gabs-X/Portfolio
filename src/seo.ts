import { CONTACT, SITE_URL } from './config';
import type { Language } from './i18n/translations';

export const LANGUAGES: Language[] = ['pt', 'en'];

interface PageMeta {
  path: string;
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  imageAlt: string;
  jobTitle: string;
}

export const PAGE_META: Record<Language, PageMeta> = {
  pt: {
    path: '/',
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    title: 'Gabriel Anthony | Desenvolvedor Full Stack (.NET, React e IA)',
    description:
      'Desenvolvedor Full Stack com base em .NET, C# e SQL Server em sistemas financeiros e corporativos, hoje trabalhando com React, TypeScript e IA.',
    imageAlt: 'Gabriel Anthony, Desenvolvedor Full Stack',
    jobTitle: 'Desenvolvedor Full Stack',
  },
  en: {
    path: '/en/',
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Gabriel Anthony | Full Stack Developer (.NET, React and AI)',
    description:
      'Full Stack Developer with a .NET, C# and SQL Server foundation in financial and enterprise systems, now working with React, TypeScript and AI.',
    imageAlt: 'Gabriel Anthony, Full Stack Developer',
    jobTitle: 'Full Stack Developer',
  },
};

export function languageFromPath(pathname: string): Language {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'pt';
}

export const pageUrl = (lang: Language) => `${SITE_URL}${PAGE_META[lang].path}`;

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function personJsonLd(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Anthony Botelho',
    alternateName: 'Gabriel Anthony',
    jobTitle: PAGE_META[lang].jobTitle,
    description: PAGE_META[lang].description,
    url: pageUrl(lang),
    image: `${SITE_URL}/og-image.png`,
    email: `mailto:${CONTACT.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Uberaba',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    sameAs: [CONTACT.github, CONTACT.linkedin],
    knowsAbout: [
      '.NET',
      'C#',
      'SQL Server',
      'React',
      'TypeScript',
      'Node.js',
      'Next.js',
      'REST APIs',
      'OAuth',
      lang === 'pt' ? 'Integração com IA' : 'AI integration',
    ],
  };
}

/** Tags do <head> de cada idioma, injetadas no HTML estático pelo scripts/prerender.mjs. */
export function renderHead(lang: Language): string {
  const meta = PAGE_META[lang];
  const url = pageUrl(lang);
  const image = `${SITE_URL}/og-image.png`;
  const jsonLd = JSON.stringify(personJsonLd(lang)).replace(/</g, '\\u003c');

  return [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="author" content="Gabriel Anthony Botelho" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGUAGES.map(
      (alt) => `<link rel="alternate" hreflang="${PAGE_META[alt].htmlLang}" href="${pageUrl(alt)}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('pt')}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Gabriel Anthony" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(meta.imageAlt)}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    ...LANGUAGES.filter((alt) => alt !== lang).map(
      (alt) => `<meta property="og:locale:alternate" content="${PAGE_META[alt].ogLocale}" />`,
    ),
    `<meta property="profile:first_name" content="Gabriel" />`,
    `<meta property="profile:last_name" content="Anthony Botelho" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(meta.imageAlt)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}
