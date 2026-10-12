import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// GitHub Actions provides GITHUB_REPOSITORY (owner/repo). This lets Astro
// choose the correct Pages URL for either owner.github.io or a project site.
const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const site = process.env.SITE_URL ?? (owner ? `https://${owner.toLowerCase()}.github.io` : "https://yourusername.github.io");
const isUserOrOrgSite = owner && repository?.toLowerCase() === `${owner}.github.io`.toLowerCase();
const base = !process.env.SITE_URL && repository && !isUserOrOrgSite
  ? `/${repository}`
  : undefined;

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [react(), sitemap()],
});
