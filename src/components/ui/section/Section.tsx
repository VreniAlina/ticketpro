import type { ReactNode } from "react";
import "./section.scss";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`section resume-card ${className ?? ""}`}>
      {children}
    </section>
  );
}
