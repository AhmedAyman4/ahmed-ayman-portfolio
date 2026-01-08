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
import { Home, FolderOpen, Briefcase, Code, Mail, User } from "lucide-react";

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
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="/Ahmed_Ayman_Alhofy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="resume-button-desktop group"
        >
          <span className="resume-button-text-desktop">
            <span className="hidden md:inline">Resume</span>
            <svg
              className="resume-icon w-4 h-4 md:w-0 md:group-hover:w-3 transition-all overflow-hidden"
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
      </TooltipTrigger>
      <TooltipContent side="bottom" className="md:hidden" sideOffset={5}>
        <p className="text-xs font-medium">Resume</p>
      </TooltipContent>
    </Tooltip>
  );
};

const Navbar = ({ links }: { links: { href: string; label: string }[] }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");

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
              className={`navbar-brand group ${patrickHand.className} hidden md:block`}
            >
              <span className="navbar-brand-text">Ahmed Ayman</span>
            </a>

            <div className="navbar-desktop-nav">
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
              <ResumeButton />
              <div className="navbar-theme-toggle">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Navbar;
