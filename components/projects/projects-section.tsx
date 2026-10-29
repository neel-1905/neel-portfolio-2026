import {
  AppSection,
  SectionContentHeading,
  SectionHeader,
} from "../layout/section";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <AppSection>
      <SectionHeader number={"02"} title="Recent Projects" />
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-4/7">
          <SectionContentHeading heading="A few things I've brought to life." />
        </div>
        <div className="w-full md:w-3/7">
          <p className="section-text">
            Selected projects combining thoughtful interfaces, robust
            distributed systems, and quantifiable real-world value.
          </p>
        </div>
      </div>

      <div>
        <ProjectCard />
      </div>
    </AppSection>
  );
}
