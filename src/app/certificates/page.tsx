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
import "@/styles/components/CoursesAndCertifications.css";

export default function CertificatesPage() {
  return (
    <div className="layout-container">
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
      
      <main className="main-content py-20 mt-10">
        <div className="w-full relative">
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

          <div className="certifications-wrapper !mt-2 !mb-20">
            <Accordion type="single" collapsible className="certifications-accordion">
              {CERTIFICATIONS.map((cert, index) => (
                <FadeInSection key={cert.id} delay={`${0.2 + (index % 10) * 0.05}s`}>
                  <AccordionItem
                    value={cert.id}
                    className="group certifications-accordion-item"
                  >
                    <AccordionTrigger className="certifications-accordion-trigger">
                      <div className="flex flex-col text-left w-full overflow-hidden">
                        <div className="w-full">
                          <h3 className="certifications-accordion-title">
                            {cert.title}
                          </h3>
                          <div className="certifications-issuer-container">
                            <span className="certifications-issuer-text">
                              {cert.issuer}
                            </span>
                            <div className="certifications-issuer-dot"></div>
                            <span className="certifications-date-text">
                              {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 pt-0">
                      <div className="certifications-accordion-content">

                        {cert.image && (
                          <div className="certifications-image-container">
                            <Image 
                              src={cert.image} 
                              alt={cert.title} 
                              width={1200} 
                              height={800} 
                              className="certifications-image"
                            />
                          </div>
                        )}
                        {cert.link && cert.link !== "#" && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certifications-credential-link"
                          >
                            View Credential
                            <ExternalLink className="h-3.5 w-3.5" />
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
