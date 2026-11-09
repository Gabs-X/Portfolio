// Pré-renderização (SSG) do portfólio, rodada no fim do `npm run build`.
//
// 1. `vite build` gera o app normal em dist/ (dist/index.html é o template).
// 2. `vite build --ssr src/entry-server.tsx --outDir dist-ssr` gera a versão de servidor do mesmo app.
// 3. Este script renderiza cada idioma com renderToString e grava HTML estático com o conteúdo real:
//      dist/index.html     -> PT (padrão)
//      dist/en/index.html  -> EN
//    e gera dist/sitemap.xml. No navegador, o React hidrata esse HTML (src/main.tsx).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, renderHead, LANGUAGES, PAGE_META, pageUrl } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(join(dist, 'index.html'), 'utf8');
const replaceOnce = (html, search, value) => {
  if (!html.includes(search)) throw new Error(`prerender: "${search}" não encontrado no dist/index.html`);
  return html.replace(search, () => value);
};

for (const lang of LANGUAGES) {
  const meta = PAGE_META[lang];
  let html = template;
  html = replaceOnce(html, '<html lang="pt-BR">', `<html lang="${meta.htmlLang}">`);
  // O React 19 abre o HTML com <link rel="preload"> das imagens; eles vão para o <head>, não para o #root
  const appHtml = render(lang);
  const preloads = appHtml.match(/^(?:<link [^>]*>)*/)[0];
  html = html.replace(/<title>[\s\S]*?<\/title>/, () => [renderHead(lang), preloads].filter(Boolean).join('\n    '));
  html = replaceOnce(html, '<!--app-html-->', appHtml.slice(preloads.length));

  const file = join(dist, meta.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender: ${meta.path} -> ${file.slice(root.length + 1)} (${(html.length / 1024).toFixed(1)} kB)`);
}

const today = new Date().toISOString().slice(0, 10);
const alternates = LANGUAGES.map(
  (alt) => `    <xhtml:link rel="alternate" hreflang="${PAGE_META[alt].htmlLang}" href="${pageUrl(alt)}" />`,
).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGUAGES.map(
  (lang) => `  <url>
    <loc>${pageUrl(lang)}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`,
).join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
console.log('prerender: sitemap.xml gerado');

// A versão de servidor só serve para gerar o HTML; não vai para o deploy.
rmSync(ssrDir, { recursive: true, force: true });
