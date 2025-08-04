"use client";

import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`text-center mb-10 ${className}`}>
      {/* Label - pill-shaped, small */}
      <div className="inline-flex items-center px-2 py-0.5 mb-4 text-xs font-medium bg-gray-100/70 text-gray-600 rounded-full border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:text-gray-300 dark:border-gray-700/50">
        {label}
      </div>

      {/* Main Title - H1 or H2, large & bold */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>

      {/* Subtitle - paragraph, normal weight */}
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
