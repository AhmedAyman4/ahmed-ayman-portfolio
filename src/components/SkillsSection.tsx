// components/SkillsSection.tsx
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <div id="skills">
      <h2 className="text-3xl font-semibold text-primary mb-8 text-center dark:text-[hsl(215,100%,90%)]">
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
    </div>
  );
}
