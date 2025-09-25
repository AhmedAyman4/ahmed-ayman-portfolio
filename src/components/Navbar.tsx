"use client";

import { useRef, useState } from "react";
import { Patrick_Hand } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { KBarToggle } from "@/components/kbar-toggle";
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
}: {
  link: { href: string; label: string };
  isMobile?: boolean;
  navbarRef: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
}) => {
  const Icon = NAV_ICONS[link.label.toLowerCase() as keyof typeof NAV_ICONS];
  const baseClasses = "nav-link-desktop group";

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
            <span className="hidden sm:inline">{link.label}</span>
            {Icon && <Icon className="nav-link-icon sm:hidden" />}
          </span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="sm:hidden" sideOffset={5}>
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
  const buttonClass = isMobile
    ? "resume-button-mobile"
    : "resume-button-desktop group";
  const textClass = isMobile
    ? "resume-button-text"
    : "resume-button-text-desktop";
  const iconClass = isMobile ? "resume-icon-mobile" : "resume-icon-desktop";

  return (
    <a
      href="/Ahmed_Ayman_Alhofy.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={buttonClass}
    >
      <span className={textClass}>
        Resume
        <svg
          className={iconClass}
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

  return (
    <TooltipProvider>
      <div ref={navbarRef} className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-content">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#", navbarRef)}
              className={`navbar-brand group ${patrickHand.className} hidden sm:block`}
            >
              <span className="navbar-brand-text">Ahmed Ayman</span>
            </a>

            <div className="navbar-desktop-nav">
              <div className="navbar-nav-container">
                {links.map((link) => (
                  <NavLink key={link.href} link={link} navbarRef={navbarRef} />
                ))}
              </div>
            </div>

            <div className="navbar-actions">
              <KBarToggle />
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
