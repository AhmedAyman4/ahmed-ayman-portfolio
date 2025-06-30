// HeroSection.jsx
"use client";

// React imports
import { useState, useEffect } from "react";

// Next.js imports
import { Patrick_Hand } from "next/font/google";
import Image from "next/image";

// Icon imports
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdOutlineVerified } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";

// Component imports
import { TypingEffect } from "@/components/typing-effect";
import FractalTree from "@/components/FractalTree";

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
    <section id="hero" className="text-center mb-24 fade-in-section relative">
      <div className="relative z-10">
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
                className="rounded-full shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Pulse effect overlay - appears only on hover */}
          <div className="absolute inset-[-6px] rounded-full border-2 border-[#4de9d2] opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-300"></div>
        </div>

        {/* Title Section */}
        <h1
          className={`flex items-center justify-center text-6xl font-light ${patrickHand.className}`}
        >
          <span className="dark:text-white text-black">Hi,</span>
          {startTyping && (
            <TypingEffect
              words={[
                {
                  text: "",
                  color: "white",
                },
                {
                  text: "Ahmed",
                  style: {
                    marginLeft: "0.1em",
                    color: "var(--ahmed-text-color)", // CSS variable for theme-aware color
                  },
                },
                {
                  text: "here.",
                  color: "var(--color-black-color-if-white)",
                  style: { marginLeft: "0.1em" }, // Custom style for tighter spacing
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
        <p className="mt-6 dark:text-gray-400 text-black max-w-lg mx-auto">
          Aspiring Data & Machine Learning Scientist and Information Systems
          student at the Faculty of Computers & AI, University of Sadat City.
          Passionate about solving real-world problems with data and exploring
          AI.
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
          className="mt-6 inline-flex items-center px-6 py-3 border-2 border-[#4de9d2] text-black font-medium rounded-full shadow-sm bg-[#b3f2eb] hover:bg-[#4de9d2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4de9d2]"
        >
          <MdEmail className="mr-3 h-5 w-5 text-black" aria-hidden="true" />
          Say hi!
        </a>
      </div>
    </section>
  );
}
