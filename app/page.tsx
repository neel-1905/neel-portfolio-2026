import { HeroSection, Stats } from "@/components/hero";

import { AboutSection } from "@/components/about";
import { ProjectsSection } from "@/components/projects";
import { TechnologiesSection } from "@/components/technologies";
import { ProcessSection } from "@/components/process";
import { ExperienceSection } from "@/components/experience";

function App() {
  return (
    <div>
      <HeroSection />
      <Stats />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ProcessSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
