"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft, Home } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { CERTIFICATIONS } from "@/lib/certificationsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/#experience", label: "Experience" },
          { href: "/#projects", label: "Projects" },
          { href: "/#certifications", label: "Certifications" },
          { href: "/#skills", label: "Skills" },
          { href: "/#contact", label: "Contact" },
        ]}
      />
      
      <main className="container mx-auto flex-grow px-4 md:px-8 lg:px-24 xl:px-28 py-20 mt-10">
        <div className="w-full relative px-2">
          <FadeInSection delay="0.1s">
            <div className="flex flex-col items-center justify-center gap-4 mb-12">
              <SectionHeader
                label="Achievements & Credentials"
                title="All Certificates"
                className="mb-0"
              />
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-normal hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 w-fit"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto mt-2 mb-20">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {CERTIFICATIONS.map((cert, index) => (
                <FadeInSection key={cert.id} delay={`${0.2 + (index % 10) * 0.05}s`}>
                  <AccordionItem
                    value={cert.id}
                    className="group border border-gray-200 dark:border-white/10 rounded-xl px-4 bg-white dark:bg-black/20 backdrop-blur-none dark:backdrop-blur-md shadow-sm data-[state=open]:shadow-md transition-all duration-300 hover:border-teal-500/30 dark:hover:border-[#4de9d2]/30"
                  >
                    <AccordionTrigger className="hover:no-underline py-2.5 group-data-[state=open]:pb-2 transition-all duration-300">
                      <div className="flex flex-col text-left">
                        <div>
                          <h3 className="font-medium text-base md:text-lg text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-[#4de9d2] transition-colors duration-300">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-400">
                              {cert.issuer}
                            </span>
                            <div className="w-1 h-1 bg-teal-500 dark:bg-[#4de9d2] rounded-full opacity-60"></div>
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-500">
                              {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-1">
                      <div className="flex flex-col gap-5">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                          {cert.description}
                        </p>
                        {cert.image && (
                          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 shadow-sm mt-1">
                            <Image 
                              src={cert.image} 
                              alt={cert.title} 
                              width={1600} 
                              height={1000} 
                              className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
                            />
                          </div>
                        )}
                        {cert.link && cert.link !== "#" && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-[#4de9d2] hover:text-teal-700 dark:hover:text-[#3dd1b5] transition-colors w-fit pb-2"
                          >
                            View Official Credential
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </FadeInSection>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
