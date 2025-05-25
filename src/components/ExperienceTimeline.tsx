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
      period: "Oct 2024 - May 2025",
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
      description: [
        "Gained data and financial literacy expertise, entrepreneurship, and teamwork to enhance problem-solving, decision-making, and business success.",
      ],
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".timeline-item");

    // Set initial state for animation
    gsap.set(items, { opacity: 0, y: 50 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      id="experience"
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-[#4de9d2]/10 to-purple-500/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-[#4de9d2]/5 rounded-full blur-2xl animate-float-slower"></div>

        {/* Vertical timeline line */}
        <div className="absolute left-8 top-32 bottom-0 w-px bg-gradient-to-b from-[#4de9d2]/50 via-purple-500/30 to-transparent hidden md:block"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 dark:text-[hsl(215,100%,90%)]">
          Experience
        </h2>
      </div>

      {/* Timeline container with glassmorphism */}
      <div className="relative max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-6">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={exp.id}
              value={exp.id}
              className="timeline-item relative group"
            >
              {/* Timeline dot for desktop */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-[#4de9d2] to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg shadow-[#4de9d2]/25 hidden md:block group-hover:scale-125 transition-transform duration-300 z-20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4de9d2] to-purple-500 rounded-full animate-ping opacity-30"></div>
              </div>

              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4de9d2]/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10"></div>

              <AccordionTrigger
                className="hover:no-underline p-3 md:p-4 md:ml-12 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-t-2xl border border-white/20 dark:border-white/10 border-b-0 group-hover:border-[#4de9d2]/30 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/20 group-hover:bg-white/5 dark:group-hover:bg-white/5 relative z-10 cursor-pointer"
                onClick={() =>
                  console.log(`Clicked accordion for ${exp.company}`)
                }
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left space-y-1 md:space-y-0">
                  {/* Company and role */}
                  <div className="flex flex-col space-y-0.5 md:space-y-1">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#4de9d2] to-purple-500 bg-clip-text text-transparent">
                        {exp.company}
                      </span>
                      {/* Role badge */}
                      <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-[#4de9d2]/20 to-purple-500/20 text-xs md:text-sm font-medium rounded-full border border-[#4de9d2]/30 text-gray-700 dark:text-gray-300">
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  {/* Period with enhanced styling */}
                  <div className="flex items-center space-x-1.5 md:space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#4de9d2] rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-3 pb-3 md:px-4 md:pb-4 md:ml-12 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-b-2xl border border-white/20 dark:border-white/10 border-t-0 group-hover:border-[#4de9d2]/30 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/20">
                {/* Enhanced description list */}
                <div className="bg-white/5 dark:bg-white/5 rounded-xl p-2 md:p-3 border border-white/10 dark:border-white/10 mt-2 md:mt-3">
                  <ul className="space-y-1.5 md:space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-2 md:space-x-3 group/item"
                      >
                        {/* Custom bullet point */}
                        <div className="flex-shrink-0 mt-1 md:mt-1.5">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#4de9d2] to-purple-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        </div>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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

        /* Custom scrollbar for content */
        .timeline-item ::-webkit-scrollbar {
          width: 4px;
        }

        .timeline-item ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .timeline-item ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #4de9d2, #3dd1b5);
          border-radius: 2px;
        }

        .timeline-item ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #3dd1b5, #4de9d2);
        }
      `}</style>
    </div>
  );
}
