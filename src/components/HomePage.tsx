import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function asset(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

function Education() {
  return (
    <section className="content-section education-section" id="education" aria-labelledby="education-title">
      <div className="section-heading">
        <h2 id="education-title">Education</h2>
      </div>
      <div className="education-row">
        <span className="company-logo education-logo" aria-hidden="true">
          <img src={asset(DATA.education.logoUrl)} alt="" />
        </span>
        <span className="education-primary">
          <span className="education-school">{DATA.education.school}</span>
          <span className="education-degree">{DATA.education.program}</span>
          <span className="education-meta">{DATA.education.programType} · {DATA.education.period}</span>
        </span>
        <span className="education-coursework">
          <span className="education-coursework-label">Relevant courseworks</span>
          <ul className="education-coursework-list">
            {DATA.education.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </span>
        <a
          className="education-arrow-link"
          href={DATA.education.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit University of Waterloo website"
          title="Visit University of Waterloo"
        >
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
        <div
          className={`experience-row${work.logoStyle === "wordmark" ? " experience-row-wordmark" : ""}`}
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
          <a
            className="row-arrow-link"
            href={work.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${work.company} website`}
            title={`Visit ${work.company}`}
          >
            <ArrowUpRight className="row-arrow" aria-hidden="true" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const backgroundImages = DATA.aboutBackgrounds.map(asset);

  return (
    <>
      <SiteHeader />

      <div className="site-shell">
        <main>
          <section
            className="hero"
            id="about"
            aria-labelledby="hero-title"
            data-background-images={JSON.stringify(backgroundImages)}
          >
            <div className="hero-background-next" aria-hidden="true" />
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 id="hero-title"><span>{DATA.name}</span></h1>
                <p className="hero-intro">{DATA.description}</p>
              </div>

              <figure className="hero-photo">
                <img src={asset("images/haibo-sun.webp")} alt="Haibo at the Golden Gate Bridge" />
              </figure>
            </div>
          </section>

          <section className="content-section experience-section" id="experience" aria-labelledby="experience-title">
            <div className="section-heading">
              <h2 id="experience-title">Experience</h2>
            </div>
            <ExperienceList />
          </section>

          <Education />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
