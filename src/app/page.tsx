'use client';

import Image from 'next/image';
import {Mail, Github, Linkedin, Menu, Instagram, Download, ChevronLeft, ChevronRight, FolderGit2} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useEffect, useState, useRef} from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {TypingEffect} from "@/components/typing-effect";
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const profileImage = "https://picsum.photos/300/300";
const projectImage = "https://picsum.photos/600/400";

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-2xl">
          Jarfolio
        </a>
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
          <ModeToggle />
        </div>
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:hidden p-4">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through the website.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              {links.map((link) => (
                <Button variant="ghost" asChild key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

// Dummy project data
const projects = [
  {
    title: "TDSB Homework Management Interface",
    description: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    tech: ["Python (Flask)", "Vue.js", "Bootstrap", "SQL"],
    image: "https://picsum.photos/600/400",
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Adam A.I.",
    description: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
    tech: ["Javascript", "HTML", "CSS"],
    image: "https://picsum.photos/600/400",
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Distributed Logging and Monitoring System",
    description: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
    tech: ["Node.js (Express.js)", "React.js", "PostgreSQL"],
    image: "https://picsum.photos/600/400",
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Yet Another Project",
    description: "Another project with a different technology stack.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "https://picsum.photos/600/400",
    demoLink: "#",
    repoLink: "#",
  },
];

const FeatureProject: React.FC<{ project: any }> = ({ project }) => (
  <div className="relative rounded-lg overflow-hidden max-w-6xl max-h-none mx-auto">
    <Image
      src={project.image}
      alt={project.title}
      width={1200}
      height={800}
      className="object-cover w-full"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm mt-1">{project.description}</p>
      <div className="flex mt-2 space-x-2">
        {project.tech.map((t: any) => (
          <Badge key={t} className="text-xs">{t}</Badge>
        ))}
      </div>
      <div className="mt-2">
        <Button variant="secondary" asChild size="sm" className="px-2 py-1 text-xs">
          <a href={project.demoLink}>Live Demo</a>
        </Button>
        <Button className="ml-2 px-2 py-1 text-xs" asChild size="sm">
          <a href={project.repoLink}>Code Repo</a>
        </Button>
      </div>
    </div>
  </div>
);

const SmallProjectCard: React.FC<{ project: any }> = ({ project }) => (
  <Card className="transition-transform hover:-translate-y-2">
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t: any) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-4">
        <Button variant="secondary" asChild>
          <a href={project.demoLink}>Live Demo</a>
        </Button>
        <Button className="ml-2" asChild>
          <a href={project.repoLink}>
            <FolderGit2 className="h-4 w-4 mr-2" />
            Code Repo
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const featuredProject = projects[currentProjectIndex];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        links={[
          { href: '#hero', label: 'Home' },
          { href: '#about', label: 'Projects' },
          { href: '#experience', label: 'Experience' },
          { href: '#skills', label: 'Skills' },
          { href: '#contact', label: 'Contact' },
        ]}
      />
      <main className="container mx-auto py-10 flex-grow">
              {/* Hero Section */}
              <section id="hero" className="text-center mb-16">
                  <Image
                      src={profileImage}
                      alt="Profile"
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4 shadow-lg"
                  />
                  <h1 className="text-4xl font-semibold text-primary mb-2">
                      <TypingEffect text="John Doe" />
                  </h1>
                  <p className="text-muted-foreground text-lg mb-6">
                      Full-Stack Web Developer | React, Node.js, Next.js
                  </p>
                  <div className="flex justify-center space-x-4">
                      <a href="#" className="hover:text-accent">
                          <Github className="h-6 w-6" />
                      </a>
                      <a href="#" className="hover:text-accent">
                          <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="#" className="hover:text-accent">
                          <Mail className="h-6 w-6" />
                      </a>
                      <a href="#" className="hover:text-accent">
                          <Instagram className="h-6 w-6" />
                      </a>
                  </div>
                  {/* <Button className="mt-4">
                      Download CV
                      <Download className="h-4 w-4 ml-2" />
                  </Button> */}
              </section>
        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg text-center">
            A brief introduction about myself and my passion for web development.
          </p>
        </section>

        {/* Project Showcase */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Featured Projects
          </h2>

          {/* Featured Project Carousel */}
          <div className="relative">
            <FeatureProject project={featuredProject} />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              onClick={goToPreviousProject}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous Project</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={goToNextProject}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next Project</span>
            </Button>
          </div>

          {/* Smaller Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <SmallProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Experience
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="font-semibold">Company Name 1</span> - Job Title
                (2020 - 2022)
              </AccordionTrigger>
              <AccordionContent>
                Detailed description of responsibilities and achievements in this
                role.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="font-semibold">Company Name 2</span> - Job Title
                (2018 - 2020)
              </AccordionTrigger>
              <AccordionContent>
                Detailed description of responsibilities and achievements in this
                role.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Next.js</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            {/* Add more skills here */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Contact Me
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          <a href="#" className="hover:text-accent">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-2">Copyright © 2024 Ahmed Ayman - All rights reserved</p>
      </footer>
    </div>
  );
}


