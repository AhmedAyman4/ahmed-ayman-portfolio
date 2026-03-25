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

export function CoursesAndCertifications() {
  const displayedCertifications = CERTIFICATIONS.slice(0, 3);

  return (
    <div className="w-full relative px-2">
      <FadeInSection delay="0.1s">
        <SectionHeader
          label="Continuous Learning"
          title="Courses & Certifications"
        />
      </FadeInSection>

      <div className="max-w-4xl mx-auto mt-2 mb-20">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {displayedCertifications.map((cert, index) => (
            <FadeInSection key={cert.id} delay={`${0.2 + index * 0.1}s`}>
              <AccordionItem
                value={cert.id}
                className="group border border-gray-200 dark:border-white/10 rounded-xl px-4 bg-white dark:bg-black/20 backdrop-blur-none dark:backdrop-blur-md shadow-sm data-[state=open]:shadow-md transition-all duration-300 hover:border-teal-500/30 dark:hover:border-[#4de9d2]/30"
              >
                <AccordionTrigger className="hover:no-underline py-2.5 group-data-[state=open]:pb-2 transition-all duration-300">
                  <div className="flex flex-col text-left">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-[#4de9d2] transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {cert.issuer}
                        </span>
                        <div className="w-1 h-1 bg-teal-500 dark:bg-[#4de9d2] rounded-full opacity-60"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-3 pt-0">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[0.825rem]">
                      {cert.description}
                    </p>
                    {cert.image && (
                      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 shadow-sm mt-1">
                        <Image 
                          src={cert.image} 
                          alt={cert.title} 
                          width={1200} 
                          height={800} 
                          className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-[#4de9d2] hover:text-teal-700 dark:hover:text-[#3dd1b5] transition-colors w-fit"
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
          <FadeInSection delay="0.5s">
            <div className="mt-8 flex justify-center">
              <Link
                href="/certificates"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:border-teal-500/30 dark:hover:border-[#4de9d2]/30 transition-all duration-300"
              >
                View All Certificates
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
        )}
      </div>
    </div>
  );
}
