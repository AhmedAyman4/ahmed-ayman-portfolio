"use client";

// Icon imports
import { Mail, Linkedin } from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaInstagram } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

// Component imports
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";

// Styles
import "@/styles/components/ContactSection.css";

import React from "react";

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
      icon: GitHubIcon,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/ahmedhofi_/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.credly.com/users/ahmedayman",
      icon: AiFillSafetyCertificate,
      label: "Credly",
    },
  ];

  // Render
  return (
    <div id="contact" className="contact-section">
      {/* Section Heading */}
      <SectionHeader label="Get In Touch" title="Contact" className="mb-4" />

      {/* Description */}
      <FadeInSection>
        <p className="contact-description">
          I'm eager to join a data-driven team where I can apply my passion for
          AI, machine learning, and problem-solving to create meaningful impact.
          <br /> Got a project in mind or looking to collaborate? Let's connect!
        </p>
      </FadeInSection>

      {/* Email Display */}
      <FadeInSection>
        <p className="contact-email">
          ahmedalhofy42@gmail.com
        </p>
      </FadeInSection>

      {/* Social Links */}
      <FadeInSection>
        <div className="contact-icons">
          {contactLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label={label}
            >
              <Icon 
                className="contact-icon" 
                {...(label === "GitHub" ? { sx: { fontSize: '1.25rem', transform: 'translateY(-1px)' } } : {})} 
              />
            </a>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
