"use client";

import { useRef, useState, useEffect } from "react";
import { Patrick_Hand } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import "@/styles/components/Navbar.css";
import {
  Home,
  FolderOpen,
  Briefcase,
  Code,
  Mail,
  User,
  Menu,
  X,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

const NAV_ICONS = {
  home: Home,
  about: User,
  projects: FolderOpen,
  certifications: AiFillSafetyCertificate,
  experience: Briefcase,
  skills: Code,
  contact: Mail,
};

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  navbarRef: React.RefObject<HTMLDivElement>
) => {
  // If it's a route link (starts with /), let the default navigation happen
  if (href.startsWith("/")) {
    return; // Don't prevent default, let Next.js handle the navigation
  }

  // For anchor links, prevent default and scroll
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      const navbarHeight = navbarRef.current?.offsetHeight || 80;
      window.scrollTo({
        top: target.offsetTop - navbarHeight - 20,
        behavior: "smooth",
      });
    }
  }
};

const handleMobileNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  navbarRef: React.RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  if (href.startsWith("/")) {
    closeMenu();
    return;
  }
  
  e.preventDefault();
  closeMenu();
  
  // Wait for the Dialog's closing animation and scroll-lock removal
  setTimeout(() => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href) as HTMLElement;
      if (target) {
        const navbarHeight = navbarRef.current?.offsetHeight || 80;
        window.scrollTo({
          top: target.offsetTop - navbarHeight - 20,
          behavior: "smooth",
        });
      }
    }
  }, 400);
};

const NavLink = ({
  link,
  isMobile = false,
  navbarRef,
  onClick,
  isActive = false,
}: {
  link: { href: string; label: string };
  isMobile?: boolean;
  navbarRef: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const Icon = NAV_ICONS[link.label.toLowerCase() as keyof typeof NAV_ICONS];
  const baseClasses = `nav-link-desktop group ${
    isActive ? "nav-link-active" : ""
  }`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e, link.href, navbarRef);
    if (onClick) onClick();
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className={baseClasses}
        >
          <span className="nav-link-text-desktop">
            <span className="hidden md:inline">{link.label}</span>
            {Icon && <Icon className="nav-link-icon md:hidden" />}
          </span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="md:hidden" sideOffset={5}>
        <p className="text-xs font-medium">{link.label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const ResumeButton = ({
  isMobile = false,
  onClick,
}: {
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  return (
    <a
      href="/Ahmed_Ayman_Alhofy.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="resume-button-desktop group"
    >
      <span className="resume-button-text-desktop">
        Resume
        <svg
          className="resume-icon w-0 group-hover:w-3 h-3 transition-all overflow-hidden"
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
      </span>
    </a>
  );
};

const Navbar = ({ links }: { links: { href: string; label: string }[] }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 80;
      const scrollPosition = window.scrollY + navbarHeight + 100;

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Find the current section
      for (const link of links) {
        if (link.href.startsWith("#") && link.href !== "#") {
          const section = document.querySelector(link.href) as HTMLElement;
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              const sectionId = link.href.replace("#", "");
              setActiveSection(sectionId);
              return;
            }
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const isLinkActive = (href: string, label: string): boolean => {
    if (href === "#" || href === "#home") {
      return activeSection === "home" || activeSection === "";
    }
    if (href.startsWith("#")) {
      return activeSection === href.replace("#", "");
    }
    return false;
  };

  return (
    <TooltipProvider>
      <div ref={navbarRef} className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-content">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#", navbarRef)}
              className={`navbar-brand group ${patrickHand.className}`}
            >
              <span className="navbar-brand-text">Ahmed Ayman</span>
            </a>

            <div className="navbar-desktop-nav hidden md:flex">
              <div className="navbar-nav-container">
                {links.map((link) => (
                  <NavLink
                    key={link.href}
                    link={link}
                    navbarRef={navbarRef}
                    isActive={isLinkActive(link.href, link.label)}
                  />
                ))}
              </div>
            </div>

            <div className="navbar-actions">
              {/* Desktop Social Links */}
              <div className="hidden lg:flex items-center gap-1 mr-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://github.com/AhmedAyman4" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] transition-all hover:scale-110" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom"><p className="text-xs">GitHub</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/in/ahmed-alhofy/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] transition-all hover:scale-110" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom"><p className="text-xs">LinkedIn</p></TooltipContent>
                </Tooltip>
              </div>

              <div className="hidden md:block">
                <ResumeButton />
              </div>
              <div className="navbar-theme-toggle">
                <ModeToggle />
              </div>
              {/* Mobile Menu via Blurry Dialog */}
              <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DialogTrigger asChild>
                  <button className="hamburger-button md:hidden" aria-label="Toggle mobile menu">
                    <Menu className="h-5 w-5" />
                  </button>
                </DialogTrigger>
                <DialogContent 
                  className="w-[calc(100%-2rem)] max-w-md p-6 pt-12 border border-white/20 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-none dark:backdrop-blur-3xl shadow-2xl flex flex-col gap-4 rounded-3xl"
                >
                  <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
                  


                  {/* Standard Links List */}
                  <div className="flex flex-col gap-2">
                    {links.map((link) => {
                      const Icon = NAV_ICONS[link.label.toLowerCase() as keyof typeof NAV_ICONS];
                      const active = isLinkActive(link.href, link.label);
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => handleMobileNavClick(e, link.href, navbarRef, () => setIsMobileMenuOpen(false))}
                          className={`flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer outline-none w-full ${
                             active 
                             ? 'bg-white/80 dark:bg-white/10 text-primary dark:text-[#4de9d2] shadow-sm' 
                             : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/5'
                          }`}
                        >
                          {Icon && <Icon className="h-4 w-4 opacity-80" />}
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </div>

                  <div className="h-px w-full bg-gray-200/50 dark:bg-gray-800/50 my-2" />
                  
                  {/* Standardized Resume Button */}
                  <a 
                    href="/Ahmed_Ayman_Alhofy.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-primary dark:bg-[#4de9d2] text-white dark:text-black shadow-md hover:opacity-90 transition-all cursor-pointer outline-none"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Download Resume</span>
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                  
                  {/* Social Links Standardized */}
                  <div className="flex justify-center gap-4 mt-auto pb-2">
                     <a href="mailto:ahmedalhofy42@gmail.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="p-2.5 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm" aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                      <a href="https://www.linkedin.com/in/ahmed-alhofy/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="p-2.5 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/AhmedAyman4" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="p-2.5 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#4de9d2] hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Navbar;
