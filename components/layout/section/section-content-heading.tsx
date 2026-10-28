export function SectionContentHeading({ heading }: { heading: string }) {
  return (
    <h2 className="text-4xl leading-12 md:text-5xl md:leading-15 font-bold font-heading ">
      {heading}
    </h2>
  );
}
