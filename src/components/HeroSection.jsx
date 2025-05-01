// HeroSection.jsx
"use client";

import { Patrick_Hand } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Font Awesome icons
import { MdEmail, MdOutlineVerified } from "react-icons/md"; // Material Design icons
import { PiCertificateDuotone } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TypingEffect } from "@/components/typing-effect";
import FractalTree from "@/components/FractalTree";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

export function HeroSection({ profileImage }) {
  return (
    <section id="hero" className="text-center mb-16 fade-in-section relative">
      <div className="relative z-10">
        <Image
          src={profileImage}
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 shadow-lg"
        />
        {/* Title */}
        <h1
          className={`flex items-center justify-center text-6xl font-light ${patrickHand.className}`}
        >
          <span className="dark:text-white text-black">Hi,</span>
          <TypingEffect
            words={[
              {
                text: "",
                color: "white",
              },
              {
                text: "Ahmed",
                color: "#4de9d2",
                style: { marginLeft: "0.1em" }, // Custom style for tighter spacing
              },
              {
                text: "here.",
                color: "var(--color-black-color-if-white)",
                style: { marginLeft: "0.1em" }, // Custom style for tighter spacing
              },
            ]}
            typingSpeed={130}
          />
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

        {/* FractalTree */}
        <div className="mt-0 flex justify-center">
          <div className="w-32 h-32">
            <FractalTree />
          </div>
          {/* FractalTree */}
        </div>
        {/* Say Hi Button */}
        <a
          href="mailto:ahmedalhofy42@gmail.com"
          className="mt-6 inline-flex items-center px-6 py-3 border-2 border-[#4de9d2] text-black font-medium rounded-full shadow-sm bg-[#b3f2eb] hover:bg-[#4de9d2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4de9d2]"
        >
          <MdEmail className="mr-3 h-5 w-5 text-black" aria-hidden="true" />
          Say hi!
        </a>

        <div className="mt-6 flex justify-center space-x-4">
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/AhmedAyman4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-alhofy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            {/* <a
              href="mailto:ahmedalhofy42@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label="Email"
            >
              <MdEmail className="h-6 w-6" />
            </a> */}
            {/* <a
              href="https://www.instagram.com/ahmedhofi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a> */}
            <a
              href="https://www.credly.com/users/ahmedayman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label="Credly"
            >
              <AiFillSafetyCertificate className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
