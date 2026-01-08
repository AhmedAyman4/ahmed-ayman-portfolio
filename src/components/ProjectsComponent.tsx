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

// ============================================================================
// Shared Components
// ============================================================================

interface ProjectLinkProps {
  href?: string;
  children: React.ReactNode;
  className: string;
}

const ProjectLink = ({ href, children, className }: ProjectLinkProps) =>
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

// ============================================================================
// Carousel Components
// ============================================================================

const ANIMATION_DURATION = 600;
const AUTO_PLAY_INTERVAL = 20000;

type Direction = "left" | "right";

const NavButton = ({
  direction,
  onClick,
}: {
  direction: Direction;
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

interface CarouselItemProps {
  project: Project;
  onPrev: () => void;
  onNext: () => void;
}

const CarouselItem = ({ project, onPrev, onNext }: CarouselItemProps) => (
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

// Custom hook for carousel logic
function useCarousel(length: number) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<Direction>("right");

  const navigate = useCallback(
    (newIndex: number, dir: Direction) => {
      if (isAnimating || newIndex === index) return;
      setDirection(dir);
      setPrevIndex(index);
      setIsAnimating(true);
      setIndex(newIndex);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
    },
    [index, isAnimating]
  );

  const next = useCallback(() => {
    navigate((index + 1) % length, "right");
  }, [index, length, navigate]);

  const prev = useCallback(() => {
    navigate((index - 1 + length) % length, "left");
  }, [index, length, navigate]);

  const goTo = useCallback(
    (newIndex: number) => {
      navigate(newIndex, newIndex > index ? "right" : "left");
    },
    [index, navigate]
  );

  return { index, prevIndex, isAnimating, direction, next, prev, goTo };
}

// Custom hook for intersection observer visibility
function useVisibility(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -100px 0px" }
    );
    const element = ref.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const Carousel = ({ projects }: { projects: Project[] }) => {
  const { ref, isVisible } = useVisibility();
  const { index, prevIndex, isAnimating, direction, next, prev, goTo } =
    useCarousel(projects.length);

  // Auto-play when visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [next, isVisible]);

  const getSlideClass = (type: "exit" | "enter") => {
    if (type === "exit") {
      return `carousel-slide carousel-slide-exit ${
        direction === "right" ? "slide-exit-left" : "slide-exit-right"
      }`;
    }
    return `carousel-slide ${
      isAnimating
        ? `carousel-slide-enter ${
            direction === "right" ? "slide-enter-right" : "slide-enter-left"
          }`
        : ""
    }`;
  };

  return (
    <div ref={ref} className="carousel-container">
      <div className="carousel-wrapper">
        {isAnimating && (
          <div className={getSlideClass("exit")}>
            <CarouselItem
              project={projects[prevIndex]}
              onPrev={prev}
              onNext={next}
            />
          </div>
        )}
        <div className={getSlideClass("enter")}>
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

// ============================================================================
// Project Card Component
// ============================================================================

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
        {project.tech.map((tech, i) => (
          <span key={tech} className="project-card-tech-item">
            {tech}
            {i < project.tech.length - 1 && <span className="ml-2">•</span>}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================================
// Projects Grid
// ============================================================================

const ProjectsGrid = ({ projects }: { projects: Project[] }) => (
  <div className="projects-grid">
    <div className="projects-grid-container">
      {projects.map((project, i) => (
        <FadeInSection
          key={project.title}
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
);

// ============================================================================
// Image Preloader
// ============================================================================

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

// ============================================================================
// Main Component
// ============================================================================

export const ProjectsComponent = () => (
  <FadeInSection>
    <section id="projects" className="mb-16">
      <SectionHeader label="Portfolio" title="Featured Projects" />
      <ImagePreloader projects={spotlightProjects} />
      <Carousel projects={spotlightProjects} />
      <ProjectsGrid projects={otherProjects} />
    </section>
  </FadeInSection>
);

export default ProjectsComponent;
