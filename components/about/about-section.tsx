import {
  AppSection,
  SectionContentHeading,
  SectionHeader,
} from "../layout/section";
import { CurrentFocusCard } from "./current-focus-card";

const cardsData = [
  {
    title: "Build with purpose",
    description:
      "Every feature addresses verified friction points or generates clear, measurable utility.",
    color: "text-primary",
  },
  {
    title: "Design for People",
    description:
      "Software should feel intuitive, visually calm, and respectful of user attention.",
    color: "text-secondary",
  },
  {
    title: "Engineer for Scale",
    description:
      "Resilient architectures structured with clear domain barriers and rigorous tests.",
    color: "text-tertiary",
  },
];

export function AboutSection() {
  return (
    <AppSection>
      <SectionHeader number={"01"} title="About" />
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        <div className="w-full lg:w-4/7 flex flex-col justify-between gap-8">
          <SectionContentHeading heading="Engineering meets thoughtful design." />
          <p className="section-text">
            I enjoy turning challenging engineering problems into simple,
            reliable products. My approach combines clean, modular architecture,
            human-centered UX design, and a stubborn obsession with latency,
            maintainability, and micro-details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsData.map((card, index) => (
              <div className="card flex flex-col gap-3" key={card.title}>
                <span className={`font-medium font-mono ${card.color}`}>
                  0{index + 1}
                </span>
                <h3 className="text-foreground font-medium text-2xl">
                  {card.title}
                </h3>
                <p className="body-text">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/7">
          <CurrentFocusCard />
        </div>
      </div>
    </AppSection>
  );
}
