"use client";

// Icon imports
import { Mail, Github, Linkedin } from "lucide-react";

// Component imports
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";

// Styles
import "@/styles/components/ContactSection.css";

// Component definition
export function ContactSection() {
  // Contact links data
  const contactLinks = [
    {
      href: "mailto:ahmedalhofy42@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/ahmed-alhofy/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/AhmedAyman4",
      icon: Github,
      label: "GitHub",
    },
  ];

  // Render
  return (
    <div id="contact" className="text-center">
      {/* Section Heading */}
      <SectionHeader label="Get In Touch" title="Contact" className="mb-4" />

      {/* Description */}
      <FadeInSection delay="0.2s">
        <p className="dark:text-gray-300 text-gray-600 mb-4">
          I'm eager to join a data-driven team where I can apply my passion for
          AI, machine learning, and problem-solving to create meaningful impact.
          <br /> Got a project in mind or looking to collaborate? Let's connect!
        </p>
      </FadeInSection>

      {/* Email Display */}
      <FadeInSection delay="0.4s">
        <p className="dark:text-white text-black mb-4">
          ahmedalhofy42@gmail.com
        </p>
      </FadeInSection>

      {/* Social Links */}
      <FadeInSection delay="0.6s">
        <div className="flex justify-center items-center space-x-4">
          {contactLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
