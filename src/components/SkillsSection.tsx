// components/SkillsSection.tsx
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <div id="skills">
      <h2 className="text-3xl font-semibold text-primary mb-8 text-center dark:text-[hsl(215,100%,90%)]">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">Python</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">NumPy</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">Pandas</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">SQL</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">Scikit-learn</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">Tableau</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">Power BI</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">React</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">Next.js</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">HTML</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">CSS</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">JavaScript</Badge>
        <Badge className="dark:bg-[hsl(215,50%,50%)] dark:hover:bg-[hsl(215,50%,45%)]">TypeScript</Badge>
        {/* Add more skills here */}
      </div>
    </div>
  );
}