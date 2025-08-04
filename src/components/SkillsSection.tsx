import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge"; // Reverted to original import
import { SectionHeader } from "@/components/SectionHeader";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const skillsRef = useRef(null); // Reference to the main skills div
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]); // Reference to store all badge elements

  useEffect(() => {
    const skillsElement = skillsRef.current;
    const badgeElements = badgesRef.current;

    if (skillsElement && badgeElements.length > 0) {
      // Animation for the badges with a stagger effect
      gsap.fromTo(
        badgeElements,
        { opacity: 0, scale: 0.8 }, // Start state: invisible, slightly smaller
        {
          opacity: 1,
          scale: 1, // End state: visible, original size
          duration: 0.5,
          ease: "back.out(1.7)", // A nice bouncy ease
          stagger: 0.1, // Stagger the animation of each badge by 0.1 seconds
          scrollTrigger: {
            trigger: skillsElement, // Trigger when the skills section enters the viewport
            start: "top 70%", // Start animation when top of skills section is 70% from top of viewport
            toggleActions: "play none none none", // Play once when entering
          },
        }
      );
    }
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    // Reverted to original div structure and classes
    <div id="skills" ref={skillsRef}>
      <SectionHeader
        label="Technical Expertise"
        title="Skills"
        subtitle="Technologies and tools I use to bring ideas to life"
      />
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge
            key={skill}
            ref={(el) => {
              badgesRef.current[index] = el;
            }}
            className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
