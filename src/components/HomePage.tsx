import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function asset(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

function ExperienceList() {
  return (
    <div className="experience-grid">
      {DATA.work.map((work) => (
        <a
          className="experience-card"
          href={work.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${work.title} at ${work.company}, ${work.period}`}
          key={`${work.company}-${work.title}-${work.period}`}
        >
          <span className="company-logo" aria-hidden="true">
            <img src={asset(work.logoUrl)} alt="" />
          </span>
          <span className="experience-copy">
            <span className="company-heading">
              <span className="experience-company">{work.company}</span>
              <span className="experience-period">{work.period}</span>
            </span>
            <span className="experience-role">{work.title}</span>
          </span>
          <ArrowUpRight className="row-arrow" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function ProjectList() {
  return (
    <div className="project-grid">
      {DATA.projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <div className="project-card-top">
            <span className="project-index">0{index + 1}</span>
            <span className="project-spark" aria-hidden="true" />
          </div>
          <h3>{project.title}</h3>
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
    <div className="site-shell">
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
        <div className="header-links">
          <a href={DATA.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div
            className="hero-haze"
            aria-hidden="true"
            style={{ backgroundImage: `url("${asset("images/coastal-light.webp")}")` }}
          />
          <div className="hero-copy">
            <p className="hero-kicker">About me</p>
            <h1 id="hero-title">Hi, I’m<br /><span>Haibo Sun.</span></h1>
            <p className="hero-intro">{DATA.description}</p>

            <a className="school-line" href={DATA.education.href} target="_blank" rel="noreferrer">
              <img src={asset(DATA.education.logoUrl)} alt="University of Waterloo" />
              <span className="school-divider" aria-hidden="true" />
              <span className="school-details">
                <strong>{DATA.education.program}</strong>
                <small>{DATA.education.year}</small>
              </span>
              <ArrowUpRight className="school-arrow" aria-hidden="true" />
            </a>

            <a className="scroll-link" href="#experience">
              A little more about me <ArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <figure className="hero-photo">
            <div className="photo-frame">
              <img src={asset("images/haibo-sun.webp")} alt="Haibo at the Golden Gate Bridge" />
              <figcaption>
                <span>Golden Gate Bridge</span>
                <span>San Francisco</span>
              </figcaption>
            </div>
          </figure>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 / Experience</p>
              <h2 id="experience-title">Places I’ve worked</h2>
            </div>
            <p className="section-note">Internship roles</p>
          </div>
          <ExperienceList />
        </section>

        <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Projects</p>
              <h2 id="projects-title">Selected projects</h2>
            </div>
            <p className="section-note">A few things I’ve made</p>
          </div>
          <ProjectList />
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {DATA.name}</span>
        <div>
          <a href={DATA.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
