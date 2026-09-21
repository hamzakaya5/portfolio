# Hamza Kaya — Portfolio

## Static website

`index.html` is the standalone portfolio published to GitHub Pages. It contains
its own styles and inline icons; no build step is required.

The workflow in `.github/workflows/deploy-pages.yml` publishes the page when
`index.html` or the workflow changes on `main`. It can also be run manually
from the repository's Actions tab. Set Settings → Pages → Source to GitHub Actions.

## React application

The repository also contains a TanStack Start application using React,
TypeScript, and Tailwind CSS.

```sh
npm ci
npm run dev
```

Run `npm run build` to build the application with Nitro's Cloudflare preset.
The GitHub Pages workflow publishes the standalone HTML page independently
of this application.
