"use client";

import { GreenDot } from "@/components/shared/green-dot";
import { motion } from "motion/react";

export interface ProcessCardProps {
  number: string | number;
  title: string;
  description: string;
  tags: string[];
}

export const ProcessCard = ({
  number,
  title,
  description,
  tags,
}: ProcessCardProps) => {
  const numStr = String(number);
  const formattedNumber = numStr.startsWith("0")
    ? numStr
    : numStr.padStart(2, "0");

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="card flex flex-col justify-between gap-4 h-full hover:border-primary/50 transition-colors duration-300 group"
    >
      <div className="flex flex-col gap-4">
        {/* First row: Stage 0num and dot on far right */}
        <div className="flex items-center justify-between">
          <span className="font-mono font-bold uppercase text-xs text-foreground-muted group-hover:text-primary transition-colors">
            Stage {formattedNumber}
          </span>
          <div className="group-hover:scale-125 transition-transform duration-300">
            <GreenDot />
          </div>
        </div>

        {/* Second row & Third row: Title and Description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-heading font-medium text-foreground">
            {title}
          </h3>
          <p className="body-text">{description}</p>
        </div>
      </div>

      <div>
        <div className="h-px bg-border my-4" />

        {/* Below border: text separated by dot with muted colors, not pills, using font mono */}
        <div className="font-mono text-sm text-foreground-muted">
          {tags.join(" • ")}
        </div>
      </div>
    </motion.div>
  );
};
