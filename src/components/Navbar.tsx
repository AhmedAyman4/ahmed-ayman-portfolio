"use client";

import { Patrick_Hand } from "next/font/google";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileModeToggle } from "@/components/mobile-mode-toggle";
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
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null); // Ref for the mobile menu trigger button  // Function to handle smooth scrolling without changing URL
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href === "#") {
      // Scroll to top for Home
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to section for other links
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

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
      className="navbar-container sticky top-0 z-50 w-full py-2"
    >
      <div className="container max-w-5xl mx-auto px-3">
        {/* Pill-shaped navigation container */}
        <div className="bg-background/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/40 rounded-full px-4 py-2 shadow-md shadow-black/5 dark:shadow-black/20 flex items-center justify-between relative overflow-hidden">
          {" "}
          {/* Gradient overlay for extra visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent opacity-40" />
          {/* Left section - Logo */}
          <div className="flex items-center">
            {" "}
            {/* Apply ref to the logo link */}{" "}
            <a
              ref={logoRef}
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className={`font-bold text-xl ${patrickHand.className} relative group`}
            >
              <span className="relative z-10 bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-primary group-hover:via-purple-500 group-hover:to-blue-500">
                Ahmed Ayman
              </span>
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>{" "}
          {/* Center section - Desktop Navigation */}
          <div ref={desktopNavRef} className="hidden md:flex items-center">
            {/* Navigation pills container */}{" "}
            <div className="flex items-center gap-0.5 bg-gray-100/40 dark:bg-gray-800/40 rounded-full px-1.5 py-1.5">
              {" "}
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative group px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10"
                >
                  {" "}
                  <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors duration-300">
                    {link.label}
                  </span>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-purple-500/8 dark:from-[#4de9d2]/15 dark:to-[#3dd1b5]/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}{" "}
              {/* Social Links Dropdown in pill */}
              <DropdownMenu>
                {" "}
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative group px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10 h-auto overflow-hidden"
                  >
                    {" "}
                    <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors duration-300 flex items-center gap-1">
                      Social
                      <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-data-[state=open]:rotate-180" />
                    </span>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-purple-500/8 dark:from-[#4de9d2]/15 dark:to-[#3dd1b5]/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </Button>
                </DropdownMenuTrigger>{" "}
                <DropdownMenuContent
                  align="center"
                  className="w-40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/20 p-1.5 animate-in slide-in-from-top-2 duration-200"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 px-2.5 py-1.5 font-medium tracking-wide uppercase">
                    Connect with me
                  </div>{" "}
                  <DropdownMenuItem asChild>
                    <a
                      href="https://github.com/AhmedAyman4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-lg group/item relative overflow-hidden"
                    >
                      {" "}
                      <div className="relative z-10 flex items-center gap-2.5 w-full">
                        <FaGithub className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
                        <span className="font-medium">GitHub</span>
                        <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500" />
                    </a>
                  </DropdownMenuItem>{" "}
                  <DropdownMenuItem asChild>
                    <a
                      href="https://www.linkedin.com/in/ahmed-alhofy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-lg group/item relative overflow-hidden"
                    >
                      <div className="relative z-10 flex items-center gap-2.5 w-full">
                        <FaLinkedin className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
                        <span className="font-medium">LinkedIn</span>
                        <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500" />
                    </a>
                  </DropdownMenuItem>{" "}
                  <DropdownMenuItem asChild>
                    <a
                      href="mailto:ahmedalhofy42@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-lg group/item relative overflow-hidden"
                    >
                      <div className="relative z-10 flex items-center gap-2.5 w-full">
                        <MdEmail className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
                        <span className="font-medium">Email</span>
                        <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500" />
                    </a>
                  </DropdownMenuItem>{" "}
                  <DropdownMenuItem asChild>
                    <a
                      href="https://www.instagram.com/ahmedhofi_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-lg group/item relative overflow-hidden"
                    >
                      <div className="relative z-10 flex items-center gap-2.5 w-full">
                        <FaInstagram className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
                        <span className="font-medium">Instagram</span>
                        <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500" />
                    </a>
                  </DropdownMenuItem>{" "}
                  <DropdownMenuItem asChild>
                    <a
                      href="https://www.credly.com/users/ahmedayman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-lg group/item relative overflow-hidden"
                    >
                      <div className="relative z-10 flex items-center gap-2.5 w-full">
                        <AiFillSafetyCertificate className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
                        <span className="font-medium">Credly</span>
                        <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500" />
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>{" "}
          {/* Right section - Actions */}
          <div className="flex items-center gap-2">
            {" "}
            {/* Resume Button */}
            <a
              href="/Ahmed_Ayman_Alhofy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex relative group px-3 py-1.5 rounded-full transition-all duration-300 bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] hover:from-[#4de9d2]/90 hover:to-[#3dd1b5]/90 text-black font-medium shadow-md shadow-[#4de9d2]/20 hover:shadow-lg hover:shadow-[#4de9d2]/25 hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="relative z-10 text-sm font-medium flex items-center gap-1">
                Resume
                {/* Download icon effect */}
                <div className="w-0 group-hover:w-3 transition-all duration-300 overflow-hidden flex items-center">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
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
              </span>
            </a>{" "}
            {/* Theme toggle - Desktop only */}
            <div className="relative group hidden md:block">
              <ModeToggle />
              {/* Glow effect for mode toggle */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>{" "}
            {/* Mobile menu button - Mobile only */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  ref={mobileMenuButtonRef}
                  variant="ghost"
                  size="icon"
                  className="md:hidden relative group bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-primary/8 hover:border-primary/20 transition-all duration-300 hover:shadow-sm hover:shadow-primary/15 rounded-full w-8 h-8"
                >
                  <Menu className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300" />
                  <span className="sr-only">Open menu</span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-primary/8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </SheetTrigger>{" "}
              <SheetContent
                side="right"
                className="md:hidden p-5 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-l border-gray-200/50 dark:border-gray-700/50 rounded-l-2xl"
              >
                <SheetHeader className="mb-5">
                  <SheetTitle className="text-left bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent text-lg font-bold">
                    Menu
                  </SheetTitle>
                  <SheetDescription
                    className={`${patrickHand.className} text-left text-gray-600 dark:text-gray-300 text-sm`}
                  >
                    Navigate through the website.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-2.5 py-3">
                  {" "}
                  {links.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="relative w-full justify-start h-10 group bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:shadow-sm transition-all duration-300 border border-transparent hover:border-primary/15 rounded-xl flex items-center px-3"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="relative z-10 text-sm text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                        {link.label}
                      </span>
                      {/* Animated indicator */}
                      <div className="absolute left-0 top-1/2 w-0 h-5 bg-primary/15 group-hover:w-1 transition-all duration-300 -translate-y-1/2 rounded-r" />
                    </a>
                  ))}{" "}
                  <a
                    href="/Ahmed_Ayman_Alhofy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 mt-3 bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] hover:from-[#4de9d2]/90 hover:to-[#3dd1b5]/90 text-black font-medium shadow-md shadow-[#4de9d2]/20 hover:shadow-lg hover:shadow-[#4de9d2]/25 transition-all duration-300 hover:scale-105 rounded-xl text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Resume</span>
                    <svg
                      className="w-3.5 h-3.5"
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
                  {/* Social Media Links */}
                  <div className="mt-5 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2.5 text-center">
                      Connect with me
                    </p>
                    <div className="flex justify-center gap-3">
                      <a
                        href="https://github.com/AhmedAyman4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-sm hover:shadow-primary/15"
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ahmed-alhofy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-sm hover:shadow-primary/15"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="mailto:ahmedalhofy42@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-sm hover:shadow-primary/15"
                        aria-label="Email"
                      >
                        <MdEmail className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/ahmedhofi_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-sm hover:shadow-primary/15"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.credly.com/users/ahmedayman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-sm hover:shadow-primary/15"
                        aria-label="Credly"
                      >
                        <AiFillSafetyCertificate className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-3">
                    <MobileModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>{" "}
      {/* Custom CSS for additional animations and pill styling */}
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

        @keyframes pillGlow {
          0%,
          100% {
            box-shadow: 0 0 15px rgba(77, 233, 210, 0.08);
          }
          50% {
            box-shadow: 0 0 20px rgba(77, 233, 210, 0.12);
          }
        }

        .navbar-container:hover {
          animation: navFloat 4s ease-in-out infinite;
        }

        .navbar-container .bg-background\/70 {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .navbar-container .bg-background\/70:hover {
          animation: pillGlow 3s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        /* Enhanced pill button effects */
        .pill-nav-item {
          position: relative;
          overflow: hidden;
        }

        .pill-nav-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(77, 233, 210, 0.08),
            transparent
          );
          transition: left 0.4s;
        }

        .pill-nav-item:hover::before {
          left: 100%;
        }

        /* Refined mobile menu animations */
        .mobile-menu-item {
          animation: slideInRight 0.25s ease-out forwards;
          opacity: 0;
          transform: translateX(15px);
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        } /* Responsive adjustments */
        @media (max-width: 768px) {
          .navbar-container .hidden.md\\:flex {
            display: none !important;
          }
        }

        /* Slick hover transitions */
        .group:hover .transition-all {
          transition-duration: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
