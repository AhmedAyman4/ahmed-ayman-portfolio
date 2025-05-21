"use client";

import { Patrick_Hand } from "next/font/google";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Import GSAP and React hooks
import { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Assuming GSAP is installed or available globally

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  // Create refs for the elements to animate
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const desktopNavRef = useRef(null);
  const mobileMenuButtonRef = useRef(null); // Ref for the mobile menu trigger button

  useEffect(() => {
    // Ensure all referenced elements are available before attempting animations
    if (
      navbarRef.current &&
      logoRef.current &&
      desktopNavRef.current &&
      mobileMenuButtonRef.current
    ) {
      // Create a GSAP timeline for orchestrating animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animation 1: Navbar slides down and fades in
      tl.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 }, // Start state: off-screen top, invisible
        { y: 0, opacity: 1, duration: 0.8 } // End state: original position, visible
      );

      // Animation 2: Logo slides from left and fades in
      // This animation starts slightly before the end of the navbar animation
      tl.fromTo(
        logoRef.current,
        { x: -50, opacity: 0 }, // Start state: off-screen left, invisible
        { x: 0, opacity: 1, duration: 0.6 }, // End state: original position, visible
        "-=0.5" // Start 0.5 seconds before the previous animation completes
      );

      // Animation 3: Desktop navigation links and buttons (staggered fade in)
      // This is a separate animation, not part of the main timeline,
      // as it applies to multiple elements with a stagger.
      // It will run concurrently with the end of the logo animation.
      gsap.fromTo(
        desktopNavRef.current.children, // Target all direct children of the desktop nav container
        { y: -20, opacity: 0 }, // Start state: slightly above, invisible
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" } // End state: original position, visible, with bounce
      );

      // Animation 4: Mobile menu button slides from right and fades in
      // This animation also starts slightly before the end of the logo animation
      tl.fromTo(
        mobileMenuButtonRef.current,
        { x: 50, opacity: 0 }, // Start state: off-screen right, invisible
        { x: 0, opacity: 1, duration: 0.6 }, // End state: original position, visible
        "-=0.5" // Start 0.5 seconds before the previous animation completes
      );
    }
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    // Apply ref to the main navbar div
    <div
      ref={navbarRef}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
    >
      <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Apply ref to the logo link */}
        <a
          ref={logoRef}
          href="#"
          className={`font-bold text-xl ${patrickHand.className} ml-4 sm:ml-4`}
        >
          Ahmed Ayman
        </a>
        {/* Apply ref to the desktop navigation container */}
        <div ref={desktopNavRef} className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-[#4de9d2] hover:bg-[#4de9d2]/80 text-black"
          >
            <a
              href="/Ahmed_Ayman_Alhofy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
          <ModeToggle />
        </div>
        {/* Mobile menu button */}
        <Sheet>
          {/* Apply ref to the mobile menu trigger button */}
          <SheetTrigger asChild className="sm:hidden">
            <Button ref={mobileMenuButtonRef} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:hidden p-4">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className={patrickHand.className}>
                Navigate through the website.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              {links.map((link) => (
                <Button variant="ghost" asChild key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
              <Button
                asChild
                size="sm"
                className="bg-[#4de9d2] hover:bg-[#4de9d2]/80 text-black"
              >
                <a
                  href="/Ahmed_Ayman_Alhofy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
