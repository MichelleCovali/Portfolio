import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  MapPin,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  profile,
  experience,
  education,
  skills,
  languages,
} from "@/data/portfolio";
import { projects, projectSource } from "@/data/projects";
import { Header, Reveal, CopyEmail } from "@/components/interactions";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCarousel } from "@/components/project-carousel";
import { NavigationEffects } from "@/components/navigation-effects";
const skillIcons = [Code2, Braces, Database, Wrench, Workflow];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <NavigationEffects />
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="availability">
              <span /> {profile.availability}
            </p>
            <p className="hero-kicker">HELLO, I’M</p>
            <h1>
              Mihaela
              <br />
              <span>
                Covali<span className="accent-dot">.</span>
              </span>
            </h1>
            <h2>{profile.title}</h2>
            <p className="hero-description">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View My Work <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Get in Touch <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src="/images/mihaela.jpg"
                alt="Mihaela Covali standing in front of an ornate wooden doorway"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 43vw"
                className="portrait"
              />
              <div className="portrait-caption">
                <span>CURIOUS MIND. THOUGHTFUL CODE.</span>
                <span>MC / PORTFOLIO</span>
              </div>
            </div>
            <div className="location-note">
              <MapPin size={16} />
              <span>
                {profile.location}
                <small>Open to the Netherlands, Italy & Spain</small>
              </span>
              <ArrowUpRight size={21} />
            </div>
          </div>
          <div className="hero-bottom">
            <span>DEVELOPING WITH PURPOSE. LEARNING ALONG THE WAY.</span>
            <a href="#about">
              A little more about me <ArrowDown size={15} />
            </a>
          </div>
        </section>
        <section id="about" className="section container about-grid">
          <SectionHeading
            number="01"
            label="ABOUT"
            title="A curious mind. A practical approach."
          />
          <Reveal className="about-copy">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="mobility">
              <MapPin size={18} />
              <p>{profile.mobility}</p>
            </div>
          </Reveal>
        </section>
        <section id="experience" className="section section-tinted">
          <div className="container">
            <SectionHeading
              number="02"
              label="EXPERIENCE"
              title="Learning through real work."
            />
            {experience.map((e) => (
              <Reveal key={e.company} className="internship-feature">
                <div className="internship-header">
                  <div className="internship-identity">
                    <div className="internship-logo">
                      <Image
                        src={e.logo.src}
                        alt={e.logo.alt}
                        width={166}
                        height={45}
                        className="company-logo"
                      />
                    </div>
                    <div>
                      <p className="internship-label">
                        PROFESSIONAL EXPERIENCE
                      </p>
                      <h3>{e.role}</h3>
                    </div>
                  </div>
                  <div className="internship-period">
                    <p>{e.period}</p>
                    <span>
                      <MapPin size={14} />
                      {e.location}
                    </span>
                  </div>
                </div>
                <div className="internship-body">
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="internship-showcase"
                    aria-label={`View ${e.company} website — frontend implementation and UI/UX contribution`}
                  >
                    <div className="internship-preview">
                      <div className="internship-preview-label">
                        <span>WEBSITE PREVIEW</span>
                        <ArrowUpRight size={17} />
                      </div>
                      <div className="internship-preview-image">
                        <Image
                          src={e.websitePreview.src}
                          alt={e.websitePreview.alt}
                          fill
                          sizes="(max-width: 850px) 90vw, 46vw"
                        />
                      </div>
                    </div>
                    <div className="internship-showcase-footer">
                      <div>
                        <p>EXPLORE THE LIVE WEBSITE</p>
                        <span>{e.websiteAction}</span>
                      </div>
                      <span className="internship-open">
                        <ArrowUpRight size={23} />
                      </span>
                    </div>
                    <p className="internship-scope">{e.websiteContribution}</p>
                  </a>
                  <div className="internship-contributions">
                    <p className="internship-label">MY CONTRIBUTION</p>
                    {[1, 2, 0].map((index, order) => (
                      <div
                        className="internship-contribution"
                        key={e.contributionTitles[index]}
                      >
                        <span className="internship-number">0{order + 1}</span>
                        <div>
                          <h4>{e.contributionTitles[index]}</h4>
                          <p>{e.responsibilities[index]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="internship-stack">
                  <p className="internship-label">BUILT & COLLABORATED WITH</p>
                  <div className="badges">
                    {e.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="projects" className="section container">
          <div className="heading-row">
            <SectionHeading
              number="03"
              label="PROJECTS"
              title="Ideas put into practice."
              description="Selected university projects, from websites and mobile apps to connected devices and robotics."
            />
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          {projects.length ? (
            <ProjectCarousel projects={projects} />
          ) : (
            <Reveal className="projects-empty">
              <div className="empty-symbol" aria-hidden="true">
                <Terminal size={32} />
                <span className="code-line" />
                <span className="code-line short" />
              </div>
              <div>
                <p className="eyebrow">A LITTLE MORE TO COME</p>
                <h3>
                  Projects coming soon<span className="accent-dot">.</span>
                </h3>
                <p>
                  I’ll be sharing selected projects here, with a closer look at
                  the ideas, decisions, and code behind them.
                </p>
                <a
                  className="text-link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  In the meantime, find me on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
              <span className="empty-index" aria-hidden="true">
                &lt;/&gt;
              </span>
            </Reveal>
          )}
          {projects.length > 0 && (
            <p className="project-source">
              A selection from my earlier studies. Images and demo stills from
              my{" "}
              <a href={projectSource} target="_blank" rel="noreferrer">
                original project portfolio <ArrowUpRight size={13} />
              </a>
              .
            </p>
          )}
        </section>
        <section id="skills" className="section container">
          <SectionHeading
            number="04"
            label="TOOLKIT"
            title="The tools I work with."
            description="Technologies I’ve worked with through my studies and professional experience."
          />
          <div className="skills-grid">
            {skills.map((s, i) => {
              const Icon = skillIcons[i];
              return (
                <Reveal className="skill-group" key={s.name} delay={i * 0.06}>
                  <Icon size={21} strokeWidth={1.5} />
                  <h3>{s.name}</h3>
                  <div className="skill-list">
                    {s.items.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
        <section id="education" className="section section-tinted">
          <div className="container education-grid">
            <SectionHeading
              number="05"
              label="EDUCATION"
              title="A foundation to build on."
            />
            <div className="education-list">
              {education.map((e) => (
                <Reveal className="education-item" key={e.school}>
                  <GraduationCap size={23} strokeWidth={1.5} />
                  <div>
                    <p className="eyebrow">{e.period}</p>
                    <h3>{e.school}</h3>
                    <p>{e.degree}</p>
                    <p className="muted">{e.location}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          className="language-section container"
          aria-labelledby="languages-title"
        >
          <h2 id="languages-title">
            <Languages size={20} /> Across languages
          </h2>
          <div className="language-list">
            {languages.map((l) => (
              <div key={l.name}>
                <h3>{l.name}</h3>
                <p>{l.level}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="section container contact-section">
          <p className="eyebrow">
            <span>06</span> / LET’S CONNECT
          </p>
          <div className="contact-grid">
            <div>
              <h2>
                Good things start
                <br />
                with a <em>conversation.</em>
              </h2>
              <p>
                Looking for a motivated graduation intern? I’d love to hear
                about your team and what we could build together.
              </p>
              <p className="contact-location">
                <MapPin size={16} /> Netherlands · Italy · Spain
              </p>
            </div>
            <div className="contact-links">
              <p className="eyebrow">DROP ME A LINE</p>
              <div className="email-row">
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                  <ArrowUpRight size={20} />
                </a>
                <CopyEmail />
              </div>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={19} /> GitHub <ArrowUpRight size={17} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={19} /> LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a href="#home" className="footer-name">
          Mihaela Covali<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Mihaela Covali</p>
        <div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
