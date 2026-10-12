import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function asset(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader currentPage="projects" />
      <div className="site-shell subpage-shell">
        <main className="projects-page">
          <section className="subpage-intro" aria-labelledby="projects-title">
            <p className="eyebrow"><span className="eyebrow-dot" /> Selected work</p>
            <h1 className="subpage-title" id="projects-title">Projects</h1>
            <p className="subpage-summary">
              A few things I’ve built around digital logic, embedded systems, and the hardware–software boundary.
            </p>
          </section>

          <section className="project-grid" aria-label="Selected projects">
            {DATA.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={asset(project.image)}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-context">{project.context}</span>
                </div>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label="Technologies and topics">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                        <span>{link.label}</span>
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="project-contact-prompt" aria-label="Get in touch">
            <p>Interested in the details?</p>
            <a href={`${BASE_URL}contact/`}>
              Get in touch <ArrowUpRight aria-hidden="true" />
            </a>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
