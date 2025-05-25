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

const CarouselItem = ({ project }: { project: Project }) => (
  <div className="group relative rounded-2xl overflow-hidden max-w-8xl mx-auto shadow-2xl transition-all duration-700 hover:shadow-3xl hover:shadow-primary/20 hover:scale-[1.01]">
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="h-full w-full rounded-2xl bg-black" />
    </div>

    {/* Main image container */}
    <div className="relative overflow-hidden rounded-2xl">
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={800}
        className="object-cover w-full transition-transform duration-700 group-hover:scale-105"
        // Removed priority prop from here, as images are preloaded by the hidden grid
      />

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 text-white flex flex-col items-center text-center px-6 pb-10 pt-16">
        {/* Title with gradient text effect */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-primary group-hover:via-purple-300 group-hover:to-blue-300 transition-all duration-500 transform group-hover:scale-105">
          {project.title}
        </h3>
        {/* Description with backdrop blur */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="relative text-sm leading-relaxed hidden md:block max-w-2xl mx-auto text-gray-200 group-hover:text-white transition-colors duration-300 px-4 py-2">
            {project.description}
          </p>
        </div>
        {/* Tech badges with enhanced styling */}
        <div className="flex mt-4 space-x-2 flex-wrap justify-center">
          {project.tech.slice(0, 3).map((tech, index) => (
            <div
              key={tech}
              className="relative px-3 py-1.5 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 transition-all duration-300 hover:bg-primary/30 hover:border-primary/50 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 mb-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {tech}
            </div>
          ))}
          {project.tech.length > 3 && (
            <div className="relative px-3 py-1.5 text-xs font-medium bg-white/10 backdrop-blur-sm text-white/80 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 mb-2">
              +{project.tech.length - 3}
            </div>
          )}
        </div>{" "}
        {/* Enhanced buttons */}
        <div className="mt-5 flex space-x-3">
          {/* Conditionally render Button and its child only if project.demoLink exists */}
          {project.demoLink && project.demoLink.trim() !== "" && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn px-6 py-2.5 text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-lg border border-white/30 transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="relative z-10">Live Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/20 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
          )}
          {/* Conditionally render Button and its child only if project.repoLink exists */}
          {project.repoLink && project.repoLink.trim() !== "" && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn px-6 py-2.5 text-sm font-medium bg-primary/30 backdrop-blur-sm text-white rounded-lg border border-primary/50 transition-all duration-300 hover:bg-primary/50 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="relative z-10">Code Repo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Floating animation styles */}
    <style jsx>{`
      @keyframes carouselFloat {
        0%,
        100% {
          transform: translateY(0px) scale(1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        50% {
          transform: translateY(-3px) scale(1.005);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      }

      .group:hover {
        animation: carouselFloat 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative h-96 overflow-hidden">
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="h-full w-full rounded-xl bg-white dark:bg-gray-900" />
    </div>

    {/* Main card */}
    <div className="relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] p-6 flex flex-col group-hover:bg-white/80 dark:group-hover:bg-gray-900/80">
      {/* Top section with icon and links */}
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
          <FolderGit2 className="relative h-8 w-8 text-primary group-hover:text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>{" "}
        <div className="flex space-x-2">
          {[
            { icon: ExternalLink, link: project.demoLink, label: "Live Demo" },
            { icon: Github, link: project.repoLink, label: "Repository" },
          ].map(({ icon: Icon, link, label }, i) =>
            link && link.trim() !== "" ? (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="relative group/btn bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover/btn:text-primary transition-colors duration-300" />
              </a>
            ) : null
          )}
        </div>
      </div>

      {/* Title with gradient text effect */}
      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent group-hover:from-primary group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-500">
        {project.title}
      </h3>

      {/* Description with improved scrollbar */}
      <div className="description-container flex-grow overflow-hidden hover:overflow-y-auto thin-scrollbar mt-3">
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* Tech stack with modern badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, index) => (
          <span
            key={tech}
            className="relative px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300 hover:from-primary/10 hover:to-purple-500/10 hover:border-primary/30 hover:text-primary hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Enhanced scrollbar styles */}
    <style jsx>{`
      .thin-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .thin-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .thin-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(
          135deg,
          hsl(var(--primary)) 0%,
          rgba(168, 85, 247, 0.8) 100%
        );
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .thin-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(
          135deg,
          hsl(var(--primary)) 0%,
          rgba(168, 85, 247, 1) 100%
        );
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      /* Custom animations */
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-2px);
        }
      }

      .group:hover {
        animation: float 2s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const Carousel = ({ projects }: { projects: Project[] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

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
    if (ref.current) {
      const fromX = direction === 1 ? 100 : direction === -1 ? -100 : 0;
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: fromX },
        { opacity: 1, x: 0, duration: 1.5, ease: Power2.easeOut }
      );
    }
  }, [index, direction]);

  useEffect(() => {
    const interval = setInterval(() => next(), 10000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative mb-16 hidden md:block">
      <div ref={ref}>
        <CarouselItem project={projects[index]} />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>
      <div className="flex justify-center items-center mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`h-1 w-6 rounded-sm mx-1 ${
              i === index ? "bg-primary" : "bg-gray-400 dark:bg-gray-600"
            }`}
            onClick={() => goTo(i, i > index ? 1 : i < index ? -1 : 0)}
          />
        ))}
      </div>
    </div>
  );
};

export const ProjectsComponent = () => (
  <section id="projects" className="mb-16 fade-in-section">
    <div className="section-header mb-8">
      <h2 className="text-3xl font-semibold text-primary dark:text-[hsl(215,100%,90%)] flex items-center justify-center relative">
        <span className="text-black dark:text-gray-300 mr-2">/</span>
        <span className="relative inline-block">Featured Projects</span>
      </h2>
    </div>

    {/* Hidden preloader for spotlight images */}
    <div className="hidden">
      {spotlightProjects.map((project) => (
        <Image
          key={project.title}
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          priority // This ensures these images are preloaded with high priority
        />
      ))}
    </div>

    {/* Carousel displays after preload */}
    <Carousel projects={spotlightProjects} />

    <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {otherProjects.map((project, i) => (
        <div
          key={i}
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
