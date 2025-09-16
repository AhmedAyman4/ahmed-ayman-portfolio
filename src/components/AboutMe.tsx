"use client";

import Image from "next/image";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";

// Social media links configuration
const SOCIAL_LINKS = [
  {
    href: "https://github.com/AhmedAyman4",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ahmed-alhofy/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:ahmedalhofy42@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.instagram.com/ahmedhofi_/",
    icon: Instagram,
    label: "Instagram",
  },
];

// Strong text styling for consistency
const strongClass = "text-gray-900 dark:text-white font-semibold";

const AboutMe = () => {
  return (
    <FadeInSection>
      <section id="about" className="mb-16">
        <SectionHeader
          label="Ahmed Ayman Alhofy"
          title="About"
          subtitle="Data Scientist & AI Engineer passionate about creating innovative solutions"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-2 relative z-10">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start justify-center max-w-4xl mx-auto">
            {/* Left side - Profile section */}
            <FadeInSection delay="0.2s">
              <div className="flex flex-col items-center space-y-6 px-4 sm:px-0 lg:items-start lg:pr-24">
                {/* Profile photo */}
                <div className="relative hidden sm:block">
                  <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl shadow-gray-400/20 dark:shadow-gray-900/40 transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/images/Sea.png"
                      alt="Ahmed Ayman Alhofy"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Social icons positioned below the image */}
                <FadeInSection delay="0.6s">
                  <div className="flex space-x-2 justify-center">
                    {SOCIAL_LINKS.map((link, index) => (
                      <SocialIcon
                        key={index}
                        href={link.href}
                        icon={<link.icon className="w-3 h-3" />}
                        label={link.label}
                      />
                    ))}
                  </div>
                </FadeInSection>

                {/* Name and title */}
                <FadeInSection delay="0.4s">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Ahmed Ayman Alhofy
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Data Scientist & AI Engineer
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </FadeInSection>

            {/* Right side - Content */}
            <FadeInSection delay="0.3s">
              <div className="space-y-4 px-4 sm:px-0 text-center lg:text-left lg:pl-3">
                <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {/* First paragraph */}
                  <FadeInSection delay="0.5s">
                    <p className="text-base">
                      I am a{" "}
                      <strong className={strongClass}>
                        data and machine learning scientist
                      </strong>{" "}
                      with experience in{" "}
                      <strong className={strongClass}>
                        predictive modeling
                      </strong>
                      ,{" "}
                      <strong className={strongClass}>
                        natural language processing
                      </strong>
                      , and{" "}
                      <strong className={strongClass}>
                        full-stack development
                      </strong>
                      . Skilled in Python, SQL, and modern ML frameworks, I
                      enjoy building data-driven applications that turn complex
                      problems into intuitive solutions.
                    </p>
                  </FadeInSection>

                  {/* Second paragraph */}
                  <FadeInSection delay="0.7s">
                    <p className="text-base">
                      My work spans across{" "}
                      <strong className={strongClass}>machine learning</strong>,{" "}
                      <strong className={strongClass}>NLP</strong>, and{" "}
                      <strong className={strongClass}>conversational AI</strong>
                      , including{" "}
                      <strong className={strongClass}>
                        RAG-based chatbots
                      </strong>
                      ,{" "}
                      <strong className={strongClass}>
                        recommender systems
                      </strong>
                      , and{" "}
                      <strong className={strongClass}>
                        predictive analytics
                      </strong>
                      . I also bring hands-on experience in web technologies and
                      data visualization, with projects ranging from automated
                      scrapers to customer segmentation and semantic search
                      applications.
                    </p>
                  </FadeInSection>

                  {/* Third paragraph */}
                  <FadeInSection delay="0.9s">
                    <p className="text-base">
                      I believe in{" "}
                      <strong className={strongClass}>
                        continuous learning
                      </strong>
                      , <strong className={strongClass}>collaboration</strong>,
                      and using data to create{" "}
                      <strong className={strongClass}>real-world impact</strong>
                      . Whether developing scalable ML models or building
                      user-facing applications, I aim to bridge the gap between
                      data science and practical technology solutions.
                    </p>
                  </FadeInSection>
                </div>

                {/* Signature */}
                <FadeInSection delay="1.1s">
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-center lg:justify-start">
                    <Image
                      src="/images/signature.png"
                      alt="Ahmed Ayman Signature"
                      width={160}
                      height={48}
                      className="opacity-80 dark:opacity-70 filter dark:invert"
                    />
                  </div>
                </FadeInSection>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

// Social icon component
const SocialIcon = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50"
    aria-label={label}
  >
    <div className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors duration-300">
      {icon}
    </div>
    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

export default AboutMe;
