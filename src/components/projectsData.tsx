// projectsData.tsx

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
}

export const spotlightProjects: Project[] = [
  {
    title: "Semantic Book Recommender ",
    description:
      "Developed a web-based Semantic Book Recommender utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
    tech: ["Python", "langchain-chroma", "langchain", "Pandas"],
    image: "/images/semanticBookRecommender.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Semantic-Book-Recommender-with-LLMs",
    repoLink: "https://github.com/AhmedAyman4/llm-semantic-book-recommender",
  },
  {
    title: "Campaign Conversion Predictor",
    description:
      "Built a machine learning model to predict customer conversion in digital marketing campaigns using demographic and engagement data. Deployed a Gradio web app for real-time predictions with a Random Forest model.",
    tech: ["Python", "Scikit-learn", "Gradio", "EDA", "Machine Learning"],
    image: "/images/DigitalMarketingConversionImage.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Predict-Conversion-in-Digital-Marketing",
    repoLink: "https://github.com/AhmedAyman4/customer-conversion-predictor",
  },
  {
    title: "Portfolio-Website",
    description:
      "This modern, responsive portfolio website showcases Ahmed Ayman's skills and projects as a Data Scientist and ML Engineer, featuring dark/light mode, smooth animations, and an interactive user experience built with HTML, CSS, and JavaScript.",
    tech: ["Javascript", "HTML", "CSS"],
    image: "/images/portfolioWebsiteWhite.png",
    demoLink: "https://ahmedayman4.github.io/Personal-website/",
    repoLink: "https://github.com/AhmedAyman4/Personal-website",
  },
  {
    title: "Movie Library",
    description:
      "A React-based movie library application that enables users to search for movies, view trending titles, and explore detailed information.",
    tech: ["React", "Vite", "TailwindCSS", "Appwrite", "TMDb API"],
    image: "/images/movieLibrary.png",
    demoLink: "https://movie-library-blush.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/movie-library",
  },
  {
    title: "Movie Review Sentiment Analysis ",
    description:
      "A movie sentiment analysis application using three models to predict review sentiment through an interactive Gradio web interface.",
    tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
    image: "/images/movieReviewSentimentAnalysis.png",
    demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
    repoLink:
      "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Semantic Book Recommender ",
    description:
      "Developed a web-based application utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
    tech: ["Python", "langchain-chroma", "langchain", "Pandas"],
    image: "/images/semanticBookRecommender.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Semantic-Book-Recommender-with-LLMs",
    repoLink: "https://github.com/AhmedAyman4/llm-semantic-book-recommender",
  },
  {
    title: "Campaign Conversion Predictor",
    description:
      "Built a machine learning model to predict customer conversion in digital marketing campaigns using demographic and engagement data. Deployed a Gradio web app for real-time predictions with a Random Forest model.",
    tech: ["Python", "Scikit-learn", "Gradio", "EDA", "Machine Learning"],
    image: "/images/DigitalMarketingConversionImage.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Predict-Conversion-in-Digital-Marketing",
    repoLink: "https://github.com/AhmedAyman4/customer-conversion-predictor",
  },
  {
    title: "HR Analytics in Tableau",
    description:
      "Analyzed HR data of 1,470 employees in Tableau to visualize workforce trends and identify key attrition drivers, including a 16% attrition rate and demographic insights.",
    tech: ["Tableau", "Data Visualization", "HR Analytics"],
    image: "/images/HrAnalyticsImage.png",
    repoLink: "https://github.com/AhmedAyman4/HR-Analytics-in-Tableau",
  },
  {
    title: "Portfolio-Website",
    description:
      "This modern, responsive portfolio website showcases Ahmed Ayman's skills and projects as a Data Scientist and ML Engineer, featuring dark/light mode, smooth animations, and an interactive user experience built with HTML, CSS, and JavaScript.",
    tech: ["Javascript", "HTML", "CSS"],
    image: "/images/portfolioWebsiteWhite.png",
    demoLink: "https://ahmedayman4.github.io/Personal-website/",
    repoLink: "https://github.com/AhmedAyman4/Personal-website",
  },
  {
    title: "Movie Library",
    description:
      "A React-based movie library application that enables users to search for movies, view trending titles, and explore detailed information.",
    tech: ["React", "Vite", "TailwindCSS", "Appwrite", "TMDb API"],
    image: "/images/movieLibrary.png",
    demoLink: "https://movie-library-blush.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/movie-library",
  },
  {
    title: "Movie Review Sentiment Analysis ",
    description:
      "A movie sentiment analysis application using three models to predict review sentiment through an interactive Gradio web interface.",
    tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
    image: "/images/movieReviewSentimentAnalysis.png",
    demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
    repoLink:
      "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
  },
];

/*
Example of how to add a project without demo or repo links:

{
  title: "Private Research Project",
  description: "A confidential research project that cannot be shared publicly at this time.",
  tech: ["Python", "TensorFlow", "Research"],
  image: "/images/placeholder.png",
  // Notice: no demoLink or repoLink properties
  // The buttons will be automatically hidden in both CarouselItem and ProjectCard
}

You can also set them to empty strings or undefined:
{
  title: "Work in Progress",
  description: "This project is still under development.",
  tech: ["React", "TypeScript"],
  image: "/images/wip.png",
  demoLink: "", // Empty string - button will be hidden
  repoLink: undefined, // Undefined - button will be hidden
}
*/
