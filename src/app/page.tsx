"use client";

import { Patrick_Hand } from "next/font/google";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Menu,
  Instagram,
  ChevronLeft,
  ChevronRight,
  FolderGit2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TypingEffect } from "@/components/typing-effect";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Me1 from "../assets/Me1.jpg";
import BookRecommender from "../assets/Semantic Book Recommender.png";
import PortfolioWebsite from "../assets/portfolioWebsiteWhite.png";
import MovieReviewSentimentAnalysis from "../assets/Movie Review Sentiment Analysis App.png";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

// const profileImage = "https://picsum.photos/300/300";
// const projectImage = "https://picsum.photos/600/400";

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">
        <a href="#" className={`font-bold text-xl ${patrickHand.className}`}>
          Ahmed Ayman
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
              <SheetDescription className={patrickHand.className}>
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
    title: "Semantic Book Recommender with LLMs",
    description:
      "Develop a web-based Semantic Book Recommender utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
    tech: ["Python", "langchain-chroma", "langchain", "Pandas"],
    image: BookRecommender,
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Semantic-Book-Recommender-with-LLMs",
    repoLink: "https://github.com/AhmedAyman4/llm-semantic-book-recommender",
  },
  {
    title: "Portfolio-Website",
    description:
      "This modern, responsive portfolio website showcases Ahmed Ayman's skills and projects as a Data Scientist and ML Engineer, featuring dark/light mode, smooth animations, and an interactive user experience built with HTML, CSS, and JavaScript.",
    tech: ["Javascript", "HTML", "CSS"],
    image: PortfolioWebsite,
    demoLink: "https://ahmedayman4.github.io/Personal-website/",
    repoLink: "https://github.com/AhmedAyman4/Personal-website",
  },
  {
    title: "Movie Review Sentiment Analysis App",
    description:
      "A movie sentiment analysis application that uses three models — TF-IDF with Logistic Regression, a custom TensorFlow neural network, and a pre-trained RoBERTa transformer — to predict review sentiment through an interactive Gradio web interface with confidence scores and model comparisons.",
    tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
    image: MovieReviewSentimentAnalysis,
    demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
    repoLink:
      "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
  },
  // {
  //   title: "Yet Another Project",
  //   description: "Another project with a different technology stack.",
  //   tech: ["React", "Tailwind CSS", "Firebase"],
  //   image: "https://picsum.photos/600/400",
  //   demoLink: "#",
  //   repoLink: "#",
  // },
];

const FeatureProject: React.FC<{ project: any }> = ({ project }) => (
  <div className="relative rounded-lg overflow-hidden max-w-8xl max-h-fit mx-auto">
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
          <Badge key={t} className="text-xs">
            {t}
          </Badge>
        ))}
      </div>
      <div className="mt-2">
        <Button
          variant="secondary"
          asChild
          size="sm"
          className="px-2 py-1 text-xs"
        >
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button className="ml-2 px-2 py-1 text-xs" asChild size="sm">
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Code Repo
          </a>
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
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button className="ml-2" asChild>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
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
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextProject();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        links={[
          { href: "#hero", label: "Home" },
          { href: "#projects", label: "Projects" },
          { href: "#experience", label: "Experience" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <main className="container mx-auto py-10 flex-grow px-4 md:px-8 lg:px-24 xl:px-28">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-16">
          <Image
            src={Me1}
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4 shadow-lg"
          />
          {/* Title */}
          <h1
            className={`flex items-center justify-center text-6xl font-light ${patrickHand.className}`}
          >
            Hi, <span className="mx-2 text-[#4de9d2] font-medium">Ahmed</span>{" "}
            here.
            <span className="animate-pulse text-[#4de9d2]">|</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-4xl font-light text-gray-300">
            I create stuff sometimes.
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Aspiring Data Scientist & IS student at Faculty of Computers & AI,
            University of Sadat City. Passionate about solving real-world
            problems with data and exploring AI.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/AhmedAyman4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alhofy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ahmedalhofy42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ahmedhofi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* <Button className="mt-4">
                      Download CV
                      <Download className="h-4 w-4 ml-2" />
                  </Button> */}
        </section>
        {/* About Section */}
        {/* <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg text-center">
          Aspiring Data Scientist & ML Engineer, passionate about AI and problem-solving.
          </p>
        </section> */}

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
                <span className="font-semibold">DEPI</span> - Data Scientist
                (2024 - 2025)
              </AccordionTrigger>
              <AccordionContent>
                Detailed description of responsibilities and achievements in
                this role.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="font-semibold">CIB</span> - Intern (2014 -
                2024)
              </AccordionTrigger>
              <AccordionContent>
                Detailed description of responsibilities and achievements in
                this role.
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
            <Badge>Python</Badge>
            <Badge>NumPy</Badge>
            <Badge>Pandas</Badge>
            <Badge>SQL</Badge>
            <Badge>Scikit-learn</Badge>
            <Badge>Tableau</Badge>
            <Badge>Power BI</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
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
        {/* <div className="container mx-auto flex justify-center items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Instagram className="h-5 w-5" />
          </a>
        </div> */}
        <p className="mt-2">
          Built and designed by Ahmed Ayman.
          <br />
          All rights reserved. ©
        </p>
      </footer>
    </div>
  );
}
