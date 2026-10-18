# Portfolio — Gabriel Anthony Botelho

Portfólio pessoal single-page com visual inspirado em terminal, i18n PT/EN e seções de apresentação, skills, experiência e projetos.

**Stack:** React 19 · TypeScript · Vite 8 · Tailwind CSS 4

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # preview do build
npm run lint
```

## Estrutura

```
src/
├── components/   # UI por seção
├── i18n/         # traduções e LanguageProvider
├── pages/Home.tsx
├── config.ts     # e-mail e links sociais
└── App.tsx
```

Textos em `src/i18n/translations.ts`. Idioma salvo em `localStorage` (`portfolio-lang`).

## Deploy

Build estático em `dist/` — compatível com Vercel, Netlify, GitHub Pages, etc.

## Contato

- [gabrielanthony.dev@gmail.com](mailto:gabrielanthony.dev@gmail.com)
- [GitHub — @Gabs-X](https://github.com/Gabs-X)
- [LinkedIn](https://www.linkedin.com/in/gabriel-anthony-7688bb224/)
