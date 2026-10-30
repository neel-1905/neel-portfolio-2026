"use client";

import {
  AppSection,
  SectionContentHeading,
  SectionHeader,
} from "../layout/section";
import { CurrentFocusCard } from "./current-focus-card";
import { StaggerContainer, StaggerItem, Reveal } from "../shared";

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
          <div>
            <Reveal>
              <SectionContentHeading heading="Engineering meets thoughtful design." />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="section-text mt-4">
                I enjoy turning challenging engineering problems into simple,
                reliable products. My approach combines clean, modular architecture,
                human-centered UX design, and a stubborn obsession with latency,
                maintainability, and micro-details.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsData.map((card, index) => (
              <StaggerItem key={card.title}>
                <div className="card flex flex-col gap-3 h-full hover:border-primary/50 transition-colors duration-300">
                  <span className={`font-medium font-mono ${card.color}`}>
                    0{index + 1}
                  </span>
                  <h3 className="text-foreground font-medium text-2xl">
                    {card.title}
                  </h3>
                  <p className="body-text">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="w-full lg:w-3/7">
          <Reveal delay={0.3}>
            <CurrentFocusCard />
          </Reveal>
        </div>
      </div>
    </AppSection>
  );
}
