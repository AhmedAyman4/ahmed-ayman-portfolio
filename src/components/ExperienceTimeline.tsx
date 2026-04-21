// components/ExperienceTimeline.tsx
"use client";

import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    role: "AI Engineer",
    period: "Jul 2025 - Jan 2026",
    type: "internship",
    link: "https://konecta.com/",
    description: [
      "Collected, cleaned, and structured data using Python and web scraping tools to support reliable analysis and modeling.",
      "Built and optimized machine learning models (classification, clustering, image recognition) and implemented RAG-based chatbots with embeddings, document indexing, and multi-turn conversations.",
      "Automated data and AI workflows using n8n, improving efficiency and reducing manual processing.",
    ],
  },
];

const parseStartDate = (period: string): Date => {
  const startPart = period.split(" - ")[0].trim();
  const [month, year] = startPart.split(" ");
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  return new Date(parseInt(year), monthMap[month] || 0);
};

const sortedExperiences = [...experiences].sort((a, b) => 
  parseStartDate(b.period).getTime() - parseStartDate(a.period).getTime()
);

export function ExperienceTimeline() {
  const isMobile = useIsMobile();

  return (
    <div id="experience" className="relative">
      <FadeInSection delay="0.1s">
        <SectionHeader label="Professional Journey" title="Experience" />
      </FadeInSection>

      <div className="max-w-5xl mx-auto px-2">
        <div className="max-w-4xl mx-auto">
          <div className="experience-card p-6 rounded-xl">
            <Tabs defaultValue={sortedExperiences[0].id} orientation={isMobile ? "horizontal" : "vertical"} className="flex flex-col lg:flex-row gap-6 w-full">
              
              <FadeInSection delay="0.2s" className="lg:w-48 shrink-0">
                <TabsList className={`bg-transparent p-0 w-full h-auto justify-start ${isMobile ? "flex space-x-3 overflow-x-auto scrollbar-hide pb-2" : "flex-col space-y-1"}`}>
                  {sortedExperiences.map((exp, index) => (
                    <TabsTrigger
                      key={exp.id}
                      value={exp.id}
                      className={`group rounded-md transition-all duration-300 data-[state=active]:bg-teal-500/10 data-[state=active]:text-teal-600 dark:data-[state=active]:bg-[#4de9d2]/5 dark:data-[state=active]:text-[#4de9d2] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border-transparent data-[state=active]:shadow-none ${
                        isMobile 
                          ? "flex-shrink-0 px-5 py-3 min-w-fit border-b-2 data-[state=active]:border-teal-500 dark:data-[state=active]:border-[#4de9d2] rounded-b-none" 
                          : "w-full text-left p-2 justify-between border-l-2 data-[state=active]:border-teal-500 dark:data-[state=active]:border-[#4de9d2]"
                      }`}
                    >
                      {isMobile ? (
                        <span className="font-bold text-xs whitespace-nowrap">{exp.company}</span>
                      ) : (
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium text-sm">{exp.company}</span>
                          <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-[#4de9d2] rounded-full animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity"></div>
                        </div>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </FadeInSection>

              <FadeInSection delay="0.3s" className="flex-1">
                {sortedExperiences.map((exp) => (
                  <TabsContent key={exp.id} value={exp.id} className="mt-0 outline-none p-4">
                    <div className="mb-3 flex items-center flex-wrap gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">
                        {exp.role} @{" "}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-teal-500 to-purple-600 dark:from-[#4de9d2] dark:to-purple-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-purple-700 dark:hover:from-[#3dd1b5] dark:hover:to-[#8b5cf6] transition-all duration-300 cursor-pointer"
                        >
                          {exp.company}
                        </a>
                      </h3>
                  </div>

                  <div className="mb-4 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-teal-500 dark:bg-[#4de9d2] rounded-full animate-pulse"></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <FadeInSection
                        key={`item-${exp.id}-${itemIndex}`}
                        delay={`${0.1 + itemIndex * 0.1}s`}
                      >
                        <li className="flex items-start space-x-3 group/item">
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-[#4de9d2] rounded-full"></div>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            {item}
                          </span>
                        </li>
                      </FadeInSection>
                    ))}
                  </ul>
                  </TabsContent>
                ))}
              </FadeInSection>
              
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

