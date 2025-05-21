"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  FolderGit2,
  ExternalLink,
  Github,
} from "lucide-react";
import { gsap, Power2 } from "gsap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { spotlightProjects, otherProjects, type Project } from "./projectsData";

// CarouselItem: displays a single project slide
const CarouselItem = ({ project }: { project: Project }) => (
  <div className="relative rounded-lg overflow-hidden max-w-8xl mx-auto">
    <Image
      src={project.image}
      alt={project.title}
      width={1200}
      height={800}
      className="object-cover w-full"
      priority={true}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-gray-800 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 text-foreground dark:text-white flex flex-col items-center text-center px-4 pb-8">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-2 hidden md:block max-w-2xl mx-auto">
        {project.description}
      </p>
      <div className="flex mt-3 space-x-2 flex-wrap justify-center">
        {project.tech.slice(0, 3).map((tech) => (
          <Badge key={tech} className="text-xs mb-2">
            {tech}
          </Badge>
        ))}
        {project.tech.length > 3 && (
          <Badge variant="outline" className="text-xs mb-2">
            +{project.tech.length - 3}
          </Badge>
        )}
      </div>
      <div className="mt-3">
        <Button
          variant="secondary"
          asChild
          size="sm"
          className="px-2 py-1 text-xs hover:bg-secondary/80"
        >
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          className="ml-2 px-2 py-1 text-xs hover:bg-primary/80"
        >
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Code Repo
          </a>
        </Button>
      </div>
    </div>
  </div>
);

// ProjectCard: displays other projects in a grid layout
const ProjectCard = ({ project }: { project: Project }) => {
  const links = [
    { Icon: ExternalLink, href: project.demoLink, label: "Demo" },
    { Icon: Github, href: project.repoLink, label: "Repo" },
  ];

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform duration-75 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700 p-4 md:p-6 flex flex-col border-t-4 h-96"
      style={{ borderColor: "hsl(var(--primary))" }}
    >
      <div className="flex justify-between items-start">
        <FolderGit2 className="h-6 w-6 text-primary" />
        <div className="flex space-x-2">
          {links.map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary bg-gray-200 dark:bg-gray-700 p-2 rounded-md transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-3 text-black dark:text-white">
        {project.title}
      </h3>
      <div className="description-container flex-grow overflow-hidden hover:overflow-y-auto thin-scrollbar">
        <p className="text-base mt-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs text-gray-600 dark:text-gray-400">
            {tech}
          </span>
        ))}
      </div>
      <style jsx>{`
        .thin-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </div>
  );
};

// Carousel component handles carousel logic and animations
const Carousel = ({ projects }: { projects: Project[] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = useCallback((newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex(newIndex);
  }, []);

  const next = useCallback(() => {
    goTo((index + 1) % projects.length, 1);
  }, [index, projects.length, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + projects.length) % projects.length, -1);
  }, [index, projects.length, goTo]);

  useEffect(() => {
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      if (i === index) {
        const fromX = direction === 1 ? 100 : direction === -1 ? -100 : 0;
        gsap.fromTo(
          item,
          { opacity: 0, x: fromX, pointerEvents: "none" },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: Power2.easeOut,
            pointerEvents: "auto",
          }
        );
      } else {
        gsap.set(item, { opacity: 0, x: 0, pointerEvents: "none" });
      }
    });
  }, [index, direction]);

  useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative mb-16 hidden md:block">
      <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
        {projects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => (itemRefs.current[i] = el)}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
              zIndex: i === index ? 1 : 0,
            }}
          >
            <CarouselItem project={project} />
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
        onClick={prev}
        aria-label="Previous Project"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
        onClick={next}
        aria-label="Next Project"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center items-center mt-4 z-10 relative">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`h-1 w-6 rounded-sm mx-1 ${
              i === index ? "bg-primary" : "bg-gray-400 dark:bg-gray-600"
            }`}
            onClick={() => goTo(i, i > index ? 1 : i < index ? -1 : 0)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main component combining carousel and grid projects
export const ProjectsComponent = () => (
  <section id="projects" className="mb-16 fade-in-section">
    <div className="section-header mb-8">
      <h2 className="text-3xl font-semibold text-primary dark:text-[hsl(215,100%,90%)] flex items-center justify-center relative">
        <span className="text-black dark:text-gray-300 mr-2">/</span>
        <span className="relative inline-block">Featured Projects</span>
      </h2>
    </div>

    <Carousel projects={spotlightProjects} />

    <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {otherProjects.map((project, i) => (
        <div
          key={project.title}
          className="fade-in-section"
          style={{ animationDelay: `${(i + 1) * 100}ms` }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsComponent;
