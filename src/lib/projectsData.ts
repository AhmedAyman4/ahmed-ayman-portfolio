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
    title: "Nawy Property Recommender",
    description:
      "AI-powered property consultant featuring semantic search, RAG-based chat for insights, and XGBoost price prediction. Personalized via dynamic user preference tracking.",
    tech: [
      "Next.js",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "MongoDB",
      "XGBoost",
      "RAG",
      "Docker",
      "Playwright",
    ],
    image: "/images/projects/nawy-property-recommender.png",
    demoLink: "https://nawy.netlify.app/",
    repoLink: "https://github.com/AhmedAyman4/nawy",
  },
  {
    title: "FCAI USC Regulations Chatbot",
    description:
      "Built a bilingual (English/Arabic) RAG chatbot to query the Faculty of Computer & Artificial Intelligence (USC) internal regulations. Uses Google Gemini with ChromaDB for semantic retrieval and provides accurate, context-aware answers via a web interface.",
    tech: [
      "RAG",
      "LangChain",
      "FastAPI",
      "LLMs",
      "HuggingFace multilingual-e5-base",
      "ChromaDB",
      "Next.js",
      "Docker",
      "Playwright",
    ],
    image: "/images/projects/regulations-chatbot.png",
    demoLink: "https://fcai-usc-regulations-chatbot.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/fcai-regulations-rag-api",
  },
  {
    title: "Semantic Book Recommender",
    description:
      "Developed a web-based Semantic Book Recommender utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
    tech: [
      "Python",
      "langchain-chroma",
      "langchain",
      "Pandas",
      "fastapi",
      "Docker",
      "Next.js",
    ],
    image: "/images/projects/semantic-book-recommender-webapp.png",
    demoLink: "https://semantic-book-search.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/semantic-book-recommender",
  },
/*
  {
    title: "Retail Analytics Copilot",
    description:
      "A Hybrid RAG + SQL Agent using LangGraph and DSPy. Deployed on Hugging Face Spaces, powered by Phi-3.5 (3.8B) and Gemini models. Supports batch processing and JSON input/output.",
    tech: [
      "Python",
      "LangGraph",
      "DSPy",
      "SQLite",
      "RAG",
      "Streamlit",
      "Docker",
    ],
    image: "/images/projects/retail-analytics-copilot.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/retail-analytics-copilot",
    repoLink: "https://github.com/AhmedAyman4/retail-analytics-copilot",
  },
*/
  {
    title: "Campaign Conversion Predictor",
    description:
      "Built a machine learning model to predict customer conversion in digital marketing campaigns using demographic and engagement data. Deployed a Gradio web app for real-time predictions with a Random Forest model.",
    tech: ["Python", "Scikit-learn", "Gradio", "EDA", "Machine Learning"],
    image: "/images/projects/digital-marketing-conversion-image.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Predict-Conversion-in-Digital-Marketing",
    repoLink: "https://github.com/AhmedAyman4/customer-conversion-predictor",
  },
  {
    title: "Portfolio-Website",
    description:
      "This modern, responsive portfolio website showcases Ahmed Ayman's skills and projects as a Data Scientist and ML Engineer, featuring dark/light mode, smooth animations, and an interactive user experience built with HTML, CSS, and JavaScript.",
    tech: ["Javascript", "HTML", "CSS"],
    image: "/images/projects/portfolio-website-white.png",
    demoLink: "https://ahmedayman4.github.io/Personal-website/",
    repoLink: "https://github.com/AhmedAyman4/Personal-website",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Nawy Property Recommender",
    description:
      "AI-powered property consultant featuring semantic search and chat for nearly 9,000 properties and 600+ blogs across 1,700+ compounds and 40+ locations. RAG-based chatbot for area insights, property comparisons, and XGBoost price prediction. Personalized via dynamic preference tracking stored in MongoDB.",
    tech: [
      "Next.js",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "MongoDB",
      "XGBoost",
      "RAG",
      "Docker",
      "Playwright",
    ],
    image: "/images/projects/nawy-property-recommender.png",
    demoLink: "https://nawy.netlify.app/",
    repoLink: "https://github.com/AhmedAyman4/nawy",
  },
  {
    title: "FCAI USC Regulations Chatbot",
    description:
      "Built a bilingual (English/Arabic) RAG chatbot to query the Faculty of Computer & Artificial Intelligence (USC) internal regulations. Uses Google Gemini with ChromaDB for semantic retrieval and provides accurate, context-aware answers via a web interface.",
    tech: [
      "RAG",
      "LangChain",
      "FastAPI",
      "LLMs",
      "HuggingFace",
      "ChromaDB",
      "Next.js",
      "Docker",
    ],
    image: "/images/projects/regulations-chatbot.png",
    demoLink: "https://fcai-usc-regulations-chatbot.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/fcai-regulations-rag-api",
  },
  {
    title: "Semantic Book Recommender ",
    description:
      "Developed a web-based application utilizing LLMs, encompassing data cleaning, vector database creation for semantic search, zero-shot text classification (fiction/non-fiction), sentiment analysis for tone-based sorting, and a Gradio interface for user interaction.",
    tech: [
      "Python",
      "langchain-chroma",
      "langchain",
      "Pandas",
      "fastapi",
      "Docker",
      "Next.js",
    ],
    image: "/images/projects/semantic-book-recommender-webapp.png",
    demoLink: "https://semantic-book-search.vercel.app/",
    repoLink: "https://github.com/AhmedAyman4/semantic-book-recommender",
  },
  {
    title: "Campaign Conversion Predictor",
    description:
      "Built a machine learning model to predict customer conversion in digital marketing campaigns using demographic and engagement data. Deployed a Gradio web app for real-time predictions with a Random Forest model.",
    tech: ["Python", "Scikit-learn", "Gradio", "EDA", "Machine Learning"],
    image: "/images/projects/digital-marketing-conversion-image.png",
    demoLink:
      "https://huggingface.co/spaces/ahmed-ayman/Predict-Conversion-in-Digital-Marketing",
    repoLink: "https://github.com/AhmedAyman4/customer-conversion-predictor",
  },
  {
    title: "Portfolio-Website",
    description:
      "This modern, responsive portfolio website showcases Ahmed Ayman's skills and projects as a Data Scientist and ML Engineer, featuring dark/light mode, smooth animations, and an interactive user experience built with HTML, CSS, and JavaScript.",
    tech: ["Javascript", "HTML", "CSS"],
    image: "/images/projects/portfolio-website-white.png",
    demoLink: "https://ahmedayman4.github.io/Personal-website/",
    repoLink: "https://github.com/AhmedAyman4/Personal-website",
  },
  {
    title: "Movie Review Sentiment Analysis ",
    description:
      "A movie sentiment analysis application using three models to predict review sentiment through an interactive Gradio web interface.",
    tech: ["scikit-learn", "transformers", "tensorflow", "gradio"],
    image: "/images/projects/movie-review-sentiment-analysis.png",
    demoLink: "https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis",
    repoLink:
      "https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App",
  },
];
