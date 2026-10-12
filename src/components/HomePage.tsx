import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function ExperienceList() {
  if (DATA.work.length === 0) {
    return <p className="portfolio-empty">Verified internship roles will appear here.</p>;
  }

  return (
    <div className="experience-list">
      {DATA.work.map((work) => (
        <a
          className="experience-row"
          href={work.href}
          target="_blank"
          rel="noreferrer"
          key={`${work.company}-${work.title}-${work.period}`}
        >
          <span
            className="company-logo"
            aria-hidden="true"
            style={{ color: work.logoColor }}
          >
            {work.logoUrl ? (
              <img
                src={work.logoUrl.startsWith("http")
                  ? work.logoUrl
                  : `${BASE_URL}${work.logoUrl.replace(/^\/+/, "")}`}
                alt=""
              />
            ) : (
              work.logoMark
            )}
          </span>
          <span className="experience-title">
            <span className="experience-role">{work.title}</span>
            <span className="experience-company">{work.company}</span>
          </span>
          <span className="experience-period">{work.period}</span>
          <ArrowUpRight className="row-arrow" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function ProjectList() {
  if (DATA.projects.length === 0) {
    return <p className="portfolio-empty">Selected projects and public links will appear here.</p>;
  }

  return (
    <div className="project-list">
      {DATA.projects.map((project, index) => (
        <article className="project-row" key={project.title}>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          {project.href ? (
            <a className="project-title" href={project.href} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          ) : (
            <span className="project-title">{project.title}</span>
          )}
          <div className="project-links">
            {project.links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label={`${DATA.name}, home`}>
          <span className="wordmark-mark" aria-hidden="true">H</span>
          <span>{DATA.name}</span>
        </a>
        <nav aria-label="Main navigation" className="site-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="header-link" href={DATA.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>{DATA.roleLabel}</span>
            </div>
            <h1 id="hero-title">Software,<br /><em>at the system level.</em></h1>
            <p className="hero-intro">{DATA.description}</p>
            <a className="scroll-link" href="#experience">
              Explore experience <ArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className="machine-figure" aria-label="A simplified view from software down to hardware">
            <div className="figure-heading">
              <span>ABSTRACTION / 001</span>
              <span>↘</span>
            </div>
            <div className="machine-stack" aria-hidden="true">
              <div className="stack-line" />
              <div className="stack-node"><span>01</span><b>Process</b><i>USER SPACE</i></div>
              <div className="stack-node"><span>02</span><b>Memory</b><i>RUNTIME</i></div>
              <div className="stack-node"><span>03</span><b>Kernel</b><i>OPERATING SYSTEM</i></div>
              <div className="stack-node"><span>04</span><b>Hardware</b><i>THE MACHINE</i></div>
            </div>
            <div className="figure-footer"><span>FROM SOFTWARE</span><span>TO SILICON</span></div>
          </div>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <div className="section-label">
            <span className="section-number">01 /</span>
            <h2 id="experience-title">Experience</h2>
            <p>Selected internships</p>
          </div>
          <div className="section-content">
            <ExperienceList />
          </div>
        </section>

        <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-label">
            <span className="section-number">02 /</span>
            <h2 id="projects-title">Projects</h2>
            <p>Selected work</p>
          </div>
          <div className="section-content">
            <ProjectList />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Built close to the machine.</span>
        <a href={DATA.linkedin} target="_blank" rel="noreferrer">
          Connect on LinkedIn <ArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
