# Rh45 Website

The Rh45 Corp. website, built with Astro, Tailwind CSS and shadcn/ui. See `DESIGN.md` for its design system. React renders most shadcn components at build time; only the About tabs run React in the browser.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`, and `npm run preview` serves it.

## Deploy with GitHub Pages

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.

Before the first deploy, open **Settings → Pages** in the repository and, under **Build and deployment**, set **Source** to **GitHub Actions**. The custom domain comes from `public/CNAME`.

Expected site URL:
https://rh45.ai/
