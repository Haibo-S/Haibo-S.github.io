import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function asset(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profiles">
      <a href={DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.18c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.57-.29-5.28-1.28-5.28-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.2 11.2 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.11 0 4.43-2.71 5.4-5.29 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.2.21.79.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      </a>
      <a href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
      </a>
    </div>
  );
}

function Education() {
  return (
    <section className="education-section" id="education" aria-labelledby="education-title">
      <div className="education-section-inner">
        <h2 id="education-title">Education</h2>
        <a className="education-card" href={DATA.education.href} target="_blank" rel="noreferrer">
          <img src={asset(DATA.education.logoUrl)} alt="University of Waterloo" />
          <span className="education-divider" aria-hidden="true" />
          <span className="education-copy">
            <strong>{DATA.education.program}</strong>
            <span>{DATA.education.year}</span>
          </span>
          <ArrowUpRight className="education-arrow" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function ExperienceList() {
  return (
    <div className="experience-list">
      {DATA.work.map((work) => (
        <a
          className={`experience-row${work.logoStyle === "wordmark" ? " experience-row-wordmark" : ""}`}
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
            <span className="experience-company">{work.company}</span>
            <span className="experience-role">{work.title}</span>
          </span>
          <span className="experience-period">{work.period}</span>
          <ArrowUpRight className="row-arrow" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function HomePage() {
  const backgroundImages = DATA.aboutBackgrounds.map(asset);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label={`${DATA.name}, home`}>
          <span className="wordmark-mark" aria-hidden="true">H</span>
          <span>{DATA.name}</span>
        </a>
        <nav aria-label="Main navigation" className="site-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
        </nav>
        <SocialLinks />
      </header>

      <div className="site-shell">
        <main>
          <Education />
          <section
            className="hero"
            id="about"
            aria-labelledby="hero-title"
            data-background-images={JSON.stringify(backgroundImages)}
          >
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 id="hero-title"><span>{DATA.name}</span></h1>
                <p className="hero-intro">{DATA.description}</p>
                <a className="scroll-link" href="#experience">
                  Explore my experience <ArrowDownRight aria-hidden="true" />
                </a>
              </div>

              <figure className="hero-photo">
                <img src={asset("images/haibo-sun.webp")} alt="Haibo at the Golden Gate Bridge" />
              </figure>
            </div>
          </section>

          <section className="content-section experience-section" id="experience" aria-labelledby="experience-title">
            <div className="section-heading">
              <h2 id="experience-title">Industry Experience</h2>
            </div>
            <ExperienceList />
          </section>
        </main>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} {DATA.name}</span>
          <SocialLinks />
        </footer>
      </div>
    </>
  );
}
