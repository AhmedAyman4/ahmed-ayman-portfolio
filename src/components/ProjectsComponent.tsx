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
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}) =>
  href?.trim() ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  ) : null;

const NavButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <Button
    variant="ghost"
    size="sm"
    className={`carousel-nav-button carousel-nav-${direction}`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <ChevronLeft className="h-4 w-4" />
    ) : (
      <ChevronRight className="h-4 w-4" />
    )}
  </Button>
);

const TechBadges = ({ tech }: { tech: string[] }) => (
  <div className="carousel-tech-container">
    {tech.slice(0, 3).map((t, i) => (
      <div key={t} className={`carousel-tech-badge tech-badge-${i}`}>
        {t}
      </div>
    ))}
    {tech.length > 3 && (
      <div className="carousel-tech-more">+{tech.length - 3}</div>
    )}
  </div>
);

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

    <NavButton direction="left" onClick={onPrev} />
    <NavButton direction="right" onClick={onNext} />

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

        <TechBadges tech={project.tech} />

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
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const navigate = useCallback(
    (newIndex: number, dir: "left" | "right") => {
      if (isAnimating || newIndex === index) return;
      setDirection(dir);
      setPrevIndex(index);
      setIsAnimating(true);
      setIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [index, isAnimating]
  );

  const next = useCallback(() => {
    const newIndex = (index + 1) % projects.length;
    navigate(newIndex, "right");
  }, [index, projects.length, navigate]);

  const prev = useCallback(() => {
    const newIndex = (index - 1 + projects.length) % projects.length;
    navigate(newIndex, "left");
  }, [index, projects.length, navigate]);

  const goTo = useCallback(
    (newIndex: number) => {
      const dir = newIndex > index ? "right" : "left";
      navigate(newIndex, dir);
    },
    [index, navigate]
  );

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
      <div className="carousel-wrapper">
        {/* Previous slide (exiting) */}
        {isAnimating && (
          <div
            className={`carousel-slide carousel-slide-exit ${
              direction === "right" ? "slide-exit-left" : "slide-exit-right"
            }`}
          >
            <CarouselItem
              project={projects[prevIndex]}
              onPrev={prev}
              onNext={next}
            />
          </div>
        )}
        {/* Current slide (entering) */}
        <div
          className={`carousel-slide ${
            isAnimating
              ? `carousel-slide-enter ${
                  direction === "right"
                    ? "slide-enter-right"
                    : "slide-enter-left"
                }`
              : ""
          }`}
        >
          <CarouselItem project={projects[index]} onPrev={prev} onNext={next} />
        </div>
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

export const ProjectsComponent = () => {
  return (
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
};

export default ProjectsComponent;
