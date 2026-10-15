import { Reveal } from "@/components/interactions";

export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}
