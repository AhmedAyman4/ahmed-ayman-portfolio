import React from "react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import "@/styles/components/SkillsSection.css";
import { 
  SiPython, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, 
  SiPytorch, SiDocker, SiGit, SiGithub, 
  SiNextdotjs, SiHtml5, SiCss3, SiJavascript, 
  SiTypescript, SiPostgresql, SiLangchain, SiMysql, SiApachespark
} from "react-icons/si";
import { LucideIcon, BarChart, Brain, Database, Cpu, Globe, Layout, Code2 } from "lucide-react";

interface Skill {
  name: string;
  icon: any; // Using any for simplicity with mixed icon libraries
}

const skills: Skill[] = [
  { name: "SQL", icon: Database },
  { name: "Python", icon: SiPython },
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "Matplotlib", icon: BarChart },
  { name: "Seaborn", icon: BarChart },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "LangChain", icon: SiLangchain },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Tableau", icon: BarChart },
  { name: "Power BI", icon: BarChart },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
];

export function SkillsSection() {
  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));
  
  // Triple the arrays for seamless looping
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <div id="skills" className="skills-container">
      <FadeInSection>
        <SectionHeader label="Technical Expertise" title="Skills" />
      </FadeInSection>
      
      <div className="skills-marquee-group mt-12">
        {/* First Row: Moving Left */}
        <FadeInSection>
          <div className="skills-marquee-wrapper">
            <div className="skills-marquee-content scroll-left">
              {duplicatedRow1.map((skill, index) => (
                <Badge key={`${skill.name}-r1-${index}`} className="skills-badge">
                  <skill.icon className="skill-icon" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Second Row: Moving Right */}
        <FadeInSection>
          <div className="skills-marquee-wrapper">
            <div className="skills-marquee-content scroll-right">
              {duplicatedRow2.map((skill, index) => (
                <Badge key={`${skill.name}-r2-${index}`} className="skills-badge">
                  <skill.icon className="skill-icon" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}


