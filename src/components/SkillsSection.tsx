import React from "react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";

// Skills data array
const skills = [
  "Python",
  "NumPy",
  "Pandas",
  "SQL",
  "Scikit-learn",
  "Tableau",
  "Power BI",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
];

export function SkillsSection() {
  return (
    <div id="skills">
      <SectionHeader
        label="Technical Expertise"
        title="Skills"
        subtitle="Technologies and tools I use to bring ideas to life"
      />
      <FadeInSection>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <FadeInSection key={skill} delay={`${index * 0.1}s`}>
              <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">
                {skill}
              </Badge>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
