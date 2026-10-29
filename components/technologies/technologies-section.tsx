import { AppSection } from "@/components/layout/section/app-section";
import { SectionHeader } from "@/components/layout/section/section-header";
import { SectionContentHeading } from "@/components/layout/section/section-content-heading";
import { TechCard, TechCardProps } from "@/components/technologies/tech-card";
import { Layout, Server, Cloud, Wrench } from "lucide-react";

const technologies: TechCardProps[] = [
  {
    title: "Frontend Architecture",
    description:
      "Crafting pixel-perfect, accessible, and ultra-responsive user interfaces with fine-grained state handling.",
    Icon: Layout,
    techs: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "Engineering high-concurrency microservices, robust REST & GraphQL contracts, and strict security layers.",
    Icon: Server,
    techs: ["Node.js", "Nest.js", "Express", "REST API", "Schema Design"],
  },
  {
    title: "Data & Infra",
    description:
      "Structuring schema migrations, in-memory caches, and deployments.",
    Icon: Cloud,
    techs: ["PostgreSQL", "MongoDB", "Prisma ORM", "GitHub", "Supabase"],
  },
  {
    title: "Tools & Workflow",
    description:
      "Optimizing development lifecycle with modern tooling and version control best practices.",
    Icon: Wrench,
    techs: ["Git", "ESLint", "Prettier", "Turbo"],
  },
];

export const TechnologiesSection = () => {
  return (
    <AppSection>
      <SectionHeader number="03" title="Technologies" />
      <SectionContentHeading heading="The Tools behind the Work" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {technologies.map((tech) => (
          <TechCard key={tech.title} {...tech} />
        ))}
      </div>
    </AppSection>
  );
};
