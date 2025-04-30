// components/ContactSection.tsx
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <div id="contact" className="text-center">
      <h2 className="text-3xl font-semibold text-primary mb-4 dark:text-[hsl(215,100%,90%)]">
        Contact
      </h2>
      <p className="dark:text-gray-300 text-gray-600 mb-4">
        I'm eager to join a data-driven team where I can apply my passion for
        AI, machine learning, and problem-solving to create meaningful impact.
        <br /> Got a project in mind or looking to collaborate? Let's connect!
      </p>
      <p className="dark:text-white text-black mb-4">ahmedalhofy42@gmail.com</p>
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
  );
}
