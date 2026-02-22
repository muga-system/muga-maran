import type { LucideIcon } from "lucide-react";
import { Clock3, FileText, Leaf, ShieldCheck, Trash2, Trees } from "lucide-react";

import { cn } from "@/lib/cn";

type IconName = "field" | "cleanup" | "maintenance" | "plan" | "shield" | "time";

type IconBadgeProps = {
  name: IconName;
  className?: string;
};

export function IconBadge({ name, className }: IconBadgeProps) {
  const icons: Record<IconName, LucideIcon> = {
    field: Leaf,
    cleanup: Trash2,
    maintenance: Trees,
    plan: FileText,
    shield: ShieldCheck,
    time: Clock3
  };
  const Icon = icons[name];

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center border border-foreground/55 bg-surface/70 text-foreground backdrop-blur-[2px]",
        className
      )}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </span>
  );
}
