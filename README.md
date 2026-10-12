# Haibo Sun — personal site

A personal portfolio built with Astro and based on the [Starfolio template](https://github.com/webrating/starfolio). It has an introduction, a prominent Waterloo education panel, and a large single-column industry experience list. The About background randomly selects one of four supplied landscape photographs on each page load; the portrait remains a separate square image.

## Edit the content

Personal details, education, roles, dates, and background photo choices are in [`src/data/resume.tsx`](src/data/resume.tsx). Photos and organization marks live in `public/images/` and `public/logos/`.

The attached portrait is optimized as a WebP image, and the supplied landscape photos rotate as a faint, full-width background behind the introduction. EXIF metadata has been removed from the site images.

## Logo sources

- University of Waterloo: [official brand downloads](https://uwaterloo.ca/brand/uw-logos/university-logos/all)
- Untether AI: [company LinkedIn page](https://www.linkedin.com/company/untether-ai/)
- onsemi: official full-color wordmark from [onsemi.com](https://www.onsemi.com/images/logo/onsemi_logo_full_color.svg)
- Tenstorrent and Great Circle Solar: company website marks
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
