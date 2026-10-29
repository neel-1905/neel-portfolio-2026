import { HeroSection, Stats } from "@/components/hero";

import { AboutSection } from "@/components/about";
import { ProjectsSection } from "@/components/projects";
import { TechnologiesSection } from "@/components/technologies";

function App() {
  return (
    <div>
      <HeroSection />
      <Stats />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
