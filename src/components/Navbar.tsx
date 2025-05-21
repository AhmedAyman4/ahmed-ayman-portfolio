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

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">
        <a
          href="#"
          className={`font-bold text-xl ${patrickHand.className} ml-4 sm:ml-4`}
        >
          Ahmed Ayman
        </a>
        <div className="hidden sm:flex items-center gap-6">
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
          {/* <ModeToggle /> */}
        </div>
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon">
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
              {/* <ModeToggle /> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
