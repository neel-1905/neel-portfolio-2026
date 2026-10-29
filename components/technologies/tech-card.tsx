import { LucideIcon } from "lucide-react";

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
    <div className="card flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="size-12 rounded-lg bg-card border flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold font-heading">{title}</h3>
          <p className="body-text">{description}</p>
        </div>
      </div>

      <div className="">
        <div className="h-px bg-border my-4" />

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-background text-foreground-muted text-xs rounded-lg border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
