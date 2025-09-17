"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";

const strongClass = "text-gray-900 dark:text-white font-semibold";

const AboutMe = () => (
  <FadeInSection>
    <section id="about" className="mb-16">
      <SectionHeader
        label="Ahmed Ayman Alhofy"
        title="About"
        subtitle="Data Scientist & AI Engineer passionate about creating innovative solutions"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-2 relative z-10">
        <div className="text-center space-y-6">
          <FadeInSection delay="0.3s">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
              I am a{" "}
              <strong className={strongClass}>
                data and machine learning scientist
              </strong>{" "}
              with experience in{" "}
              <strong className={strongClass}>predictive modeling</strong>,{" "}
              <strong className={strongClass}>
                natural language processing
              </strong>
              , and{" "}
              <strong className={strongClass}>full-stack development</strong>. I
              enjoy building data-driven applications that turn complex problems
              into intuitive solutions.
            </p>
          </FadeInSection>

          <FadeInSection delay="0.5s">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 dark:bg-[#4de9d2] dark:hover:bg-[#4de9d2]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-[#4de9d2]/25"
            >
              <span>Learn More About Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default AboutMe;
