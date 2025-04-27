// ProjectsComponent.jsx
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, FolderGit2, ExternalLink, Github } from "lucide-react";
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

// Import project images (assuming they are in the same directory or accessible via relative paths)
import BookRecommender from "../assets/Semantic Book Recommender.png"; // Changed to relative path
import PortfolioWebsite from "../assets/portfolioWebsiteWhite.png";     // Changed to relative path
import MovieLibrary from "../assets/movieLibrary.png";           // Changed to relative path
import MovieReviewSentimentAnalysis from "../assets/Movie Review Sentiment Analysis App.png";  // Changed to relative path

// Projects data
const spotlightProjects = [
    {
        title: "Semantic Book Recommender ",
        description:
            "Developed a web-based Semantic Book Recommender utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
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
        title: "Movie Library",
        description:
            "A React-based movie library application that enables users to search for movies, view trending titles, and explore detailed information.",
        tech: ["React", "Vite", "TailwindCSS", "Appwrite", "TMDb API"],
        image: MovieLibrary,
        demoLink: "https://movie-library-blush.vercel.app/",
        repoLink: "https://github.com/AhmedAyman4/movie-library",
    },
    {
        title: "Movie Review Sentiment Analysis ",
        description:
            "A movie sentiment analysis application using three models to predict review sentiment through an interactive Gradio web interface.",
        tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
        image: MovieReviewSentimentAnalysis,
        demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
        repoLink:
            "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
    },
];

const otherProjects = [
    {
        title: "Semantic Book Recommender ",
        description:
            "Developed a web-based application utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
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
        title: "Movie Library",
        description:
            "A React-based movie library application that enables users to search for movies, view trending titles, and explore detailed information.",
        tech: ["React", "Vite", "TailwindCSS", "Appwrite", "TMDb API"],
        image: MovieLibrary,
        demoLink: "https://movie-library-blush.vercel.app/",
        repoLink: "https://github.com/AhmedAyman4/movie-library",
    },
    {
        title: "Movie Review Sentiment Analysis ",
        description:
            "A movie sentiment analysis application using three models to predict review sentiment through an interactive Gradio web interface.",
        tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
        image: MovieReviewSentimentAnalysis,
        demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
        repoLink:
            "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
    },
];

const CarouselItem = ({ project }) => (
    <div className="relative rounded-lg overflow-hidden max-w-8xl max-h-fit mx-auto">
        <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-foreground dark:text-white flex flex-col items-center text-center px-4 pb-8">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            {/* Hide description on mobile screens */}
            <p className="text-sm mt-2 hidden md:block max-w-2xl mx-auto">{project.description}</p>
            <div className="flex mt-3 space-x-2 flex-wrap justify-center">
                {project.tech.slice(0, 3).map((t) => (
                    <Badge key={t} className="text-xs mb-2">
                        {t}
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

const ProjectCard = ({ project }) => (
    <div className="aspect-square md:aspect-auto md:h-80 bg-white dark:bg-gray-800 rounded-lg shadow-md  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 p-4 md:p-6 flex flex-col fade-in-section border-t-4" style={{ borderColor: "hsl(var(--primary))" }}>
        <div className="flex justify-between items-start">
            <FolderGit2 className="h-6 w-6 text-primary" />
            <div className="flex space-x-2">
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary bg-gray-100 dark:bg-gray-700 p-2 rounded-md transition-colors"
                >
                    <ExternalLink className="h-5 w-5" />
                </a>
                <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary bg-gray-100 dark:bg-gray-700 p-2 rounded-md transition-colors"
                >
                    <Github className="h-5 w-5" />
                </a>
            </div>
        </div>

        <h3 className="text-xl font-semibold mt-3 text-black dark:text-white">
            {project.title}
        </h3>

        <p className="text-base mt-2 text-gray-600 dark:text-gray-300 flex-grow">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
                <span key={t} className="text-xs text-gray-600 dark:text-gray-400">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

export const ProjectsComponent = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const featuredProject = spotlightProjects[currentProjectIndex];

    const goToPreviousProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : spotlightProjects.length - 1
        );
    };

    const goToNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex < spotlightProjects.length - 1 ? prevIndex + 1 : 0
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
            <div className="section-header mb-8">
                <h2 className="text-3xl font-semibold text-primary text-center">
                    {/* <span className="text-black dark:text-gray-300 mr-2">/</span> */}
                    Featured Projects
                    {/* <div className="w-24 h-1 mx-auto mt-2" style={{ backgroundColor: "hsl(var(--primary))" }}></div> */}
                </h2>
            </div>

            {/* Spotlight Projects Carousel */}
            <div className="relative mb-16 hidden md:block">
                <CarouselItem project={featuredProject} />
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

                {/* Carousel Pagination */}
                <div className="flex justify-center items-center mt-4">
                    {spotlightProjects.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 w-6 rounded-sm mx-1 ${currentProjectIndex === index
                                ? "bg-primary"
                                : "bg-gray-400 dark:bg-gray-600"
                                }`}
                            onClick={() => setCurrentProjectIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Other Projects Section */}
            {/* <div className="section-header mb-8">
        <h2 className="text-3xl font-semibold text-primary text-center">
          <span className="text-black dark:text-gray-300 mr-2">/</span>
          Other Projects
        </h2>
      </div> */}

            <div className="project-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <div key={index} className="fade-in-section" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsComponent;

