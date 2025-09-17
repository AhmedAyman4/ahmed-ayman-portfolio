// components/Footer.tsx
"use client";

import { FC } from "react";
import "@/styles/components/Footer.css";

interface FooterProps {
  designer?: string;
  year?: number;
}

const Footer: FC<FooterProps> = ({
  designer = "Ahmed Ayman",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="footer-container">
      {/* Gradient overlay for extra visual appeal */}
      <div className="footer-gradient-overlay" />

      {/* Footer content */}
      <div className="footer-content">
        <p className="footer-main-text">
          <span className="footer-designer-name">
            Built and designed by {designer}
          </span>
          <br />
          <span className="footer-copyright">
            All rights reserved. © {year}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
