import { HeroSection, Stats } from "@/components/hero";

import { AboutSection } from "@/components/about";
import { ProjectsSection } from "@/components/projects";

function App() {
  return (
    <div>
      <HeroSection />
      <Stats />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
