"use client";

import { Patrick_Hand } from "next/font/google";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import social media icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

// Import GSAP and React hooks
import { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Assuming GSAP is installed or available globally

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  // Create refs for the elements to animate
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null); // Ref for the mobile menu trigger button

  useEffect(() => {
    // Ensure all referenced elements are available before attempting animations
    if (
      navbarRef.current &&
      logoRef.current &&
      desktopNavRef.current &&
      mobileMenuButtonRef.current
    ) {
      // Create a GSAP timeline for orchestrating animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animation 1: Navbar slides down and fades in
      tl.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 }, // Start state: off-screen top, invisible
        { y: 0, opacity: 1, duration: 0.8 } // End state: original position, visible
      );

      // Animation 2: Logo slides from left and fades in
      // This animation starts slightly before the end of the navbar animation
      tl.fromTo(
        logoRef.current,
        { x: -50, opacity: 0 }, // Start state: off-screen left, invisible
        { x: 0, opacity: 1, duration: 0.6 }, // End state: original position, visible
        "-=0.5" // Start 0.5 seconds before the previous animation completes
      );

      // Animation 3: Desktop navigation links and buttons (staggered fade in)
      // This is a separate animation, not part of the main timeline,
      // as it applies to multiple elements with a stagger.
      // It will run concurrently with the end of the logo animation.
      gsap.fromTo(
        Array.from(desktopNavRef.current.children), // Target all direct children of the desktop nav container
        { y: -20, opacity: 0 }, // Start state: slightly above, invisible
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" } // End state: original position, visible, with bounce
      );

      // Animation 4: Mobile menu button slides from right and fades in
      // This animation also starts slightly before the end of the logo animation
      tl.fromTo(
        mobileMenuButtonRef.current,
        { x: 50, opacity: 0 }, // Start state: off-screen right, invisible
        { x: 0, opacity: 1, duration: 0.6 }, // End state: original position, visible
        "-=0.5" // Start 0.5 seconds before the previous animation completes
      );
    }
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    // Apply ref to the main navbar div
    <div
      ref={navbarRef}
      className="navbar-container sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
    >
      <div className="container max-w-7xl mx-auto py-3 flex items-center justify-between relative">
        {/* Apply ref to the logo link */}
        <a
          ref={logoRef}
          href="#"
          className={`font-bold text-xl ${patrickHand.className} ml-2 sm:ml-2 relative group`}
        >
          <span className="relative z-10 bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-primary group-hover:via-purple-500 group-hover:to-blue-500">
            Ahmed Ayman
          </span>
          {/* Logo glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>
        {/* Apply ref to the desktop navigation container */}
        <div ref={desktopNavRef} className="hidden sm:flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group px-2 py-1 rounded-lg transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10"
            >
              <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
                {link.label}
              </span>
              {/* Animated underline */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}

          {/* Social Links Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative group px-2 py-1 rounded-lg transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10"
              >
                <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  Social
                  <ChevronDown className="h-4 w-4" />
                </span>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-gray-200/50 dark:border-gray-700/50"
            >
              <DropdownMenuItem asChild>
                <a
                  href="https://github.com/AhmedAyman4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.linkedin.com/in/ahmed-alhofy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="mailto:ahmedalhofy42@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <MdEmail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.instagram.com/ahmedhofi_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <FaInstagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.credly.com/users/ahmedayman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <AiFillSafetyCertificate className="h-4 w-4" />
                  <span>Credly</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            asChild
            size="sm"
            className="relative group bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] hover:from-[#4de9d2]/90 hover:to-[#3dd1b5]/90 text-black font-medium shadow-lg shadow-[#4de9d2]/25 hover:shadow-xl hover:shadow-[#4de9d2]/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            <a
              href="/Ahmed_Ayman_Alhofy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2"
            >
              <span>Resume</span>
              {/* Download icon effect */}
              <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </a>
          </Button>
          <div className="relative group">
            <ModeToggle />
            {/* Glow effect for mode toggle */}
            <div className="absolute inset-0 bg-primary/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
        {/* Mobile menu button */}
        <Sheet>
          {/* Apply ref to the mobile menu trigger button */}
          <SheetTrigger asChild className="sm:hidden">
            <Button
              ref={mobileMenuButtonRef}
              variant="ghost"
              size="icon"
              className="relative group bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300" />
              <span className="sr-only">Open menu</span>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="sm:hidden p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-l border-gray-200/50 dark:border-gray-700/50"
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent text-xl font-bold">
                Menu
              </SheetTitle>
              <SheetDescription
                className={`${patrickHand.className} text-left text-gray-600 dark:text-gray-300`}
              >
                Navigate through the website.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-3 py-4">
              {links.map((link, index) => (
                <Button
                  variant="ghost"
                  asChild
                  key={link.href}
                  className="justify-start h-12 group bg-gray-100/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a href={link.href} className="relative w-full">
                    <span className="relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                      {link.label}
                    </span>
                    {/* Animated indicator */}
                    <div className="absolute left-0 top-1/2 w-0 h-6 bg-primary/20 group-hover:w-1 transition-all duration-300 -translate-y-1/2 rounded-r" />
                  </a>
                </Button>
              ))}
              <Button
                asChild
                size="sm"
                className="h-12 mt-4 bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] hover:from-[#4de9d2]/90 hover:to-[#3dd1b5]/90 text-black font-medium shadow-lg shadow-[#4de9d2]/25 hover:shadow-xl hover:shadow-[#4de9d2]/30 transition-all duration-300 hover:scale-105"
              >
                <a
                  href="/Ahmed_Ayman_Alhofy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Resume</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </Button>

              {/* Social Media Links */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">
                  Connect with me
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/AhmedAyman4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmed-alhofy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:ahmedalhofy42@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label="Email"
                  >
                    <MdEmail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ahmedhofi_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.credly.com/users/ahmedayman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label="Credly"
                  >
                    <AiFillSafetyCertificate className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="relative group">
                  <ModeToggle />
                  {/* Glow effect for mobile mode toggle */}
                  <div className="absolute inset-0 bg-primary/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes navFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-1px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .navbar-container:hover {
          animation: navFloat 3s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        /* Staggered animation for mobile menu items */
        .mobile-menu-item {
          animation: slideInRight 0.3s ease-out forwards;
          opacity: 0;
          transform: translateX(20px);
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
