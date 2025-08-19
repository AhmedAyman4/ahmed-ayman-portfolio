// components/ExperienceTimeline.tsx
"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { useIsMobile } from "@/hooks/use-mobile";

export function ExperienceTimeline() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const isMobile = useIsMobile();

  const experiences = [
    {
      id: "item-1",
      company: "DEPI",
      role: "Data Scientist",
      period: "Oct 2024 - May 2025",
      type: "internship" as "fulltime" | "parttime" | "internship",
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
      type: "internship" as "fulltime" | "parttime" | "internship",
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
      type: "internship" as "fulltime" | "parttime" | "internship",
      link: "https://konecta.com/",
      description: [
        "Cleaned and preprocessed datasets, handling missing values, normalization, and validation.",
        "Built web scrapers with BeautifulSoup and Playwright to extract dynamic e-commerce and real estate data, exporting results to CSV.",
        "Developed supervised ML pipelines with model training, tuning, and evaluation.",
        "Performed customer segmentation using clustering techniques (K-Means, Hierarchical, DBSCAN, Meanshift) with evaluation metrics and visualization.",
      ],
    },
  ];

  // Function to parse date from period string and return a comparable date
  const parseStartDate = (period: string): Date => {
    const startPart = period.split(" - ")[0].trim();
    const [month, year] = startPart.split(" ");

    const monthMap: { [key: string]: number } = {
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

  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = parseStartDate(a.period);
    const dateB = parseStartDate(b.period);
    return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
  });

  // Update animation key when company changes to trigger re-animation
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [selectedCompanyIndex]);

  return (
    <div id="experience" className="relative overflow-hidden">
      {/* Background decorative elements - made smaller */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs - reduced size */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-[#4de9d2]/10 to-purple-500/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-blue-500/5 to-[#4de9d2]/5 rounded-full blur-2xl animate-float-slower"></div>
      </div>

      {/* Title */}
      <FadeInSection delay="0.1s">
        <SectionHeader
          label="Professional Journey"
          title="Experience"
          subtitle="My professional experience and roles in data science and analytics"
        />
      </FadeInSection>

      {/* Two-column layout for desktop, stacked layout for mobile */}
      <div className="relative max-w-5xl mx-auto">
        {isMobile ? (
          /* Mobile Layout - Horizontal Navigation + Details Below */
          <div className="space-y-6">
            {/* Mobile Horizontal Navigation */}
            <FadeInSection delay="0.2s">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-lg border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 p-2">
                <div
                  className="flex space-x-2 overflow-x-auto scrollbar-hide pb-1"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {sortedExperiences.map((exp, index) => (
                    <button
                      key={exp.id}
                      onClick={() => setSelectedCompanyIndex(index)}
                      className={`flex-shrink-0 px-4 py-2.5 rounded-md transition-all duration-300 min-w-fit ${
                        selectedCompanyIndex === index
                          ? "bg-gradient-to-r from-[#4de9d2]/20 to-purple-500/20 border border-[#4de9d2]/30 text-gray-900 dark:text-gray-100"
                          : "bg-gray-50/80 dark:bg-gray-800/20 border border-gray-200/50 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/20 hover:border-gray-300/50 dark:hover:border-transparent"
                      }`}
                    >
                      <div className="text-center">
                        <div
                          className={`text-xs font-bold mb-0.5 ${
                            selectedCompanyIndex === index
                              ? "text-[#2dd4bf] dark:text-[#4de9d2]"
                              : "text-[#059669] dark:text-[#4de9d2]"
                          }`}
                        >
                          {String(index).padStart(2, "0")}.
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Mobile Job Details */}
            <FadeInSection delay="0.3s">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-lg border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 p-4">
                {(() => {
                  const selectedExp = sortedExperiences[selectedCompanyIndex];
                  return (
                    <div>
                      {/* Job Title and Company */}
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
                            {selectedExp.type === "fulltime"
                              ? "Full-time"
                              : selectedExp.type === "parttime"
                              ? "Part-time"
                              : "Internship"}
                          </span>
                        </div>
                      </div>

                      {/* Date Range */}
                      <div className="mb-4 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-[#4de9d2] rounded-full animate-pulse"></div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                          {selectedExp.period}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <div className="bg-white/50 dark:bg-white/5 rounded-lg p-3 border border-gray-200/30 dark:border-white/10">
                        <FadeInSection
                          key={`header-${animationKey}`}
                          delay="0.1s"
                        >
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
                })()}
              </div>
            </FadeInSection>
          </div>
        ) : (
          /* Desktop Layout - Two Column */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Column - Company List - reduced padding */}
            <FadeInSection delay="0.2s" className="left-column lg:col-span-1">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-lg border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 p-2">
                <div className="space-y-1">
                  {sortedExperiences.map((exp, index) => (
                    <button
                      key={exp.id}
                      onClick={() => setSelectedCompanyIndex(index)}
                      className={`w-full text-left p-2 rounded-md transition-all duration-300 ${
                        selectedCompanyIndex === index
                          ? "bg-gradient-to-r from-[#4de9d2]/20 to-purple-500/20 border border-[#4de9d2]/30 text-gray-900 dark:text-gray-100"
                          : "bg-gray-50/50 dark:bg-gray-800/20 border border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">
                          {exp.company}
                        </span>
                        {selectedCompanyIndex === index && (
                          <div className="w-1.5 h-1.5 bg-[#4de9d2] rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Right Column - Job Details - reduced padding */}
            <FadeInSection delay="0.3s" className="right-column lg:col-span-2">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-lg border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 p-3">
                {(() => {
                  const selectedExp = sortedExperiences[selectedCompanyIndex];
                  return (
                    <div>
                      {/* Job Title and Company - on same line */}
                      <div className="mb-2">
                        <div className="flex items-center flex-wrap gap-2 mb-1">
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
                          <span className="px-1.5 py-0.5 bg-gradient-to-r from-[#4de9d2]/20 to-purple-500/20 text-xs font-medium rounded-full border border-[#4de9d2]/30 text-gray-700 dark:text-gray-300">
                            {selectedExp.type === "fulltime"
                              ? "Full-time"
                              : selectedExp.type === "parttime"
                              ? "Part-time"
                              : "Internship"}
                          </span>
                        </div>
                      </div>

                      {/* Date Range - smaller spacing */}
                      <div className="mb-3 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-[#4de9d2] rounded-full animate-pulse"></div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                          {selectedExp.period}
                        </span>
                      </div>

                      {/* Responsibilities - reduced padding */}
                      <div className="bg-white/50 dark:bg-white/5 rounded-lg p-2 border border-gray-200/30 dark:border-white/10">
                        <FadeInSection
                          key={`header-${animationKey}`}
                          delay="0.1s"
                        >
                          <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            Key Responsibilities & Achievements
                          </h4>
                        </FadeInSection>
                        <ul className="space-y-1.5">
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
                })()}
              </div>
            </FadeInSection>
          </div>
        )}
      </div>

      {/* Custom animations and styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) translateX(5px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) translateX(-5px) rotate(-1deg);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
