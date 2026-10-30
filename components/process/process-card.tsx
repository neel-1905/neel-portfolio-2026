import { GreenDot } from "@/components/shared/green-dot";

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
  const formattedNumber = numStr.startsWith("0") ? numStr : numStr.padStart(2, "0");

  return (
    <div className="card flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        {/* First row: Stage 0num and dot on far right */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-foreground-muted">
            Stage {formattedNumber}
          </span>
          <GreenDot />
        </div>

        {/* Second row & Third row: Title and Description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold font-heading text-foreground">{title}</h3>
          <p className="body-text">{description}</p>
        </div>
      </div>

      <div>
        <div className="h-px bg-border my-4" />

        {/* Below border: text separated by dot with muted colors, not pills, using font mono */}
        <div className="font-mono text-xs text-foreground-muted">
          {tags.join(" • ")}
        </div>
      </div>
    </div>
  );
};
