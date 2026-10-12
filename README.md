# Personal site

A small systems-oriented portfolio built with Astro and based on the [Starfolio template](https://github.com/webrating/starfolio). The visual direction is editorial and minimal: warm paper, deep ink, precise rules, and a diagram that hints at the software/hardware boundary.

## Edit your content

The site content is in [`src/data/resume.tsx`](src/data/resume.tsx):

- The introduction and internship titles/dates are based on Haibo's CV.
- Each experience row shows a compact company mark, job title, company, and dates; it intentionally has no role description.
- The selected project rows link directly to public GitHub repositories.
- Update the LinkedIn URL if you use a different public profile URL.

To use official company logo artwork, add a small image in `public/logos/` and point that internship's `logoUrl` at it. Keeping assets in the repository makes them load reliably and avoids third-party logo services. Each experience row has a compact monogram fallback.

Set colors in [`src/styles/global.css`](src/styles/global.css). The deployment URL and repository subpath are read from GitHub Actions automatically. For a custom domain, set `SITE_URL` in the workflow and add your domain to `public/CNAME` after configuring DNS.

## Preview locally

You'll need Node.js 22.12 or later and pnpm:

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Astro. Run `pnpm build` to create the production files in `dist/`.

## Publish with GitHub Pages

Push this repository to GitHub on the `main` branch. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys it after each push. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source. The correct root or repository subpath is selected from `GITHUB_REPOSITORY` during the build.

The site uses the `Haibo-S.github.io` repository name, so GitHub Pages will serve it from the domain root rather than a repository subpath.

## Template credit

Starfolio is distributed under the MIT License; see [`LICENSE`](LICENSE).
