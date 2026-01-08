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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
              <div className="hidden md:block">
                <ResumeButton />
              </div>
              <div className="navbar-theme-toggle">
                <ModeToggle />
              </div>
              {/* Hamburger Menu Button - Mobile Only */}
              <button
                className="hamburger-button md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            {/* Mobile Menu Header */}
            <div className="mobile-menu-header">
              <span className={`mobile-menu-brand ${patrickHand.className}`}>
                Ahmed Ayman
              </span>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mobile-nav-links">
              {links.map((link) => {
                const Icon =
                  NAV_ICONS[link.label.toLowerCase() as keyof typeof NAV_ICONS];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href, navbarRef);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      isLinkActive(link.href, link.label) ? "active" : ""
                    }`}
                  >
                    {Icon && <Icon className="mobile-nav-icon" />}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>
            <div className="mobile-menu-divider" />
            <a
              href="/Ahmed_Ayman_Alhofy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-resume-button"
            >
              <FileText className="mobile-nav-icon" />
              <span>Resume</span>
              <svg
                className="resume-download-icon"
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
            <div className="mobile-menu-divider" />
            {/* Social Links */}
            <div className="mobile-social-links">
              <a
                href="mailto:ahmedalhofy42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-social-link"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alhofy/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/AhmedAyman4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-social-link"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/ahmedhofi_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-social-link"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.credly.com/users/ahmedayman"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-social-link"
                aria-label="Credly"
              >
                <AiFillSafetyCertificate className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Navbar;
