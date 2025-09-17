"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  FolderGit2,
  Github,
  FolderUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";
import { spotlightProjects, otherProjects, type Project } from "./projectsData";
import "@/styles/components/ProjectsComponent.css";

const ProjectLink = ({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className: string;
}) =>
  href?.trim() ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  ) : null;

const CarouselItem = ({
  project,
  onPrev,
  onNext,
}: {
  project: Project;
  onPrev: () => void;
  onNext: () => void;
}) => (
  <div className="group carousel-item">
    <div className="carousel-border">
      <div className="carousel-border-inner" />
    </div>

    <Button
      variant="ghost"
      size="sm"
      className="carousel-nav-button carousel-nav-left"
      onClick={onPrev}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <Button
      variant="ghost"
      size="sm"
      className="carousel-nav-button carousel-nav-right"
      onClick={onNext}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>

    <div className="carousel-image-container">
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={800}
        className="carousel-image"
      />
      <div className="carousel-overlay" />

      <div className="carousel-content">
        <h3 className="carousel-title">{project.title}</h3>

        <div className="carousel-description-wrapper">
          <div className="carousel-description-bg" />
          <p className="carousel-description">{project.description}</p>
        </div>

        <div className="carousel-tech-container">
          {project.tech.slice(0, 3).map((tech, index) => (
            <div
              key={tech}
              className={`carousel-tech-badge tech-badge-${index}`}
            >
              {tech}
            </div>
          ))}
          {project.tech.length > 3 && (
            <div className="carousel-tech-more">+{project.tech.length - 3}</div>
          )}
        </div>

        <div className="carousel-links">
          <ProjectLink
            href={project.demoLink}
            className="carousel-link carousel-demo-link"
          >
            <span className="carousel-link-text">Live Demo</span>
            <div className="carousel-link-bg" />
          </ProjectLink>

          <ProjectLink
            href={project.repoLink}
            className="carousel-link carousel-repo-link"
          >
            <span className="carousel-link-text">Code Repo</span>
            <div className="carousel-link-bg" />
          </ProjectLink>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group project-card">
    <div className="project-card-content">
      <div className="project-card-header">
        <FolderGit2 className="project-folder-icon" />
        <div className="project-card-links">
          <ProjectLink href={project.repoLink} className="project-card-link">
            <Github className="project-card-link-icon" />
          </ProjectLink>
          <ProjectLink href={project.demoLink} className="project-card-link">
            <FolderUp className="project-card-link-icon" />
          </ProjectLink>
        </div>
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="project-card-tech">
        {project.tech.map((tech, index) => (
          <span key={tech} className="project-card-tech-item">
            {tech}
            {index < project.tech.length - 1 && <span className="ml-2">•</span>}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Carousel = ({ projects }: { projects: Project[] }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const next = useCallback(
    () => setIndex((prev) => (prev + 1) % projects.length),
    [projects.length]
  );
  const prev = useCallback(
    () => setIndex((prev) => (prev - 1 + projects.length) % projects.length),
    [projects.length]
  );
  const goTo = useCallback((newIndex: number) => setIndex(newIndex), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(next, 20000);
    return () => clearInterval(interval);
  }, [next, isVisible]);

  return (
    <div ref={ref} className="carousel-container">
      <div className="transition-opacity duration-500 ease-out">
        <CarouselItem project={projects[index]} onPrev={prev} onNext={next} />
      </div>
      <div className="carousel-indicators">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`carousel-indicator ${
              i === index ? "active" : "inactive"
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

const ImagePreloader = ({ projects }: { projects: Project[] }) => (
  <div className="hidden">
    {projects.map((project) => (
      <Image
        key={project.title}
        src={project.image}
        alt={project.title}
        width={1200}
        height={800}
        priority
      />
    ))}
  </div>
);

export const ProjectsComponent = () => (
  <FadeInSection>
    <section id="projects" className="mb-16">
      <SectionHeader
        label="Portfolio"
        title="Featured Projects"
        subtitle="A showcase of my recent work in data science, machine learning, and web development"
      />
      <ImagePreloader projects={spotlightProjects} />
      <Carousel projects={spotlightProjects} />
      <div className="projects-grid">
        <div className="projects-grid-container">
          {otherProjects.map((project, i) => (
            <FadeInSection
              key={i}
              delay={`${(i + 1) * 100}ms`}
              className="h-full"
            >
              <div className="h-full">
                <ProjectCard project={project} />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default ProjectsComponent;
