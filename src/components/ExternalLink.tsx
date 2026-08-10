import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ExternalHint } from "@/components/ExternalHint";

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<"a">, "target" | "rel"> & {
  children: ReactNode;
  showHint?: boolean;
};

/** External anchor with safe rel + optional screen-reader hint. */
export function ExternalLink({ children, showHint = true, className = "", ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {showHint ? <ExternalHint /> : null}
    </a>
  );
}
