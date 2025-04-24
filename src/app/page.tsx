"use client";

import { Patrick_Hand } from "next/font/google";
import Image from "next/image";
import { Mail, Github, Linkedin, Menu, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TypingEffect } from "@/components/typing-effect";
import { ProjectsComponent } from "@/components/ProjectsComponent";
import Me1 from "../assets/me.png";

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
          <ModeToggle />
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
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    sectionsRef.current = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    });
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        links={[
          { href: "#hero", label: "Home" },
          { href: "#projects", label: "Projects" },
          { href: "#experience", label: "Experience" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <main className="container mx-auto py-10 flex-grow px-4 md:px-8 lg:px-24 xl:px-28">
        {/* Hero Section */}
        <section
          id="hero"
          className="text-center mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <Image
            src={Me1}
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4 shadow-lg"
          />
          {/* Title */}
          <h1
            className={`flex items-center justify-center text-6xl font-light ${patrickHand.className}`}
          >
            <span className="dark:text-white text-black">Hi,</span>
            <TypingEffect
              words={[
                {
                  text: "",
                  color: "white",
                },
                {
                  text: "Ahmed",
                  color: "#4de9d2",
                  style: { marginLeft: "0.1em" }, // Custom style for tighter spacing
                },
                {
                  text: "here.",
                  color: "var(--color-black-color-if-white)",
                  style: { marginLeft: "0.1em" }, // Custom style for tighter spacing
                },
              ]}
              typingSpeed={130}
            />
          </h1>
          {/* Subtitle */}
          <p className="mt-2 text-4xl font-light dark:text-gray-300 text-black">
            I create stuff sometimes.
          </p>

          {/* Description */}
          <p className="mt-6 dark:text-gray-400 text-black max-w-lg mx-auto">
            Aspiring Data Scientist & IS student at Faculty of Computers & AI,
            University of Sadat City. Passionate about solving real-world
            problems with data and exploring AI.
          </p>
          {/* Say Hi Button */}
          <a
            href="mailto:ahmedalhofy42@gmail.com"
            className="mt-6 inline-flex items-center px-6 py-3 border-2 border-[#4de9d2] text-black font-medium rounded-full shadow-sm bg-[#b3f2eb] hover:bg-[#4de9d2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4de9d2]"
          >
            <Mail
              className="mr-3 h-5 w-5 text-black"
              aria-hidden="true"
              strokeWidth={3}
            />
            Say hi!
          </a>

          <div className="mt-6 flex justify-center space-x-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/AhmedAyman4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alhofy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ahmedalhofy42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ahmedhofi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Projects Component */}
        <div ref={(el) => el && sectionsRef.current.push(el)}>
          <ProjectsComponent />
        </div>

        {/* Experience Timeline */}
        <section
          id="experience"
          className="mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Experience
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="font-semibold">DEPI</span> - Data Scientist
                (2024 - 2025)
              </AccordionTrigger>
              <AccordionContent>
                Detailed description of responsibilities and achievements in
                this role.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="font-semibold">CIB</span> - Intern (2014 -
                2024)
              </AccordionTrigger>
              <AccordionContent>
                Detailed description of responsibilities and achievements in
                this role.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge>Python</Badge>
            <Badge>NumPy</Badge>
            <Badge>Pandas</Badge>
            <Badge>SQL</Badge>
            <Badge>Scikit-learn</Badge>
            <Badge>Tableau</Badge>
            <Badge>Power BI</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            {/* Add more skills here */}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Contact
            </h2>
            <p className="dark:text-gray-300 text-gray-600 mb-4">
              I'm eager to join a data-driven team where I can apply my passion
              for AI, machine learning, and problem-solving to create meaningful
              impact.
              <br /> Got a project in mind or looking to collaborate? Let's
              connect!
            </p>
            <p className="dark:text-white text-black mb-4">
              ahmedalhofy42@gmail.com
            </p>
            <div className="flex justify-center items-center space-x-4">
              <a
                href="mailto:ahmedalhofy42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alhofy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/AhmedAyman4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t py-6 text-center text-sm text-muted-foreground">
        <p className="mt-2">
          Built and designed by Ahmed Ayman.
          <br />
          All rights reserved. ©
        </p>
      </footer>
    </div>
  );
}
