// components/ExperienceTimeline.tsx
"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { useIsMobile } from "@/hooks/use-mobile";
import "@/styles/components/ExperienceTimeline.css";

type ExperienceType = "fulltime" | "parttime" | "internship";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: ExperienceType;
  link: string;
  description: string[];
}

export function ExperienceTimeline() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const isMobile = useIsMobile();

  const experiences: Experience[] = [
    {
      id: "item-1",
      company: "DEPI",
      role: "Data Scientist",
      period: "Oct 2024 - May 2025",
      type: "internship",
      link: "https://depi.gov.eg/content/home",
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
      description: [
        "Gained data and financial literacy expertise, entrepreneurship, and teamwork to enhance problem-solving, decision-making, and business success.",
      ],
    },
    {
      id: "item-3",
      company: "Konecta",
      role: "AI/ML Engineer",
      period: "Jul 2025 - Present",
      type: "internship",
      link: "https://konecta.com/",
      description: [
        "Conducted data collection and preprocessing using Python libraries and web scraping tools to prepare structured datasets for analysis.",
        "Developed and optimized machine learning models for classification, clustering, and image recognition tasks, including model tuning and evaluation.",
        "Implemented conversational AI solutions by building RAG-based chatbots with document indexing, embeddings, and multi-turn query handling.",
      ],
    },
  ];

  const parseStartDate = (period: string): Date => {
    const startPart = period.split(" - ")[0].trim();
    const [month, year] = startPart.split(" ");

    const monthMap: Record<string, number> = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    return new Date(parseInt(year), monthMap[month] || 0);
  };

  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = parseStartDate(a.period);
    const dateB = parseStartDate(b.period);
    return dateB.getTime() - dateA.getTime();
  });

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [selectedCompanyIndex]);

  const getTypeLabel = (type: ExperienceType): string => {
    const labels = {
      fulltime: "Full-time",
      parttime: "Part-time",
      internship: "Internship",
    };
    return labels[type];
  };

  const cardClasses = "experience-card";

  const selectedButtonClasses = "experience-button-selected";

  const unselectedButtonClasses = "experience-button-unselected";

  const CompanySelector = ({
    isHorizontal = false,
  }: {
    isHorizontal?: boolean;
  }) => (
    <div
      className={`${
        isHorizontal
          ? "flex space-x-2 overflow-x-auto scrollbar-hide pb-1"
          : "space-y-1"
      }`}
    >
      {sortedExperiences.map((exp, index) => (
        <button
          key={exp.id}
          onClick={() => setSelectedCompanyIndex(index)}
          className={`${
            isHorizontal
              ? "flex-shrink-0 px-4 py-2.5 min-w-fit"
              : "w-full text-left p-2"
          } rounded-md transition-all duration-300 ${
            selectedCompanyIndex === index
              ? selectedButtonClasses
              : unselectedButtonClasses
          }`}
        >
          {isHorizontal ? (
            <div className="text-center">
              <div
                className={`text-xs font-bold mb-0.5 ${
                  selectedCompanyIndex === index
                    ? "text-black dark:text-[#4de9d2]"
                    : "text-black dark:text-[#4de9d2]"
                }`}
              >
                {String(index).padStart(2, "0")}.
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{exp.company}</span>
              {selectedCompanyIndex === index && (
                <div className="w-1.5 h-1.5 bg-[#4de9d2] rounded-full animate-pulse"></div>
              )}
            </div>
          )}
        </button>
      ))}
    </div>
  );

  const ExperienceDetails = () => {
    const selectedExp = sortedExperiences[selectedCompanyIndex];

    return (
      <div className={`${cardClasses} p-4`}>
        <div className="mb-3">
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {selectedExp.role} @{" "}
              <a
                href={selectedExp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#4de9d2] to-purple-500 bg-clip-text text-transparent hover:from-[#3dd1b5] hover:to-[#8b5cf6] transition-all duration-300 cursor-pointer"
              >
                {selectedExp.company}
              </a>
            </h3>
            <span className="px-2 py-1 bg-gradient-to-r from-[#4de9d2]/20 to-purple-500/20 text-xs font-medium rounded-full border border-[#4de9d2]/30 text-gray-700 dark:text-gray-300">
              {getTypeLabel(selectedExp.type)}
            </span>
          </div>
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <div className="w-1 h-1 bg-[#4de9d2] rounded-full animate-pulse"></div>
          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
            {selectedExp.period}
          </span>
        </div>

        <div className="bg-white/50 dark:bg-white/5 rounded-lg p-3 border border-gray-200/30 dark:border-white/10">
          <FadeInSection key={`header-${animationKey}`} delay="0.1s">
            <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Key Responsibilities & Achievements
            </h4>
          </FadeInSection>
          <ul className="space-y-2">
            {selectedExp.description.map((item, itemIndex) => (
              <FadeInSection
                key={`item-${animationKey}-${itemIndex}`}
                delay={`${0.2 + itemIndex * 0.1}s`}
              >
                <li className="flex items-start space-x-2 group/item">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1 h-1 bg-gradient-to-r from-[#4de9d2] to-purple-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div id="experience" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="experience-bg-decoration">
        <div className="experience-decoration-orb-1"></div>
        <div className="experience-decoration-orb-2"></div>
      </div>

      {/* Title */}
      <FadeInSection delay="0.1s">
        <SectionHeader
          label="Professional Journey"
          title="Experience"
          subtitle="My professional experience and roles in data science and analytics"
        />
      </FadeInSection>

      {/* Layout */}
      <div className="max-w-5xl mx-auto px-2 relative z-10">
        <div className="max-w-4xl mx-auto">
          {isMobile ? (
            <div className="space-y-6">
              <FadeInSection delay="0.2s">
                <CompanySelector isHorizontal />
              </FadeInSection>
              <FadeInSection delay="0.3s">
                <ExperienceDetails />
              </FadeInSection>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <FadeInSection delay="0.2s" className="lg:col-span-1">
                <CompanySelector />
              </FadeInSection>
              <FadeInSection delay="0.3s" className="lg:col-span-4">
                <ExperienceDetails />
              </FadeInSection>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
