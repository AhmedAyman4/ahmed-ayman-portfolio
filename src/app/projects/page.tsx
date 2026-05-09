"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { otherProjects } from "@/lib/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderGit2, FolderUp } from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";
import "@/styles/components/ProjectsComponent.css";

// Reuse ProjectLink and ProjectCard or similar logic
const ProjectLink = ({ href, children, className }: { href?: string; children: React.ReactNode; className: string }) =>
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

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="group relative h-full flex flex-col bg-white dark:bg-gray-900/70 overflow-hidden border-transparent rounded-3xl hover:border-primary/10 dark:hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.01]">
    <div className="project-card-image-container md:hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="project-card-image"
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
          <ProjectLink href={project.repoLink} className="hover:brightness-[1.1] hover:scale-[1.1] hover:text-primary dark:hover:text-primary transition-all duration-200">
            <GitHubIcon sx={{ fontSize: '1.25rem' }} className="-translate-y-[1px] text-gray-700 dark:text-gray-300" />
          </ProjectLink>
          <ProjectLink href={project.demoLink} className="hover:brightness-[1.1] hover:scale-[1.1] hover:text-primary dark:hover:text-primary transition-all duration-200">
            <FolderUp className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </ProjectLink>
        </div>
      </div>
      <CardTitle className="project-card-title hidden md:block">
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
        {project.tech.map((tech: string, i: number) => (
          <span key={tech} className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {tech}
            {i < project.tech.length - 1 && <span className="ml-2">•</span>}
          </span>
        ))}
      </div>
    </CardFooter>
  </Card>
);

export default function ProjectsPage() {
  return (
    <div className="layout-container">
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/#experience", label: "Experience" },
          { href: "/#projects", label: "Projects" },
          { href: "/#certifications", label: "Certifications" },
          { href: "/#skills", label: "Skills" },
          { href: "/#contact", label: "Contact" },
        ]}
      />
      
      <main className="main-content py-20 mt-10">
        <div className="w-full relative">
          <FadeInSection>
            <div className="flex flex-col items-center justify-center gap-4 mb-12">
              <SectionHeader
                label="Portfolio"
                title="All Projects"
                className="mb-0"
              />
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900/70 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-normal hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 w-fit"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </div>
          </FadeInSection>

          <div className="projects-grid">
            <div className="projects-grid-container">
              {otherProjects.map((project, i) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
