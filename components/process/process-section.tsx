import { AppSection } from "@/components/layout/section/app-section";
import { SectionHeader } from "@/components/layout/section/section-header";
import { SectionContentHeading } from "@/components/layout/section/section-content-heading";
import { ProcessCard, ProcessCardProps } from "./process-card";

const processSteps: ProcessCardProps[] = [
  {
    number: "1",
    title: "Discover",
    description:
      "Deep-diving into project requirements, target audience, and core objectives to establish a robust foundation.",
    tags: ["research", "requirements", "user flow"],
  },
  {
    number: "2",
    title: "Define",
    description:
      "Structuring system architecture, data models, and setting clear functional scope and technical constraints.",
    tags: ["scope", "constraints", "architecture"],
  },
  {
    number: "3",
    title: "Design",
    description:
      "Crafting intuitive, accessible interfaces and modular component systems with meticulous attention to detail.",
    tags: ["wireframes", "components", "interactions"],
  },
  {
    number: "4",
    title: "Deliver",
    description:
      "Executing rigorous testing, performance tuning, and seamless deployment with ongoing monitoring.",
    tags: ["testing", "optimization", "deployment"],
  },
];

export const ProcessSection = () => {
  return (
    <AppSection>
      <SectionHeader number="04" title="Process" />
      <SectionContentHeading heading="A clear process. Thoughtful execution." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {processSteps.map((step) => (
          <ProcessCard key={step.title} {...step} />
        ))}
      </div>
    </AppSection>
  );
};
