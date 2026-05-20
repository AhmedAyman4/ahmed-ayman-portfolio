// components/ExperienceTimeline.tsx
"use client";

import Image from "next/image";
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
  logo: string;
}

const experiences: Experience[] = [
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
      <FadeInSection>
        <SectionHeader label="Professional Journey" title="Experience" />
      </FadeInSection>

      <div className="max-w-5xl mx-auto px-2">
        <div className="max-w-4xl mx-auto">
          <div className="experience-card">
            <Tabs defaultValue={sortedExperiences[0].id} orientation={isMobile ? "horizontal" : "vertical"} className="experience-tabs-container">
              
              <FadeInSection className="experience-tabs-list-wrapper">
                <TabsList className={`experience-tabs-list ${isMobile ? "horizontal scrollbar-hide" : "vertical"}`}>
                  {sortedExperiences.map((exp) => (
                    <TabsTrigger
                      key={exp.id}
                      value={exp.id}
                      className={`experience-tabs-trigger ${isMobile ? "horizontal" : "vertical"}`}
                    >
                      {isMobile ? (
                        <div className="flex items-center gap-2">
                          <div className="experience-logo-wrapper-sm">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={20}
                              height={20}
                              className="experience-logo-sm"
                            />
                          </div>
                          <span className="font-bold text-xs whitespace-nowrap">{exp.company}</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between w-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="experience-logo-wrapper-sm">
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={24}
                                height={24}
                                className="experience-logo-sm"
                              />
                            </div>
                            <span className="font-medium text-sm">{exp.company}</span>
                          </div>
                          <div className="experience-active-indicator"></div>
                        </div>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </FadeInSection>

              <FadeInSection className="flex-1">
                {sortedExperiences.map((exp) => (
                  <TabsContent key={exp.id} value={exp.id} className="experience-tabs-content">
                    <div className="mb-3 flex items-center flex-wrap gap-2">
                      <h3 className="experience-role-title">
                        {exp.role} @{" "}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-company-link"
                        >
                          {exp.company}
                        </a>
                      </h3>
                    </div>

                    <div className="mb-4 flex items-center space-x-2">
                      <div className="experience-period-dot"></div>
                      <span className="experience-period-text">
                        {exp.period}
                      </span>
                    </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <FadeInSection
                        key={`item-${exp.id}-${itemIndex}`}
                      >
                        <li className="experience-description-item">
                          <div className="experience-description-dot"></div>
                          <span className="experience-description-text">
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

