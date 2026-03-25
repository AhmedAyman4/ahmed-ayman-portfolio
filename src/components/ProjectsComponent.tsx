"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  FolderGit2,
  Github,
  FolderUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { spotlightProjects, otherProjects, type Project } from "@/lib/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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

interface ProjectCarouselItemProps {
  project: Project;
}

const ProjectCarouselItem = ({ project }: ProjectCarouselItemProps) => (
  <div className="group carousel-item">
    <div className="carousel-border">
      <div className="carousel-border-inner" />
    </div>

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

const ProjectsCarousel = ({ projects }: { projects: Project[] }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="carousel-container overflow-visible flex flex-col">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto relative group"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectCarouselItem project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation buttons: placed inside the carousel box */}
        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselPrevious className="absolute left-6 xl:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white/90 dark:hover:bg-black/90 border-none text-gray-800 dark:text-white h-10 w-10 transition-transform hover:scale-110" />
          <CarouselNext className="absolute right-6 xl:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white/90 dark:hover:bg-black/90 border-none text-gray-800 dark:text-white h-10 w-10 transition-transform hover:scale-110" />
        </div>
      </Carousel>

      {/* Dashed line tracking indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-primary"
                : "w-4 bg-gray-300 dark:bg-gray-700 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
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
  <Card className="group relative h-full flex flex-col bg-white dark:bg-gray-900/70 overflow-hidden border-transparent rounded-3xl hover:border-primary/20 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]">
    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] dark:group-hover:bg-white/[0.1] transition-colors duration-300 pointer-events-none z-10" />
    <CardHeader className="relative pb-4 z-20">
      <div className="flex items-start justify-between mb-2">
        <FolderGit2 className="h-5 w-5 text-blue-600 dark:text-[#4de9d2] group-hover:brightness-[1.1] group-hover:text-primary dark:group-hover:text-[#4de9d2] group-hover:scale-[1.1] transition-all duration-200" />
        <div className="flex space-x-3">
          <ProjectLink href={project.repoLink} className="hover:brightness-[1.1] hover:scale-[1.1] hover:text-primary dark:hover:text-primary transition-all duration-200">
            <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </ProjectLink>
          <ProjectLink href={project.demoLink} className="hover:brightness-[1.1] hover:scale-[1.1] hover:text-primary dark:hover:text-primary transition-all duration-200">
            <FolderUp className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </ProjectLink>
        </div>
      </div>
      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="relative flex-1 pb-4 z-20">
      <CardDescription className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
        {project.description}
      </CardDescription>
    </CardContent>
    <CardFooter className="relative z-20">
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={tech} className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {tech}
            {i < project.tech.length - 1 && <span className="ml-2">•</span>}
          </span>
        ))}
      </div>
    </CardFooter>
  </Card>
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
      <ProjectsCarousel projects={spotlightProjects} />
      <ProjectsGrid projects={otherProjects} />
    </section>
  </FadeInSection>
);

export default ProjectsComponent;
