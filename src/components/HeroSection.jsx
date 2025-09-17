// HeroSection.jsx
"use client";

// React imports
import { useState, useEffect } from "react";

// Next.js imports
import { Patrick_Hand } from "next/font/google";
import Image from "next/image";

// Icon imports
import { MdEmail } from "react-icons/md";

// Component imports
import { TypingEffect } from "@/components/typing-effect";
import FractalTree from "@/components/FractalTree";
import FadeInSection from "@/components/FadeInSection";

// Styles
import "@/styles/components/HeroSection.css";

// Font configuration
const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

// Component definition
export function HeroSection({ profileImage, introComplete = false }) {
  // State management
  const [startTyping, setStartTyping] = useState(false);

  // Effects
  useEffect(() => {
    if (introComplete) {
      // Start typing immediately when intro is complete
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 300); // Small delay for smooth transition

      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  // Render
  return (
    <section id="hero" className="text-center mb-12 relative">
      <FadeInSection className="relative z-10">
        {/* Profile Image Section */}
        <div className="profile-container relative mx-auto mb-4 w-[150px] h-[150px] group">
          {/* Static gradient border - exact fit around image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4de9d2] via-blue-500 to-purple-600 p-[3px]">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              {/* Profile image with hover animation */}
              <Image
                src={profileImage}
                alt="Profile"
                width={144}
                height={144}
                className="profile-image rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Pulse effect overlay - appears only on hover */}
          <div className="profile-pulse-overlay"></div>
        </div>

        {/* Title Section */}
        <h1
          className={`flex items-center justify-center text-6xl font-light ${patrickHand.className}`}
        >
          <span className="dark:text-white text-black">Hi,</span>
          {startTyping && (
            <TypingEffect
              words={[
                { text: "", color: "white" },
                {
                  text: "Ahmed",
                  className: "typing-word-ahmed",
                },
                {
                  text: "here.",
                  className: "typing-word-here",
                },
              ]}
              typingSpeed={130}
            />
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-4xl font-light dark:text-gray-300 text-black">
          I create stuff sometimes.
        </p>

        {/* Description */}
        <p className="mt-2 dark:text-gray-400 text-black max-w-lg mx-auto">
          I'm an aspiring Data & ML Scientist, currently studying IS at the
          Faculty of Computers & AI, USC. Passionate about using data to solve
          everyday challenges and applying AI to create practical, impactful
          solutions.
        </p>

        {/* FractalTree Component */}
        <div className="mt-0 flex justify-center">
          <div className="w-32 h-32">
            <FractalTree />
          </div>
        </div>

        {/* Contact Button */}
        <a
          href="mailto:ahmedalhofy42@gmail.com"
          className="contact-button mt-6"
        >
          <MdEmail className="contact-button-icon" />
          Say hi!
        </a>
      </FadeInSection>
    </section>
  );
}
