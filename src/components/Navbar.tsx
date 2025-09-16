"use client";

import { useRef, useState } from "react";
import { Patrick_Hand } from "next/font/google";
import FadeInSection from "@/components/FadeInSection";
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
import {
  Menu,
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

const navIcons = {
  home: Home,
  about: User,
  projects: FolderOpen,
  experience: Briefcase,
  skills: Code,
  contact: Mail,
};

interface NavbarProps {
  links: { href: string; label: string }[];
}

const SocialDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="relative group px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10 h-auto"
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors flex items-center gap-1">
          Social
          <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="center"
      className="w-40 bg-background/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl p-1.5"
    >
      <div className="text-xs text-gray-500 dark:text-gray-400 px-2.5 py-1.5 font-medium tracking-wide uppercase">
        Connect with me
      </div>
      {SOCIAL_LINKS.map((social) => (
        <DropdownMenuItem key={social.href} asChild>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all rounded-lg group/item"
          >
            <social.icon className="h-4 w-4 transition-transform group-hover/item:scale-110" />
            <span className="font-medium">{social.label}</span>
            <svg
              className="h-3 w-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity"
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

const MobileSocialLinks = ({ onLinkClick }: { onLinkClick: () => void }) => (
  <div className="mt-5 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2.5 text-center">
      Connect with me
    </p>
    <div className="flex justify-center gap-3">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
          className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary dark:hover:text-[#4de9d2] transition-all hover:scale-110 hover:shadow-sm"
          aria-label={social.label}
        >
          <social.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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

  return (
    <div ref={navbarRef} className="sticky top-0 z-50 w-full py-2">
      <div className="container max-w-5xl mx-auto px-3">
        <div className="bg-background/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/40 rounded-full px-4 py-2 shadow-md flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className={`font-bold text-xl ${patrickHand.className} group`}
          >
            <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent">
              Ahmed Ayman
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-0.5 bg-gray-100/40 dark:bg-gray-800/40 rounded-full px-1.5 py-1.5">
              {links.map((link) => {
                const Icon =
                  navIcons[link.label.toLowerCase() as keyof typeof navIcons];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative group px-3 py-1.5 rounded-full transition-all hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
              <SocialDropdown />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/Ahmed_Ayman_Alhofy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-3 py-1.5 rounded-full transition-all bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] hover:from-[#4de9d2]/90 hover:to-[#3dd1b5]/90 text-black font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="text-sm font-medium flex items-center gap-1 group">
                Resume
                <svg
                  className="w-0 group-hover:w-3 transition-all overflow-hidden h-3"
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

            <div className="hidden md:block">
              <ModeToggle />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 transition-all rounded-full w-8 h-8"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="md:hidden p-5 bg-background/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50 rounded-l-2xl"
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
                  {links.map((link) => {
                    const Icon =
                      navIcons[
                        link.label.toLowerCase() as keyof typeof navIcons
                      ];
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="relative w-full h-10 group bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:shadow-sm transition-all border border-transparent hover:border-primary/15 rounded-xl flex items-center px-3"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors flex items-center gap-2">
                          {Icon && <Icon className="h-3.5 w-3.5" />}
                          {link.label}
                        </span>
                      </a>
                    );
                  })}

                  <a
                    href="/Ahmed_Ayman_Alhofy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-3 h-10 bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] text-black font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 rounded-xl text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Resume</span>
                    <svg
                      className="w-3 h-3"
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

                  <MobileSocialLinks
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                  />

                  <div className="mt-3">
                    <MobileModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
