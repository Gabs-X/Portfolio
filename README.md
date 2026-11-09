# Portfolio — Gabriel Anthony Botelho

Portfólio pessoal single-page com visual inspirado em terminal, i18n PT/EN e seções de apresentação, skills, experiência e projetos.

**Stack:** React 19 · TypeScript · Vite 8 · Tailwind CSS 4

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ com HTML pré-renderizado (PT em /, EN em /en/)
npm run preview  # preview do build
npm run lint
```

## Estrutura

```
src/
├── components/   # UI por seção
├── i18n/         # traduções e LanguageProvider
├── pages/Home.tsx
├── config.ts     # e-mail, links sociais e caminho do CV
├── seo.ts        # título, description, Open Graph, JSON-LD por idioma
├── entry-server.tsx  # renderização usada só no build
└── App.tsx
scripts/prerender.mjs  # gera dist/index.html, dist/en/index.html e sitemap.xml
public/
├── Gabriel-Anthony-CV.pdf
└── projects/     # prints dos projetos (WebP 1280x720)
```

Textos em `src/i18n/translations.ts`. O idioma vem da URL: `/` é PT e `/en/` é EN.

## Deploy

Build estático em `dist/`. O `npm run build` roda o build normal, um build SSR de `src/entry-server.tsx` e o `scripts/prerender.mjs`, que grava o HTML de cada idioma com o conteúdo real (lido por ATS, buscadores e prévias de link sem JS). No navegador, o React hidrata esse HTML. `vercel.json` liga `trailingSlash` para `/en` virar `/en/`.

## Contato

- [gabrielanthony.dev@gmail.com](mailto:gabrielanthony.dev@gmail.com)
- [GitHub — @Gabs-X](https://github.com/Gabs-X)
- [LinkedIn](https://www.linkedin.com/in/gabriel-anthony-7688bb224/)
