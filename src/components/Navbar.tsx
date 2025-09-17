"use client";

import { useRef, useState } from "react";
import { Patrick_Hand } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import "@/styles/components/Navbar.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Home,
  FolderOpen,
  Briefcase,
  Code,
  Mail,
  User,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

const SOCIAL_LINKS = [
  { href: "https://github.com/AhmedAyman4", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ahmed-alhofy/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:ahmedalhofy42@gmail.com", icon: MdEmail, label: "Email" },
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
  );
};

const SocialIcon = ({
  href,
  Icon,
  label,
  onClick,
}: {
  href: string;
  Icon: any;
  label: string;
  onClick?: () => void;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className="social-icon"
    aria-label={label}
  >
    <Icon />
  </a>
);

const SocialDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="social-dropdown-trigger group">
        <span className="nav-link-text-desktop">
          <span className="hidden sm:inline">Social</span>
          <ChevronDown className="chevron-down" />
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="center" className="social-dropdown-content">
      <div className="social-dropdown-header">Connect with me</div>
      {SOCIAL_LINKS.map((social) => (
        <DropdownMenuItem key={social.href} asChild>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-dropdown-item"
          >
            <social.icon className="social-dropdown-icon" />
            <span className="social-dropdown-label">{social.label}</span>
            <svg
              className="social-dropdown-arrow"
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
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

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
              <SocialDropdown />
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
  );
};

export default Navbar;
