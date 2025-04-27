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
    <footer className="bg-background border-t py-6 text-center text-sm text-muted-foreground">
      <p className="mt-2">
        Built and designed by {designer}.
        <br />
        All rights reserved. © {year}
      </p>
    </footer>
  );
};

export default Footer;
