export function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h1 className="text-base font-bold font-mono text-primary">
        {number} / {title}
      </h1>
      <div className="h-px bg-border w-16" />
    </div>
  );
}
