# Haibo Sun — personal site

A small, photo-led personal portfolio built with Astro and based on the [Starfolio template](https://github.com/webrating/starfolio). The page has a short introduction, Waterloo education mark, internship history, and selected project links. Its palette is white with warm yellow accents, and the type uses the visitor’s clean system sans-serif fonts.

## Edit the content

Personal details, education, roles, dates, and project links are in [`src/data/resume.tsx`](src/data/resume.tsx). Photos and organization marks live in `public/images/` and `public/logos/`.

The attached portrait is optimized as a WebP image, and the coastal photo appears as a faint decorative haze behind the portrait. EXIF metadata has been removed from the site images.

## Logo sources

- University of Waterloo: [official brand downloads](https://uwaterloo.ca/brand/uw-logos/university-logos/all)
- Untether AI: [company LinkedIn page](https://www.linkedin.com/company/untether-ai/)
- Tenstorrent, Great Circle Solar, and onsemi: company website marks
- NVIDIA and Huawei: locally bundled brand symbols

The organization marks identify past workplaces and the university; they are not endorsements. They are stored locally so the site does not depend on third-party image requests.

## Preview

Use Node.js 22.12 or later and pnpm:

```sh
pnpm install
pnpm dev
```

Run `pnpm build` for the production site in `dist/`.

## Publish

Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes the site through GitHub Pages. In **Settings → Pages**, the source must be set to **GitHub Actions**.

## Template credit

Starfolio is distributed under the MIT License; see [`LICENSE`](LICENSE).
