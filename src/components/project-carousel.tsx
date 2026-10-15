"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { ProjectVideoDialog } from "@/components/project-video-dialog";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [position, setPosition] = useState({
    index: 0,
    atEnd: false,
    visible: 1,
  });
  const reduced = useReducedMotion();

  const sync = useCallback(() => {
    const element = track.current;
    if (!element) return;
    const slides = Array.from(element.children) as HTMLElement[];
    const index = slides.reduce(
      (nearest, slide, i) =>
        Math.abs(slide.offsetLeft - element.scrollLeft) <
        Math.abs(slides[nearest].offsetLeft - element.scrollLeft)
          ? i
          : nearest,
      0,
    );
    setPosition({
      index,
      atEnd:
        element.scrollLeft >= element.scrollWidth - element.clientWidth - 2,
      visible: Math.max(
        1,
        Math.floor(
          (element.clientWidth + 1) /
            (slides[0]?.getBoundingClientRect().width || element.clientWidth),
        ),
      ),
    });
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(sync);
    observer.observe(element);
    sync();
    return () => observer.disconnect();
  }, [sync]);

  const goTo = (index: number) => {
    const element = track.current;
    const slide = element?.children[
      Math.max(0, Math.min(index, projects.length - 1))
    ] as HTMLElement | undefined;
    if (element && slide)
      element.scrollTo({
        left: slide.offsetLeft,
        behavior: reduced ? "instant" : "smooth",
      });
  };

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="University projects"
    >
      {selectedProject && (
        <ProjectVideoDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <div
        className="carousel-track"
        ref={track}
        onScroll={sync}
        tabIndex={0}
        aria-label="Projects. Use left and right arrow keys to browse."
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(position.index + (event.key === "ArrowRight" ? 1 : -1));
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            goTo(event.key === "Home" ? 0 : projects.length - 1);
          }
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="carousel-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          >
            <ProjectCard
              project={project}
              onWatch={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>
      {projects.length > 1 && (
        <div className="carousel-controls">
          <span
            className="carousel-count"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="sr-only">Starting with project </span>
            {String(position.index + 1).padStart(2, "0")}{" "}
            <span>/ {String(projects.length).padStart(2, "0")}</span>
          </span>
          <div className="carousel-dots" aria-label="Choose a project">
            {projects
              .slice(0, projects.length - position.visible + 1)
              .map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goTo(index)}
                  aria-label={`Show ${project.title}`}
                  aria-current={position.index === index ? "true" : undefined}
                >
                  <span />
                </button>
              ))}
          </div>
          <div className="carousel-arrows">
            <button
              aria-label="Previous project"
              disabled={position.index === 0}
              onClick={() => goTo(position.index - 1)}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              aria-label="Next project"
              disabled={position.atEnd}
              onClick={() => goTo(position.index + 1)}
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
