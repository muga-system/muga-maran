import type { PropsWithChildren } from "react";

type PillProps = PropsWithChildren;

export function Pill({ children }: PillProps) {
  return <span className="terrain-pill">{children}</span>;
}
