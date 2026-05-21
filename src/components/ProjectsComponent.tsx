"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FolderGit2,
  FolderUp,
  ArrowRight,
} from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
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
  isActive: boolean;
  priority?: boolean;
}

const ProjectCarouselItem = ({ project, isActive, priority }: ProjectCarouselItemProps) => (
  <div className="group carousel-item">
    <div className="carousel-border">
      <div className="carousel-border-inner" />
    </div>

    {/* Click blocker/scroll trigger overlay for inactive slides */}
    {!isActive && (
      <div className="absolute inset-0 bg-black/5 dark:bg-transparent z-30 cursor-pointer rounded-2xl" />
    )}

    <div className="carousel-image-container">
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={800}
        className="carousel-image"
        priority={priority}
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 1024px"
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
  const plugin = useRef(Autoplay({ delay: 15000, stopOnInteraction: true, playOnInit: false }));
  const containerRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const onScroll = () => {
      const slides = api.slideNodes();
      const viewport = api.rootNode();
      if (!viewport) return;

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.left + viewportRect.width / 2;

      // Determine responsive maxShift
      const width = window.innerWidth;
      let maxShift = 40;
      if (width < 768) {
        maxShift = 10;
      } else if (width < 1024) {
        maxShift = 20;
      }

      // Step 1: Read all layout properties in a single batch (prevents layout thrashing)
      const updates = slides.map((slide) => {
        const anchor = slide.querySelector(".carousel-anchor") as HTMLElement;
        const inner = slide.querySelector(".carousel-item-inner-wrapper") as HTMLElement;
        if (!anchor || !inner) return null;

        const anchorRect = anchor.getBoundingClientRect();
        return {
          slide,
          inner,
          anchorRect,
        };
      });

      // Step 2: Write all style updates in a single batch (prevents layout thrashing)
      updates.forEach((update) => {
        if (!update) return;
        const { slide, inner, anchorRect } = update;
        
        const anchorCenter = anchorRect.left + anchorRect.width / 2;
        const slideWidth = anchorRect.width;

        if (!slideWidth) return;

        const distance = anchorCenter - viewportCenter;
        const normalizedDistance = distance / slideWidth;
        const absDist = Math.abs(normalizedDistance);

        // 1. Scale: Continuous from 1.0 (active center) to 0.88 (adjacent/next)
        const scale = 1.0 - Math.min(1.0, absDist) * (1.0 - 0.88);

        // 2. Shift/Translation: Bring adjacent slides closer to center symmetrically
        const direction = Math.sign(normalizedDistance);
        const shift = -direction * Math.min(1.0, absDist) * maxShift;

        // 3. Opacity: 1.0 at active center, 0.35 at next/prev, fade to 0.0 further away
        let opacity = 1.0;
        if (absDist <= 1.0) {
          opacity = 1.0 - absDist * (1.0 - 0.35);
        } else {
          const t = Math.min(1.0, (absDist - 1.0) / 0.5);
          opacity = 0.35 * (1.0 - t);
        }

        // 4. z-Index: Ensure active slide stays on top
        let zIndex = 1;
        if (absDist < 0.5) {
          zIndex = 10;
        } else if (absDist < 1.5) {
          zIndex = 5;
        } else {
          zIndex = 0;
        }

        // Apply styles directly (transition: none is used in CSS for drag responsiveness)
        inner.style.transform = `translateX(${shift}px) scale(${scale})`;
        inner.style.opacity = opacity.toString();
        slide.style.zIndex = zIndex.toString();
      });
    };

    // Run once on load/render
    onScroll();

    // Listen to Embla movements
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      api.off("scroll", onScroll);
      api.off("reInit", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          plugin.current.play();
        } else {
          plugin.current.stop();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="carousel-container">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="carousel-main group"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="ml-0 gap-5">
          {projects.map((project, index) => {
            const len = projects.length;
            const diff = (index - current + len) % len;
            const isActive = index === current;
            const isNext = diff === 1;
            const isPrev = diff === len - 1;

            let slideClass = "carousel-slide-inactive";
            if (isActive) slideClass = "carousel-slide-active";
            else if (isNext) slideClass = "carousel-slide-next";
            else if (isPrev) slideClass = "carousel-slide-prev";

            return (
              <CarouselItem
                key={index}
                className={`basis-[85%] md:basis-[75%] lg:basis-[73%] select-none pl-0 relative ${slideClass}`}
                onClick={() => {
                  if (!isActive && api) {
                    api.scrollTo(index);
                  }
                }}
              >
                {/* Invisible layout anchor to measure position without being affected by transforms */}
                <div className="carousel-anchor absolute inset-0 pointer-events-none" />

                {/* Inner wrapper for continuous scroll-based scale/transform animations */}
                <div className="carousel-item-inner-wrapper w-full h-full">
                  <ProjectCarouselItem project={project} isActive={isActive} priority={index === 0} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* Navigation buttons: placed inside the carousel box */}
        <div className="hidden md:block">
          <CarouselPrevious className="carousel-nav-button carousel-nav-left" />
          <CarouselNext className="carousel-nav-button carousel-nav-right" />
        </div>
      </Carousel>

      {/* Dashed line tracking indicators */}
      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`carousel-indicator ${
              index === current ? "active" : "inactive"
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
  <Card className="project-card group">
    {/* Project Image - Visible only on mobile */}
    <div className="project-card-image-container md:hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="project-card-image"
        sizes="(max-width: 768px) 90vw, 400px"
      />
      <div className="project-card-image-overlay" />
    </div>

    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] dark:group-hover:bg-white/[0.04] transition-colors duration-300 pointer-events-none z-10" />
    <CardHeader className="relative pb-2 z-20">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <FolderGit2 className="h-5 w-5 text-blue-600 dark:text-[#4de9d2] group-hover:brightness-[1.1] group-hover:text-primary dark:group-hover:text-[#4de9d2] group-hover:scale-[1.1] transition-all duration-200" />
          <CardTitle className="project-card-title md:hidden mb-0">
            {project.title}
          </CardTitle>
        </div>
        <div className="flex items-center space-x-3">
          <ProjectLink href={project.repoLink} className="project-card-link">
            <GitHubIcon sx={{ fontSize: '1.25rem' }} className="-translate-y-[1px] text-gray-700 dark:text-gray-300" />
          </ProjectLink>
          <ProjectLink href={project.demoLink} className="project-card-link">
            <FolderUp className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </ProjectLink>
        </div>
      </div>
      <CardTitle className="project-card-title hidden md:block">
        {project.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="relative flex-1 pb-4 z-20">
      <CardDescription className="project-card-description">
        {project.description}
      </CardDescription>
    </CardContent>
    <CardFooter className="relative z-20">
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={tech} className="project-card-tech-item">
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
// Main Component
// ============================================================================

export const ProjectsComponent = () => (
  <FadeInSection>
    <section id="projects" className="mb-16">
      <SectionHeader label="Portfolio" title="Featured Projects" />
      <ProjectsCarousel projects={spotlightProjects} />
      <ProjectsGrid projects={otherProjects.slice(0, 3)} />
      {otherProjects.length > 3 && (
        <FadeInSection>
          <div className="projects-view-all-container">
            <Link
              href="/projects"
              className="group projects-view-all-link"
            >
              View All Projects
              <ArrowRight className="projects-view-all-icon" />
            </Link>
          </div>
        </FadeInSection>
      )}
    </section>
  </FadeInSection>
);

export default ProjectsComponent;
