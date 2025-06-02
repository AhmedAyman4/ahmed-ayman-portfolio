// components/Footer.tsx
"use client";

import { FC } from "react";

interface FooterProps {
  designer?: string;
  year?: number;
}

const Footer: FC<FooterProps> = ({
  designer = "Ahmed Ayman",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-background/70 backdrop-blur-xl border-t border-gray-200/30 dark:border-gray-700/40 py-6 text-center shadow-md shadow-black/5 dark:shadow-black/20 relative overflow-hidden">
      {/* Gradient overlay for extra visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent opacity-40" />

      {/* Footer content */}
      <div className="relative z-10">
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-300 bg-clip-text text-transparent font-medium">
            Built and designed by {designer}
          </span>
          <br />
          <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 inline-block">
            All rights reserved. © {year}
          </span>
        </p>
      </div>

      {/* Custom CSS for animations and styling matching navbar */}
      <style jsx>{`
        footer {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
