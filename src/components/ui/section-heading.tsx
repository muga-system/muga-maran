import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("max-w-4xl", isCenter && "mx-auto text-center")}>
      <p className="signal-label">{subtitle}</p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}
