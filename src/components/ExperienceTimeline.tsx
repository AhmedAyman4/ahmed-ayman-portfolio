// components/ExperienceTimeline.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExperienceTimeline() {
  return (
    <div id="experience">
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
    </div>
  );
}