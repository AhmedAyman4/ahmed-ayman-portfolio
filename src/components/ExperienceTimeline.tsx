// components/ExperienceTimeline.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: "item-1",
      company: "DEPI",
      role: "Data Scientist",
      period: "2024 - 2025",
      description: [
        "Analyze data using Python, SQL, and analytics tools to identify trends, opportunities, and business insights.",
        "Build and deploy ML models with Python, Scikit-learn, and MLflow, leveraging AI and prompt engineering for integration.",
      ],
    },
    {
      id: "item-2",
      company: "CIB",
      role: "Intern",
      period: "2024 - 2024",
      description: [
        "Gained data and financial literacy expertise, entrepreneurship, and teamwork to enhance problem-solving, decision-making, and business success.",
      ],
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div id="experience" ref={containerRef}>
      <h2 className="text-3xl font-semibold text-primary mb-8 text-center dark:text-[hsl(215,100%,90%)]">
        Experience
      </h2>

      <Accordion type="single" collapsible>
        {experiences.map((exp) => (
          <AccordionItem
            key={exp.id}
            value={exp.id}
            className="timeline-item opacity-0"
          >
            <AccordionTrigger className="hover:no-underline">
              <span className="font-semibold">{exp.company}</span> - {exp.role}{" "}
              ({exp.period})
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
