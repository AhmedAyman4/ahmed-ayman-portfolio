import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";

const CERTIFICATIONS = [
  {
    id: "item-1",
    title: "SAP Certified Associate - SAP Generative AI Developer",
    issuer: "SAP",
    date: "2025",
    description:
      "Official certification validating expertise in developing and integrating generative AI solutions within the SAP ecosystem. (Proctored Exam C_AIG_2412 - Passed on September 25th, 2025)",
    image: "/images/CoursesAndCertifications/Ahmed Alhofy SAP Certified Associate - SAP Generative AI Developer.jpg",
    link: "https://www.credly.com/badges/f689025c-3b2e-4163-afa4-cd6abd275ee6/linked_in_profile",
  },
  {
    id: "item-2",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "2025",
    description:
      "Earners of this badge understand AI, ML, and generative AI concepts, methods, and strategies in general and on AWS. They can determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly.",
    image: "/images/CoursesAndCertifications/AWS Certified AI Practitioner certificate_page-0001.jpg",
    link: "https://www.credly.com/badges/755dc8fb-e046-4945-b12e-d56e873e8659/linked_in_profile",
  },
  {
    id: "item-3",
    title: "Data Scientist Associate",
    issuer: "DataCamp",
    date: "2024",
    description:
      "Professional certification validating foundational data science skills, including statistical analysis, data manipulation with Python/SQL, and exploratory data analysis. (ID: DSA0019876659394)",
    image: "/images/CoursesAndCertifications/Data Scientist Associate.jpg",
    link: "https://www.datacamp.com/certificate/DSA0019876659394",
  },
  {
    id: "item-4",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    description:
      "Comprehensive program covering the entire data analytics process, including data cleaning, analysis, and visualization using tools like SQL, R, and Tableau to drive data-informed decision-making.",
    image: "/images/CoursesAndCertifications/Google Data Analytics_page-0001.jpg",
    link: "https://www.credly.com/badges/ba202583-d839-4158-9fde-cfff5c8c283b/linked_in_profile",
  },
];

export function CoursesAndCertifications() {
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
          {CERTIFICATIONS.map((cert, index) => (
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
      </div>
    </div>
  );
}
