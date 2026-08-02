// components/ExperienceTimeline.tsx
"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/components/ExperienceTimeline.css";

import { experiences, educations } from "@/lib/experienceData";

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

const sortedEducations = [...educations].sort((a, b) => 
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
          <Tabs defaultValue="work" className="experience-main-tabs">
            <div className="experience-main-tabs-list-container">
              <TabsList className="experience-main-tabs-list">
                <TabsTrigger value="work" className="experience-main-tab-trigger">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="experience-main-tab-trigger">
                  Education
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="experience-card">
              <TabsContent value="work" className="experience-main-tabs-content">
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
              </TabsContent>

              <TabsContent value="education" className="experience-main-tabs-content">
                <Tabs defaultValue={sortedEducations[0].id} orientation={isMobile ? "horizontal" : "vertical"} className="experience-tabs-container">
                  
                  <FadeInSection className="experience-tabs-list-wrapper">
                    <TabsList className={`experience-tabs-list ${isMobile ? "horizontal scrollbar-hide" : "vertical"}`}>
                      {sortedEducations.map((edu) => (
                        <TabsTrigger
                          key={edu.id}
                          value={edu.id}
                          className={`experience-tabs-trigger ${isMobile ? "horizontal" : "vertical"}`}
                        >
                          {isMobile ? (
                            <div className="flex items-center gap-2">
                              <div className="experience-logo-wrapper-sm">
                                {edu.logo ? (
                                  <Image
                                    src={edu.logo}
                                    alt={`${edu.institution} logo`}
                                    width={20}
                                    height={20}
                                    className="experience-logo-sm"
                                  />
                                ) : (
                                  <GraduationCap className="h-4 w-4 text-teal-600 dark:text-[#4de9d2]" />
                                )}
                              </div>
                              <span className="font-bold text-xs whitespace-nowrap">{edu.institution}</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between w-full gap-3">
                              <div className="flex items-center gap-3">
                                <div className="experience-logo-wrapper-sm">
                                  {edu.logo ? (
                                    <Image
                                      src={edu.logo}
                                      alt={`${edu.institution} logo`}
                                      width={24}
                                      height={24}
                                      className="experience-logo-sm"
                                    />
                                  ) : (
                                    <GraduationCap className="h-5 w-5 text-teal-600 dark:text-[#4de9d2]" />
                                  )}
                                </div>
                                <span className="font-medium text-sm">{edu.institution}</span>
                              </div>
                              <div className="experience-active-indicator"></div>
                            </div>
                          )}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </FadeInSection>

                  <FadeInSection className="flex-1">
                    {sortedEducations.map((edu) => (
                      <TabsContent key={edu.id} value={edu.id} className="experience-tabs-content">
                        <div className="mb-3 flex items-center flex-wrap gap-2">
                          <h3 className="experience-role-title">
                            {edu.degree} @{" "}
                            {edu.link ? (
                              <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="experience-company-link"
                              >
                                {edu.institution}
                              </a>
                            ) : (
                              <span className="experience-company-link">
                                {edu.institution}
                              </span>
                            )}
                          </h3>
                        </div>

                        <div className="mb-4 flex items-center space-x-2">
                          <div className="experience-period-dot"></div>
                          <span className="experience-period-text">
                            {edu.period}
                          </span>
                        </div>

                        <ul className="space-y-3">
                          {edu.description.map((item, itemIndex) => (
                            <FadeInSection
                              key={`item-${edu.id}-${itemIndex}`}
                            >
                              <li className="experience-description-item">
                                <div className="experience-description-dot"></div>
                                <span className="experience-description-text">
                                  {item}
                                </span>
                              </li>
                            </FadeInSection>
                          ))}
                          {edu.courses && edu.courses.length > 0 && (
                            <FadeInSection key={`item-${edu.id}-courses`}>
                              <li className="experience-description-item">
                                <div className="experience-description-dot"></div>
                                <span className="experience-description-text">
                                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Relevant Courses:
                                  </span>{" "}
                                  {edu.courses.join(", ")}
                                </span>
                              </li>
                            </FadeInSection>
                          )}
                        </ul>
                      </TabsContent>
                    ))}
                  </FadeInSection>
                  
                </Tabs>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

