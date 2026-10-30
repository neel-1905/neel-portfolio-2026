"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export interface TechCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  techs: string[];
}

export const TechCard = ({
  title,
  description,
  Icon,
  techs,
}: TechCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="card flex flex-col justify-between gap-4 group hover:border-primary/50 transition-colors duration-300 h-full"
    >
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="size-12 rounded-lg bg-card border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
          <Icon size={24} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold font-heading">{title}</h3>
          <p className="body-text">{description}</p>
        </div>
      </div>

      <div>
        <div className="h-px bg-border my-4" />

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-background text-foreground-muted text-xs rounded-lg border border-border group-hover:border-border/80 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
