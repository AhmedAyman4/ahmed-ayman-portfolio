export type ExperienceType = "fulltime" | "parttime" | "internship";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: ExperienceType;
  link: string;
  description: string[];
  logo: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  link: string;
  description: string[];
  logo?: string;
  courses?: string[];
}

export const educations: Education[] = [
  {
    id: "edu-1",
    institution: "University of Sadat City",
    degree: "Bachelor's in Computer Science and AI",
    period: "Sep 2022 - Jun 2026",
    link: "https://usc.edu.eg/",
    logo: "/images/company_logos/usc-logo.jpeg",
    description: [
      "Faculty of Computers & Artificial Intelligence.",
      "CGPA: 3.42/4.0 (Excellent).",
    ],
    courses: [
      "Artificial Intelligence",
      "Big Data Analytics",
      "Data Mining",
      "Cloud Computing",
      "Business Intelligence",
      "Database Systems",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "item-1",
    company: "DEPI",
    role: "Data Scientist",
    period: "Oct 2024 - May 2025",
    type: "internship",
    link: "https://depi.gov.eg/content/home",
    logo: "/images/company_logos/digital_egypt_pioneers_initiative_depi_logo.jpeg",
    description: [
      "Analyze data using Python, SQL, and analytics tools to identify trends, opportunities, and business insights.",
      "Build and deploy ML models with Python, Scikit-learn, and MLflow, leveraging AI and prompt engineering for integration.",
    ],
  },
  {
    id: "item-2",
    company: "CIB Egypt",
    role: "Intern",
    period: "Jul 2024 - Jul 2024",
    type: "internship",
    link: "https://www.cibeg.com/",
    logo: "/images/company_logos/cib_egypt_logo.jpeg",
    description: [
      "Gained data and financial literacy expertise, entrepreneurship, and teamwork to enhance problem-solving, decision-making, and business success.",
    ],
  },
  {
    id: "item-3",
    company: "Konecta",
    role: "AI Engineer",
    period: "Jul 2025 - Jan 2026",
    type: "internship",
    link: "https://konecta.com/",
    logo: "/images/company_logos/konecta_group_logo.jpeg",
    description: [
      "Collected, cleaned, and structured data using Python and web scraping tools to support reliable analysis and modeling.",
      "Built and optimized machine learning models (classification, clustering, image recognition) and implemented RAG-based chatbots with embeddings, document indexing, and multi-turn conversations.",
      "Automated data and AI workflows using n8n, improving efficiency and reducing manual processing.",
    ],
  },
];
