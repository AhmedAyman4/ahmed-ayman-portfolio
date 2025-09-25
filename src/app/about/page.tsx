"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Github, Linkedin, Instagram, ArrowLeft } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";
import "@/styles/components/AboutMe.css";

const SOCIAL_LINKS = [
  { href: "https://github.com/AhmedAyman4", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ahmed-alhofy/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:ahmedalhofy42@gmail.com", icon: Mail, label: "Email" },
  {
    href: "https://www.instagram.com/ahmedhofi_/",
    icon: Instagram,
    label: "Instagram",
  },
];

export default function AboutPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-2 mb-8">
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] transition-colors duration-300 font-medium cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <FadeInSection>
        <section className="mb-16">
          <SectionHeader
            label="Ahmed Ayman Alhofy"
            title="About"
            subtitle="Data Scientist & AI Engineer passionate about creating innovative solutions"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-2 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              {/* Profile Section */}
              <FadeInSection delay="0.1s">
                <div className="flex flex-col items-center space-y-6">
                  {/* Profile Photo */}
                  <div className="relative group">
                    <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-2xl shadow-gray-400/20 dark:shadow-gray-900/40 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src="/images/IMG_1.jpg"
                        alt="Ahmed Ayman Alhofy"
                        width={288}
                        height={288}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Name and Title */}
                  <FadeInSection delay="0.2s">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Ahmed Ayman Alhofy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Data Scientist & AI Engineer
                      </p>
                    </div>
                  </FadeInSection>

                  {/* Social Links */}
                  <FadeInSection delay="0.3s">
                    <div className="flex space-x-6 justify-center">
                      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            console.log(`Clicked ${label} link:`, href);
                            // Ensure the link opens properly
                            if (href.startsWith("mailto:")) {
                              e.preventDefault();
                              window.location.href = href;
                            }
                          }}
                          className="group cursor-pointer"
                          aria-label={label}
                        >
                          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] transition-colors duration-300 hover:scale-110" />
                        </a>
                      ))}
                    </div>
                  </FadeInSection>
                </div>
              </FadeInSection>

              {/* Content Section */}
              <FadeInSection delay="0.15s">
                <div className="space-y-4 px-4 sm:px-0 text-center lg:text-left">
                  <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                    <FadeInSection delay="0.25s">
                      <p>
                        I am a data and machine learning scientist with
                        experience in predictive modeling, natural language
                        processing, and full-stack development. Skilled in
                        Python, SQL, and modern ML frameworks, I enjoy building
                        data-driven applications that turn complex problems into
                        intuitive solutions.
                      </p>
                    </FadeInSection>

                    <FadeInSection delay="0.35s">
                      <p>
                        My work spans across machine learning, NLP, and
                        conversational AI, including RAG-based chatbots,
                        recommender systems, and predictive analytics. I also
                        bring hands-on experience in web technologies and data
                        visualization, with projects ranging from automated
                        scrapers to customer segmentation and semantic search
                        applications.
                      </p>
                    </FadeInSection>

                    <FadeInSection delay="0.45s">
                      <p>
                        I believe in continuous learning, collaboration, and
                        using data to create real-world impact. Whether
                        developing scalable ML models or building user-facing
                        applications, I aim to bridge the gap between data
                        science and practical technology solutions.
                      </p>
                    </FadeInSection>
                  </div>

                  {/* Signature */}
                  <FadeInSection delay="0.55s">
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
    </div>
  );
}
