"use client";

// React and Next.js imports
import { useRef, useState } from "react";
import { Patrick_Hand } from "next/font/google";

// Components
import FadeInSection from "@/components/FadeInSection";

// UI component imports
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

// Icons
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

// Constants
const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

// Social media links configuration
const SOCIAL_LINKS = [
  {
    href: "https://github.com/AhmedAyman4",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ahmed-alhofy/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:ahmedalhofy42@gmail.com",
    icon: MdEmail,
    label: "Email",
  },
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

// Common styles for consistency
const STYLES = {
  button:
    "relative group px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-md hover:shadow-primary/10",
  gradientText:
    "bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent",
  gradientBg:
    "bg-gradient-to-r from-[#4de9d2] to-[#3dd1b5] hover:from-[#4de9d2]/90 hover:to-[#3dd1b5]/90",
  pill: "bg-gray-100/40 dark:bg-gray-800/40 rounded-full",
  backdrop:
    "bg-background/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/40",
  mobileItem:
    "relative w-full justify-start h-10 group bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:shadow-sm transition-all duration-300 border border-transparent hover:border-primary/15 rounded-xl flex items-center px-3 cursor-pointer hover:shadow-primary/10",
};

// External link icon component
const ExternalLinkIcon = () => (
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
);

// Download icon component
const DownloadIcon = () => (
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
);

// Interface
interface NavbarProps {
  links: { href: string; label: string }[];
}

// Function to get the appropriate icon for each navigation label
const getNavIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "home":
      return Home;
    case "about":
      return User;
    case "projects":
      return FolderOpen;
    case "experience":
      return Briefcase;
    case "skills":
      return Code;
    case "contact":
      return Mail;
    default:
      return null;
  }
};

// Social Dropdown Menu Component
const SocialDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className={`${STYLES.button} h-auto overflow-hidden`}
      >
        <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors duration-300 flex items-center gap-1">
          Social
          <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-data-[state=open]:rotate-180" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-purple-500/8 dark:from-[#4de9d2]/15 dark:to-[#3dd1b5]/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="center"
      className="w-40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/20 p-1.5 animate-in slide-in-from-top-2 duration-200"
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
            className="flex items-center gap-2.5 w-full px-2.5 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-lg group/item relative overflow-hidden"
          >
            <social.icon className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
            <span className="font-medium">{social.label}</span>
            <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
              <ExternalLinkIcon />
            </div>
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

// Mobile Social Links Component
const MobileSocialLinks = ({ onLinkClick }: { onLinkClick: () => void }) => (
  <FadeInSection
    delay={`${(SOCIAL_LINKS.length + 1) * 50}ms`}
    className="mt-5 pt-3 border-t border-gray-200/50 dark:border-gray-700/50"
  >
    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2.5 text-center">
      Connect with me
    </p>
    <div className="flex justify-center gap-3">
      {SOCIAL_LINKS.map((social, index) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            onLinkClick();
          }}
          className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/40 hover:bg-primary/8 hover:text-primary dark:hover:text-[#4de9d2] transition-all duration-300 hover:scale-110 hover:shadow-sm hover:shadow-primary/15 cursor-pointer"
          aria-label={social.label}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <social.icon className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
        </a>
      ))}
    </div>
  </FadeInSection>
);

