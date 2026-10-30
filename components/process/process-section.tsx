"use client";

import { AppSection } from "@/components/layout/section/app-section";
import { SectionHeader } from "@/components/layout/section/section-header";
import { SectionContentHeading } from "@/components/layout/section/section-content-heading";
import { ProcessCard, ProcessCardProps } from "./process-card";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/shared";

const processSteps: ProcessCardProps[] = [
  {
    number: "1",
    title: "Discover",
    description:
      "Deconstruct the core challenge, clarify requirements with stakeholders, and define unambiguous success metrics and user stories.",
    tags: ["Scope", "Constraints", "User Flow"],
  },
  {
    number: "2",
    title: "Architect",
    description:
      "Design relational schemas, outline API contracts, choose suitable runtime runtimes, and establish long-term code maintainability.",
    tags: ["Data Models", "Tech Stack", "Security"],
  },
  {
    number: "3",
    title: "Build",
    description:
      "Execute iterative sprints with rigorous type safety, unit coverage, modular UI components, and accessible micro-interactions.",
    tags: ["Clean Code", "Tests", "Polish"],
  },
  {
    number: "4",
    title: "Ship & Refine",
    description:
      "Automated canary deployments, continuous uptime telemetry, latency benchmarking, and iterative improvements driven by user analytics.",
    tags: ["Integration", "Optimization", "Deployment"],
  },
];

export const ProcessSection = () => {
  return (
    <AppSection>
      <SectionHeader number="04" title="Process" />
      <Reveal>
        <SectionContentHeading heading="A clear process. Thoughtful execution." />
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {processSteps.map((step) => (
          <StaggerItem key={step.title}>
            <ProcessCard {...step} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AppSection>
  );
};
