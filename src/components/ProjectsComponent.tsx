// ProjectsComponent.jsx
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import BookRecommender from "../assets/Semantic Book Recommender.png";
import PortfolioWebsite from "../assets/portfolioWebsiteWhite.png";
import MovieLibrary from "../assets/movieLibrary.png";
import MovieReviewSentimentAnalysis from "../assets/Movie Review Sentiment Analysis App.png";

// Projects data
const projects = [
  {
    title: "Semantic Book Recommender with LLMs",
    description:
      "Developed a web-based Semantic Book Recommender utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
    tech: ["Python", "langchain-chroma", "langchain", "Pandas"],
    image: BookRecommender, // Updated path for Next.js public folder
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Semantic-Book-Recommender-with-LLMs",
    repoLink: "https://github.com/AhmedAyman4/llm-semantic-book-recommender",
  },
  {
    title: "Portfolio-Website",
    description:
      "This modern, responsive portfolio website showcases Ahmed Ayman's skills and projects as a Data Scientist and ML Engineer, featuring dark/light mode, smooth animations, and an interactive user experience built with HTML, CSS, and JavaScript.",
    tech: ["Javascript", "HTML", "CSS"],
    image: PortfolioWebsite, // Updated path
    demoLink: "https://ahmedayman4.github.io/Personal-website/",
    repoLink: "https://github.com/AhmedAyman4/Personal-website",
  },
  {
    title: "Movie Library",
    description:
      "A React-based movie library application that enables users to search for movies, view trending titles, and explore detailed information. Integrates The Movie Database (TMDb) API for movie data and Appwrite for backend services like tracking search trends.",
    tech: ["React", "Vite", "TailwindCSS", "Appwrite", "TMDb API"],
    image: MovieLibrary, // Updated path
    demoLink: "https://movie-library-blush.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/movie-library",
  },
  {
    title: "Movie Review Sentiment Analysis App",
    description:
      "A movie sentiment analysis application that uses three models — TF-IDF with Logistic Regression, a custom TensorFlow neural network, and a pre-trained RoBERTa transformer — to predict review sentiment through an interactive Gradio web interface with confidence scores and model comparisons.",
    tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
    image: MovieReviewSentimentAnalysis, // Updated path
    demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
    repoLink:
      "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
  },
];

const FeatureProject = ({ project }) => (
  <div className="relative rounded-lg overflow-hidden max-w-8xl max-h-fit mx-auto">
    <Image
      src={project.image}
      alt={project.title}
      width={1200}
      height={800}
      className="object-cover w-full"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-gray-800 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-foreground dark:text-white">
      <h3 className="text-lg font-semibold hidden sm:block">{project.title}</h3>
      <p className="text-sm mt-1 hidden sm:block">{project.description}</p>
      <div className="flex mt-2 space-x-2">
        {project.tech.map((t) => (
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

const SmallProjectCard = ({ project }) => (
  <Card className="transition-transform hover:-translate-y-2 dark:bg-gray-800 fade-in-section">
    <CardHeader>
      <CardTitle className="dark:text-white text-black">
        {project.title}
      </CardTitle>
      <CardDescription className="dark:text-gray-300 text-black">
        {project.description}
      </CardDescription>
    </CardHeader>

    <CardContent>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
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

export const ProjectsComponent = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const featuredProject = projects[currentProjectIndex];

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
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="projects" className="mb-16 fade-in-section">
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

      {/* Project Pagination */}
      <div className="flex justify-center items-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentProjectIndex === index
                ? "bg-primary"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentProjectIndex(index)}
          />
        ))}
      </div>

      {/* Smaller Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <SmallProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsComponent;
