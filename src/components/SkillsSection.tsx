import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge"; // Reverted to original import

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
  const titleRef = useRef(null); // Reference to the h2 title
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]); // Reference to store all badge elements

  useEffect(() => {
    const skillsElement = skillsRef.current;
    const titleElement = titleRef.current;
    const badgeElements = badgesRef.current;

    if (skillsElement && titleElement && badgeElements.length > 0) {
      // Animation for the title
      gsap.fromTo(
        titleElement,
        { opacity: 0, y: 50 }, // Start state: invisible, moved down
        {
          opacity: 1,
          y: 0, // End state: visible, original position
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsElement, // Trigger when the skills section enters the viewport
            start: "top 80%", // Start animation when top of skills section is 80% from top of viewport
            toggleActions: "play none none none", // Play once when entering
          },
        }
      );

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
      <h2
        ref={titleRef}
        className="text-3xl font-semibold text-primary mb-6 text-center dark:text-[hsl(215,100%,90%)]"
      >
        Skills
      </h2>
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
