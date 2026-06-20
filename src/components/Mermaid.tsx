"use client";

import { useEffect, useRef, useState } from "react";

export default function Mermaid({ chart, id }: { chart: string; id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          background: "#11161F",
          primaryColor: "#161D2B",
          primaryTextColor: "#E6EAF2",
          primaryBorderColor: "#222B3D",
          lineColor: "#5EEAD4",
          secondaryColor: "#1c2433",
          tertiaryColor: "#0A0E17",
          fontFamily: "var(--font-mono)",
        },
        securityLevel: "strict",
      });

      try {
        const { svg: rendered } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(rendered);
      } catch {
        if (!cancelled) setSvg(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div ref={ref} className="mermaid-wrap overflow-x-auto rounded-lg border border-border bg-surface p-4">
      {svg ? (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="flex h-32 items-center justify-center font-mono text-xs text-muted">
          rendering architecture diagram…
        </div>
      )}
    </div>
  );
}
