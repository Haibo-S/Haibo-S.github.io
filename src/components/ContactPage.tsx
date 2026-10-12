import { ArrowUpRight, Mail } from "lucide-react";
import { DATA } from "@/data/resume";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export default function ContactPage() {
  return (
    <>
      <SiteHeader currentPage="contact" />
      <div className="site-shell subpage-shell">
        <main className="contact-page">
          <section className="subpage-intro" aria-labelledby="contact-title">
            <p className="eyebrow"><span className="eyebrow-dot" /> Contact</p>
            <h1 className="subpage-title" id="contact-title">Say hello.</h1>
            <p className="subpage-summary">
              For conversations about systems, digital design, or low-level software, you can reach me here.
            </p>
          </section>

          <section className="contact-methods" aria-label="Contact links">
            <a className="contact-method" href={`mailto:${DATA.email}`}>
              <span className="contact-icon"><Mail aria-hidden="true" /></span>
              <span className="contact-copy">
                <span className="contact-label">Email</span>
                <span className="contact-value">{DATA.email}</span>
              </span>
              <ArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
            <a className="contact-method" href={DATA.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon contact-linkedin-mark" aria-hidden="true">in</span>
              <span className="contact-copy">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Connect with me</span>
              </span>
              <ArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
