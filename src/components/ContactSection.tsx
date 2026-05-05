"use client";

// Icon imports
import { Mail, Github, Linkedin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

// Component imports
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";

// Styles
import "@/styles/components/ContactSection.css";

import React, { useState, useEffect } from "react";

// Component definition
export function ContactSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Real-time Clock */}
      <FadeInSection>
        <div className="contact-clock-container">
          <span className="clock-label">Local Time:</span>
          <span className="clock-time">{currentTime}</span>
        </div>
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
              <Icon className="contact-icon" />
            </a>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
