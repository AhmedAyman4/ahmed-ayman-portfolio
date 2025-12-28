"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Github, Linkedin, Instagram, ArrowLeft } from "lucide-react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Patrick_Hand } from "next/font/google";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/components/AboutMe.css";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

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
  {
    href: "https://www.credly.com/users/ahmedayman",
    icon: AiFillSafetyCertificate,
    label: "Credly",
  },
];

export default function AboutPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/#experience", label: "Experience" },
          { href: "/#projects", label: "Projects" },
          { href: "/#skills", label: "Skills" },
          { href: "/#contact", label: "Contact" },
        ]}
      />

      <main className="container mx-auto py-6 flex-grow px-4 md:px-8 lg:px-24 xl:px-28">
        {/* Back Button */}
        <FadeInSection>
          <div className="max-w-4xl mx-auto mb-8 pt-4">
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-[#4de9d2] dark:hover:text-[#4de9d2] transition-all duration-300 font-medium cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>
          </div>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <SectionHeader
              label="Ahmed Ayman Alhofy"
              title="About"
              subtitle="Data Scientist & AI Engineer passionate about creating innovative solutions"
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Profile Section */}
                <FadeInSection delay="0.1s">
                  <div className="flex flex-col items-center space-y-6">
                    {/* Profile Photo with gradient border like HeroSection */}
                    <div className="profile-container relative mx-auto w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] group">
                      {/* Static gradient border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4de9d2] via-blue-500 to-purple-600 p-[3px]">
                        <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/images/IMG_1.jpg"
                            alt="Ahmed Ayman Alhofy"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                            priority
                          />
                        </div>
                      </div>
                      {/* Pulse effect overlay */}
                      <div className="about-pulse-overlay"></div>
                    </div>

                    {/* Name and Title */}
                    <FadeInSection delay="0.2s">
                      <div className="text-center">
                        <h4
                          className={`text-2xl font-semibold text-gray-900 dark:text-white mb-1 ${patrickHand.className}`}
                        >
                          Ahmed Ayman Alhofy
                        </h4>
                        <p className="text-[#4de9d2] font-medium">
                          Data Scientist & AI Engineer
                        </p>
                      </div>
                    </FadeInSection>

                    {/* Social Links */}
                    <FadeInSection delay="0.3s">
                      <div className="flex space-x-4 justify-center">
                        {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (href.startsWith("mailto:")) {
                                e.preventDefault();
                                window.location.href = href;
                              }
                            }}
                            className="social-icon-link group cursor-pointer"
                            aria-label={label}
                          >
                            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#4de9d2] transition-all duration-300 group-hover:scale-110" />
                          </a>
                        ))}
                      </div>
                    </FadeInSection>

                    {/* Contact Button like HeroSection */}
                    <FadeInSection delay="0.4s">
                      <a
                        href="mailto:ahmedalhofy42@gmail.com"
                        className="contact-button mt-2"
                      >
                        <Mail className="contact-button-icon" />
                        Get in Touch
                      </a>
                    </FadeInSection>
                  </div>
                </FadeInSection>

                {/* Content Section */}
                <FadeInSection delay="0.15s">
                  <div className="space-y-4 text-center lg:text-left">
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
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
                      <div className="pt-6 border-t border-gray-200 dark:border-gray-700/50 flex justify-center lg:justify-start">
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
      </main>

      <Footer />
    </div>
  );
}
