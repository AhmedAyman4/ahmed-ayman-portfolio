// components/SkillsSection.tsx
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <div id="skills">
      <h2 className="text-3xl font-semibold text-primary mb-8 text-center dark:text-[hsl(215,100%,90%)]">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Badge className="dark:text-[hsl(215,100%,90%)]">Python</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">NumPy</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">Pandas</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">SQL</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">Scikit-learn</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">Tableau</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">Power BI</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">React</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">Next.js</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">HTML</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">CSS</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">JavaScript</Badge>
        <Badge className="dark:text-[hsl(215,100%,90%)]">TypeScript</Badge>
        {/* Add more skills here */}
      </div>
    </div>
  );
}