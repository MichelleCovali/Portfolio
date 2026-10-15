import Image from "next/image";
import { ArrowUpRight, Github, Play } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onWatch,
}: {
  project: Project;
  onWatch?: () => void;
}) {
  const hasLinks = project.githubUrl || project.liveUrl || project.caseStudyUrl;

  return (
    <article className="project-card" aria-labelledby={`project-${project.id}`}>
      {project.videos?.length && onWatch ? (
        <button
          className="project-video-trigger"
          aria-label={`Watch ${project.title} videos`}
          aria-haspopup="dialog"
          onClick={onWatch}
        >
          <span className="project-watch-label">
            <Play size={14} fill="currentColor" /> Watch{" "}
            {project.videos.length > 1 ? "demos" : "demo"}
          </span>
        </button>
      ) : null}
      {project.screenshot && (
        <div
          className={`project-image${project.secondaryImage ? " project-image-pair" : ""}`}
        >
          <div className="project-image-main">
            <Image
              src={project.screenshot.src}
              alt={project.screenshot.alt}
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              style={{ objectFit: project.screenshot.fit ?? "cover" }}
            />
          </div>
          {project.secondaryImage && (
            <div className="project-image-secondary">
              <Image
                src={project.secondaryImage.src}
                alt={project.secondaryImage.alt}
                fill
                sizes="(max-width: 600px) 35vw, 20vw"
                style={{ objectFit: project.secondaryImage.fit ?? "contain" }}
              />
            </div>
          )}
        </div>
      )}
      <div className="project-body">
        {project.category && (
          <p className="eyebrow project-category">{project.category}</p>
        )}
        <h3 id={`project-${project.id}`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.roles && (
          <p className="project-roles">
            <span>My role</span>
            {project.roles.join(" · ")}
          </p>
        )}
        <div className="badges" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        {hasLinks && (
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={16} /> Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl} target="_blank" rel="noreferrer">
                Case study <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
