export interface ExperienceCardProps {
  role: string;
  company: string;
  description: string;
  techs: string[];
  period: string;
}

export const ExperienceCard = ({
  role,
  company,
  description,
  techs,
  period,
}: ExperienceCardProps) => {
  return (
    <div className="card w-full flex flex-col md:flex-row justify-between gap-4 md:items-start group">
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Role & Company */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">{role}</h3>
          <span className="text-muted-foreground">•</span>
          <span className="font-mono text-secondary text-sm">{company}</span>
        </div>

        {/* Row 2: Description */}
        <p className="body-text max-w-2xl">{description}</p>

        {/* Row 3: Techs */}
        <div className="flex flex-wrap gap-2 mt-1">
          {techs.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-foreground-muted/70 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right: Period */}
      <div className="font-mono text-sm text-foreground-muted whitespace-nowrap md:pt-1">
        {period}
      </div>
    </div>
  );
};
