import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import { CERTIFICATIONS } from "@/lib/certificationsData";
import "@/styles/components/CoursesAndCertifications.css";

export function CoursesAndCertifications() {
  const displayedCertifications = CERTIFICATIONS.slice(0, 3);

  return (
    <div className="certifications-container">
      <FadeInSection>
        <SectionHeader
          label="Continuous Learning"
          title="Courses & Certifications"
        />
      </FadeInSection>

      <div className="certifications-wrapper">
        <Accordion type="single" collapsible className="certifications-accordion">
          {displayedCertifications.map((cert, index) => (
            <FadeInSection key={cert.id}>
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

        {CERTIFICATIONS.length > 3 && (
          <FadeInSection>
            <div className="certifications-view-all-container">
              <Link
                href="/certificates"
                className="group certifications-view-all-link"
              >
                View All Certificates
                <ArrowRight className="certifications-view-all-icon" />
              </Link>
            </div>
          </FadeInSection>
        )}
      </div>
    </div>
  );
}
