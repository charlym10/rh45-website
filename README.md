# Rh45 Website

The Rh45 Corp. website, built with Astro, Tailwind CSS and shadcn/ui. See `DESIGN.md` for its design system. React renders the shadcn components and icons at build time, and no React runs in the browser. The Home is in English at `/` and in Spanish at `/es/`; both read their texts from `src/i18n.ts`. The build also writes `sitemap-index.xml`, with both languages linked, and `public/robots.txt` points to it. Fonts are self-hosted, and the site sets no cookies.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`, and `npm run preview` serves it.

## Share the development server

With the server running, this opens a temporary public URL through a Cloudflare quick tunnel. The URL prints in the output and stops working when the command stops. Anyone with the URL can reach the development server.

```bash
cloudflared tunnel --url http://localhost:4321 --http-host-header localhost:4321
```

## Deploy with GitHub Pages

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.

Before the first deploy, open **Settings → Pages** in the repository and, under **Build and deployment**, set **Source** to **GitHub Actions**. The custom domain comes from `public/CNAME`.

Expected site URL:
https://rh45.ai/
