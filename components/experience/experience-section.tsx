import { AppSection } from "@/components/layout/section/app-section";
import { SectionHeader } from "@/components/layout/section/section-header";
import { SectionContentHeading } from "@/components/layout/section/section-content-heading";
import { ExperienceCard } from "@/components/experience/experience-card";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Spectriv Technologies",
    description:
      "Developed and optimized Next.js dashboards using SSR/SSG and reusable component architecture. Built 20+ reusable UI components and implemented error boundaries, reducing UI-related bugs by 20%. Leveraged AI-assisted tools like Claude and GitHub Copilot to streamline development and improve code quality.",
    techs: ["Next.js", "React", "Node.js", "PostgreSQL"],
    period: "2023 - Present",
  },
  {
    role: "Frontend Developer",
    company: "Growhut",
    description:
      "Developed React applications by integrating 100+ REST APIs and enabling real-time data updates. Identified and resolved 15+ frontend performance bottlenecks, reducing load times by 2 seconds. Collaborated with design, product, and backend teams to deliver responsive features through Agile workflows and code reviews.",
    techs: ["React", "Next", "TypeScript", "Framer Motion", "TailwindCSS"],
    period: "2021 - 2023",
  },
  {
    role: "Full Stack Developer",
    company: "Furation Tech Solutions",
    description:
      "Built and maintained 5+ full-stack web applications using React.js, Next.js, Node.js, and MongoDB. Improved SEO, accessibility, and page performance, contributing to over 1,150 monthly organic users. Established reusable component standards and scalable architecture patterns across multiple projects.",
    techs: ["React.js", "Node.js", "Express.js", "JavaScript", "Express"],
    period: "2019 - 2021",
  },
];

export const ExperienceSection = () => {
  return (
    <AppSection>
      <SectionHeader number="05" title="Experience" />
      <SectionContentHeading heading="Growing through building" />

      <div className="flex flex-col gap-6 mt-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </AppSection>
  );
};
