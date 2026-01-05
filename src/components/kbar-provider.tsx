"use client";

import React, { ReactNode, useMemo, memo, useCallback } from "react";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  ActionImpl,
  ActionId,
} from "kbar";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  FolderOpen,
  Briefcase,
  Code,
  Mail,
  FileText,
  Sun,
  Moon,
  Monitor,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

interface KBarProviderWrapperProps {
  children: ReactNode;
}

const RenderResults = memo(() => {
  const { results, rootActionId } = useMatches();

  const renderItem = useCallback(
    ({ item, active }: { item: string | ActionImpl; active: boolean }) => {
      if (typeof item === "string") {
        return (
          <div className="px-6 py-3 text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 border-b border-gray-200/20 dark:border-white/10 bg-gray-100/50 dark:bg-black/20">
            {item}
          </div>
        );
      }
      return (
        <ResultItem
          action={item}
          active={active}
          currentRootActionId={rootActionId || ""}
        />
      );
    },
    [rootActionId]
  );

  return <KBarResults items={results} onRender={renderItem} />;
});

RenderResults.displayName = "RenderResults";

interface ResultItemProps {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: string;
}

const ResultItem = memo(({ action, active }: ResultItemProps) => {
  const className = useMemo(
    () =>
      `px-6 py-4 flex items-center justify-between cursor-pointer transition-colors duration-150 ${
        active
          ? "bg-gray-200/70 dark:bg-white/10 text-gray-900 dark:text-white"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-white/5"
      }`,
    [active]
  );

  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        {action.icon && (
          <div className="w-5 h-5 flex items-center justify-center text-gray-600 dark:text-gray-300">
            {action.icon}
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-medium text-sm">{action.name}</span>
          {action.subtitle && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {action.subtitle}
            </span>
          )}
        </div>
      </div>
      {action.shortcut?.length && (
        <div className="flex items-center gap-1">
          {action.shortcut.map((sc) => (
            <kbd
              key={sc}
              className="px-2 py-1 text-xs font-mono bg-gray-200/70 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded border border-gray-300/30 dark:border-white/20"
            >
              {sc}
            </kbd>
          ))}
        </div>
      )}
    </div>
  );
});

ResultItem.displayName = "ResultItem";

export function KBarProviderWrapper({ children }: KBarProviderWrapperProps) {
  const router = useRouter();
  const { setTheme } = useTheme();

  const handleNavigation = useCallback(
    (href: string) => {
      if (href.startsWith("/")) {
        router.push(href);
      } else if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href) as HTMLElement;
        if (target) {
          const navbarHeight = 80;
          window.scrollTo({
            top: target.offsetTop - navbarHeight - 20,
            behavior: "smooth",
          });
        }
      }
    },
    [router]
  );

  const actions = useMemo(
    () => [
      // Navigation
      {
        id: "home",
        name: "Home",
        shortcut: ["g", "h"],
        keywords: "home landing",
        section: "Navigation",
        perform: () => handleNavigation("#"),
        icon: <Home className="w-4 h-4" />,
      },
      {
        id: "projects",
        name: "Projects",
        shortcut: ["g", "p"],
        keywords: "projects portfolio work",
        section: "Navigation",
        perform: () => handleNavigation("#projects"),
        icon: <FolderOpen className="w-4 h-4" />,
      },
      {
        id: "experience",
        name: "Experience",
        shortcut: ["g", "e"],
        keywords: "experience work history jobs",
        section: "Navigation",
        perform: () => handleNavigation("#experience"),
        icon: <Briefcase className="w-4 h-4" />,
      },
      {
        id: "skills",
        name: "Skills",
        shortcut: ["g", "s"],
        keywords: "skills technologies tools",
        section: "Navigation",
        perform: () => handleNavigation("#skills"),
        icon: <Code className="w-4 h-4" />,
      },
      {
        id: "contact",
        name: "Contact",
        shortcut: ["g", "c"],
        keywords: "contact get in touch email",
        section: "Navigation",
        perform: () => handleNavigation("#contact"),
        icon: <Mail className="w-4 h-4" />,
      },

      // Actions
      {
        id: "resume",
        name: "View Resume",
        shortcut: ["r"],
        keywords: "resume cv download pdf",
        section: "Actions",
        perform: () => window.open("/Ahmed_Ayman_Alhofy.pdf", "_blank"),
        icon: <FileText className="w-4 h-4" />,
      },

      // Theme
      {
        id: "theme",
        name: "Change theme...",
        keywords: "theme dark light mode",
        section: "Preferences",
        icon: <Monitor className="w-4 h-4" />,
      },
      {
        id: "theme-light",
        name: "Light",
        keywords: "light theme",
        section: "Preferences",
        perform: () => setTheme("light"),
        parent: "theme",
        icon: <Sun className="w-4 h-4" />,
      },
      {
        id: "theme-dark",
        name: "Dark",
        keywords: "dark theme",
        section: "Preferences",
        perform: () => setTheme("dark"),
        parent: "theme",
        icon: <Moon className="w-4 h-4" />,
      },
      {
        id: "theme-system",
        name: "System",
        keywords: "system theme",
        section: "Preferences",
        perform: () => setTheme("system"),
        parent: "theme",
        icon: <Monitor className="w-4 h-4" />,
      },

      // Social Links
      {
        id: "github",
        name: "GitHub Profile",
        keywords: "github profile code repositories",
        section: "Social",
        perform: () => window.open("https://github.com/AhmedAyman4", "_blank"),
        icon: <Github className="w-4 h-4" />,
      },
      {
        id: "linkedin",
        name: "LinkedIn Profile",
        keywords: "linkedin professional network",
        section: "Social",
        perform: () =>
          window.open("https://www.linkedin.com/in/ahmed-alhofy/", "_blank"),
        icon: <Linkedin className="w-4 h-4" />,
      },
    ],
    [handleNavigation, setTheme]
  );

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-50 bg-black/70 dark:bg-black/70 backdrop-blur-sm">
          <KBarAnimator className="w-full max-w-lg max-h-[28rem] mx-auto mt-1 md:mt-20 overflow-hidden">
            <div className="bg-white/95 dark:bg-black/90 backdrop-blur-md border border-gray-200/20 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full will-change-transform">
              <KBarSearch
                className="px-6 py-4 text-base bg-transparent border-none outline-none w-full placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white flex-shrink-0"
                placeholder="Type a command or search..."
              />
              <div className="border-t border-gray-200/20 dark:border-white/10 overflow-y-auto flex-1 min-h-0 kbar-scrollbar">
                <RenderResults />
              </div>
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}
