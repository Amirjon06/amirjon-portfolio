import type { ReactNode } from "react";

/**
 * SectionTheme — transparent section wrapper.
 * The unified galaxy background comes from ScrollBackground (fixed canvas).
 */
export default function SectionTheme({
  id,
  theme: _theme,
  children,
  className = "",
}: {
  id?: string;
  theme: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}