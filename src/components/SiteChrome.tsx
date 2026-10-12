import { ArrowUpRight, Mail } from "lucide-react";
import { DATA } from "@/data/resume";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

type Page = "home" | "projects";

export function SocialLinks() {
  return (
    <div className="social-links" role="group" aria-label="Contact and social profiles">
      <a href={DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
        <svg className="social-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.18c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.57-.29-5.28-1.28-5.28-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.2 11.2 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.11 0 4.43-2.71 5.4-5.29 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.2.21.79.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      </a>
      <a href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <svg className="social-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
      </a>
      <a href={`mailto:${DATA.email}`} aria-label={`Email ${DATA.email}`} title={DATA.email}>
        <Mail className="mail-mark" aria-hidden="true" />
      </a>
    </div>
  );
}

export function SiteHeader({ currentPage = "home" }: { currentPage?: Page }) {
  const aboutHref = currentPage === "home" ? "#about" : `${BASE_URL}#about`;
  const experienceHref = currentPage === "home" ? "#experience" : `${BASE_URL}#experience`;
  const educationHref = currentPage === "home" ? "#education" : `${BASE_URL}#education`;
  const items = [
    { label: "About", href: aboutHref, page: "home" },
    { label: "Experience", href: experienceHref },
    { label: "Education", href: educationHref },
    { label: "Projects", href: `${BASE_URL}projects/`, page: "projects" },
  ];

  return (
    <header className="site-header">
      <a className="wordmark" href={aboutHref} aria-label={`${DATA.name}, home`}>
        <span>{DATA.name}</span>
      </a>
      <nav aria-label="Main navigation" className="site-nav">
        {items.map((item) => (
          <a
            href={item.href}
            key={item.label}
            aria-current={item.page === currentPage ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="resume-link"
          href={DATA.resume}
          target="_blank"
          rel="noreferrer"
          aria-label="Open résumé on Google Drive in a new tab"
        >
          <span>Résumé</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <SocialLinks />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {DATA.name}</span>
      <a className="footer-email" href={`mailto:${DATA.email}`}>{DATA.email}</a>
      <SocialLinks />
    </footer>
  );
}
