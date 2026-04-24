import React from "react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import "@/styles/components/SkillsSection.css";

const skills = [
  "SQL", "Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", 
  "Scikit-learn", "LangChain", "TensorFlow", "PyTorch", "Docker", 
  "Git", "GitHub", "Tableau", "Power BI", "Next.js", "HTML", 
  "CSS", "JavaScript", "TypeScript",
];

export function SkillsSection() {
  return (
    <div id="skills" className="skills-container">
      <FadeInSection delay="0.1s">
        <SectionHeader label="Technical Expertise" title="Skills" />
      </FadeInSection>
      
        <div className="skills-badge-container">
          {skills.map((skill, index) => (
            <FadeInSection key={skill} delay={`${index * 0.1}s`}>
              <Badge className="skills-badge">
                {skill}
              </Badge>
            </FadeInSection>
          ))}
        </div>
    </div>
  );
}