// Main Navbar Component
const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Utility functions
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(href) as HTMLElement;
      if (targetElement) {
        // Get navbar height for offset calculation
        const navbarHeight = navbarRef.current?.offsetHeight || 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleMobileMenuToggle = (open: boolean) => {
    // Use requestAnimationFrame to ensure smooth transitions
    requestAnimationFrame(() => {
      setIsMobileMenuOpen(open);
    });
  };

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    // Close menu first with a small delay for better UX
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      handleNavClick(e, href);
    }, 150);
  };
  return (
    // Apply ref to the main navbar div
    <div
      ref={navbarRef}
      className="navbar-container sticky top-0 z-50 w-full py-2"
    >
      <div className="container max-w-5xl mx-auto px-3">
        <div
          className={`${STYLES.backdrop} rounded-full px-4 py-2 shadow-md shadow-black/5 dark:shadow-black/20 flex items-center justify-between relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent opacity-40" />

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className={`font-bold text-xl ${patrickHand.className} relative group`}
          >
            <span className={`relative z-10 ${STYLES.gradientText}`}>
              Ahmed Ayman
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div
              className={`flex items-center gap-0.5 ${STYLES.pill} px-1.5 py-1.5`}
            >
              {links.map((link) => {
                const IconComponent = getNavIcon(link.label);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={STYLES.button}
                  >
                    <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors duration-300 flex items-center gap-1.5">
                      {link.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-purple-500/8 dark:from-[#4de9d2]/15 dark:to-[#3dd1b5]/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              className={`hidden md:flex relative group px-3 py-1.5 rounded-full transition-all duration-300 ${STYLES.gradientBg} text-black font-medium shadow-md shadow-[#4de9d2]/20 hover:shadow-lg hover:shadow-[#4de9d2]/25 hover:-translate-y-0.5 hover:scale-105`}
            >
              <span className="relative z-10 text-sm font-medium flex items-center gap-1">
                Resume
                <div className="w-0 group-hover:w-3 transition-all duration-300 overflow-hidden flex items-center">
                  <DownloadIcon />
                </div>
              </span>
            </a>

            <div className="relative group hidden md:block">
              <ModeToggle />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {/* Mobile Menu */}
            <Sheet
              open={isMobileMenuOpen}
              onOpenChange={handleMobileMenuToggle}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden relative group bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-primary/8 hover:border-primary/20 transition-all duration-300 hover:shadow-sm hover:shadow-primary/15 rounded-full w-8 h-8"
                >
                  <Menu className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300" />
                  <span className="sr-only">Open menu</span>
                  <div className="absolute inset-0 bg-primary/8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="md:hidden p-5 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 border-l border-gray-200/40 dark:border-gray-700/40 rounded-l-2xl shadow-2xl transition-all duration-300"
                onPointerDownOutside={() => setIsMobileMenuOpen(false)}
                onInteractOutside={() => setIsMobileMenuOpen(false)}
              >
                <FadeInSection delay="0ms">
                  <SheetHeader className="mb-5">
                    <SheetTitle
                      className={`text-left ${STYLES.gradientText} text-lg font-bold`}
                    >
                      Menu
                    </SheetTitle>
                    <SheetDescription
                      className={`${patrickHand.className} text-left text-gray-600 dark:text-gray-300 text-sm`}
                    >
                      Navigate through the website.
                    </SheetDescription>
                  </SheetHeader>
                </FadeInSection>

                <div
                  className="grid gap-2.5 py-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  {links.map((link, index) => {
                    const IconComponent = getNavIcon(link.label);
                    return (
                      <FadeInSection
                        key={link.href}
                        delay={`${index * 50}ms`}
                        className="relative w-full"
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleMobileNavClick(e, link.href)}
                          className={STYLES.mobileItem}
                        >
                          <span className="relative z-10 text-sm text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-[#4de9d2] transition-colors duration-300 flex items-center gap-2">
                            {IconComponent && (
                              <IconComponent className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary dark:group-hover:text-[#4de9d2] md:hidden" />
                            )}
                            {link.label}
                          </span>
                          <div className="absolute left-0 top-1/2 w-0 h-5 bg-primary/15 group-hover:w-1 transition-all duration-300 -translate-y-1/2 rounded-r" />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        </a>
                      </FadeInSection>
                    );
                  })}

                  <FadeInSection
                    delay={`${links.length * 50}ms`}
                    className="mt-3"
                  >
                    <a
                      href="/Ahmed_Ayman_Alhofy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`h-10 ${STYLES.gradientBg} text-black font-medium shadow-md shadow-[#4de9d2]/20 hover:shadow-lg hover:shadow-[#4de9d2]/25 transition-all duration-300 hover:scale-105 rounded-xl text-sm flex items-center justify-center gap-1.5 cursor-pointer`}
                    >
                      <span>Resume</span>
                      <DownloadIcon />
                    </a>
                  </FadeInSection>

                  <MobileSocialLinks
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                  />

                  <FadeInSection
                    delay={`${(links.length + 2) * 50}ms`}
                    className="mt-3"
                  >
                    <MobileModeToggle />
                  </FadeInSection>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>{" "}
      {/* Custom CSS Styles */}
      <NavbarStyles />
    </div>
  );
};

// Navbar Styles Component
const NavbarStyles = () => (
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

    @keyframes pillGlow {
      0%,
      100% {
        box-shadow: 0 0 15px rgba(77, 233, 210, 0.08);
      }
      50% {
        box-shadow: 0 0 20px rgba(77, 233, 210, 0.12);
      }
    }

    @keyframes slideInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .navbar-container:hover {
      animation: navFloat 4s ease-in-out infinite;
    }

    .navbar-container .bg-background\\/70:hover {
      animation: pillGlow 3s ease-in-out infinite;
    }

    .mobile-menu-item {
      animation: slideInRight 0.4s ease-out forwards;
      opacity: 0;
      transform: translateX(20px);
    }

    /* Prevent mobile menu flicker */
    [data-radix-popper-content-wrapper] {
      z-index: 50 !important;
      will-change: transform;
    }

    /* Smooth sheet transitions */
    [data-state="open"][data-side="right"] {
      animation: slideInFromRight 200ms ease-out;
    }

    [data-state="closed"][data-side="right"] {
      animation: slideOutToRight 150ms ease-in;
    }

    @keyframes slideInFromRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutToRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }

    @media (max-width: 768px) {
      .navbar-container .hidden.md\\:flex {
        display: none !important;
      }
    }
  `}</style>
);

export default Navbar;
