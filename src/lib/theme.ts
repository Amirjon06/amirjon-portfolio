export type ThemeId =
  | "cyan-amber"
  | "violet-blue"
  | "emerald-cyan"
  | "crimson-orange"
  | "sky-indigo"
  | "rose-amber"
  | "lime-emerald"
  | "fuchsia-cyan";

export type ThemeDef = {
  id: ThemeId;
  label: string;
  dot: string;
  vars: Record<string, string>;
};

export const THEMES: ThemeDef[] = [
  {
    id: "cyan-amber",
    label: "Cyan / Amber",
    dot: "#5EEAD4",
    vars: {
      "--color-signal": "94,234,212",
      "--color-accent": "242,181,68",
      "--rgb-signal": "94 234 212",
      "--rgb-accent": "242 181 68",
      "--color-glow": "94,234,212",
      "--color-particle": "94,234,212",
      "--color-line": "94,234,212",
      "--hex-signal": "#5EEAD4",
      "--hex-accent": "#F2B544",
    },
  },
  {
    id: "violet-blue",
    label: "Violet / Blue",
    dot: "#a78bfa",
    vars: {
      "--color-signal": "167,139,250",
      "--color-accent": "96,165,250",
      "--rgb-signal": "167 139 250",
      "--rgb-accent": "96 165 250",
      "--color-glow": "167,139,250",
      "--color-particle": "167,139,250",
      "--color-line": "139,92,246",
      "--hex-signal": "#a78bfa",
      "--hex-accent": "#60a5fa",
    },
  },
  {
    id: "emerald-cyan",
    label: "Emerald / Cyan",
    dot: "#34d399",
    vars: {
      "--color-signal": "52,211,153",
      "--color-accent": "34,211,238",
      "--rgb-signal": "52 211 153",
      "--rgb-accent": "34 211 238",
      "--color-glow": "52,211,153",
      "--color-particle": "52,211,153",
      "--color-line": "52,211,153",
      "--hex-signal": "#34d399",
      "--hex-accent": "#22d3ee",
    },
  },
  {
    id: "crimson-orange",
    label: "Crimson / Orange",
    dot: "#f87171",
    vars: {
      "--color-signal": "248,113,113",
      "--color-accent": "251,146,60",
      "--rgb-signal": "248 113 113",
      "--rgb-accent": "251 146 60",
      "--color-glow": "248,113,113",
      "--color-particle": "248,113,113",
      "--color-line": "248,113,113",
      "--hex-signal": "#f87171",
      "--hex-accent": "#fb923c",
    },
  },
  {
    id: "sky-indigo",
    label: "Sky / Indigo",
    dot: "#38bdf8",
    vars: {
      "--color-signal": "56,189,248",
      "--color-accent": "129,140,248",
      "--rgb-signal": "56 189 248",
      "--rgb-accent": "129 140 248",
      "--color-glow": "56,189,248",
      "--color-particle": "56,189,248",
      "--color-line": "56,189,248",
      "--hex-signal": "#38bdf8",
      "--hex-accent": "#818cf8",
    },
  },
  {
    id: "rose-amber",
    label: "Rose / Amber",
    dot: "#fb7185",
    vars: {
      "--color-signal": "251,113,133",
      "--color-accent": "251,191,36",
      "--rgb-signal": "251 113 133",
      "--rgb-accent": "251 191 36",
      "--color-glow": "251,113,133",
      "--color-particle": "251,113,133",
      "--color-line": "251,113,133",
      "--hex-signal": "#fb7185",
      "--hex-accent": "#fbbf24",
    },
  },
  {
    id: "lime-emerald",
    label: "Lime / Emerald",
    dot: "#a3e635",
    vars: {
      "--color-signal": "163,230,53",
      "--color-accent": "52,211,153",
      "--rgb-signal": "163 230 53",
      "--rgb-accent": "52 211 153",
      "--color-glow": "163,230,53",
      "--color-particle": "163,230,53",
      "--color-line": "163,230,53",
      "--hex-signal": "#a3e635",
      "--hex-accent": "#34d399",
    },
  },
  {
    id: "fuchsia-cyan",
    label: "Fuchsia / Cyan",
    dot: "#e879f9",
    vars: {
      "--color-signal": "232,121,249",
      "--color-accent": "34,211,238",
      "--rgb-signal": "232 121 249",
      "--rgb-accent": "34 211 238",
      "--color-glow": "232,121,249",
      "--color-particle": "232,121,249",
      "--color-line": "232,121,249",
      "--hex-signal": "#e879f9",
      "--hex-accent": "#22d3ee",
    },
  },
];

export function applyTheme(id: ThemeId) {
  const theme = THEMES.find((t) => t.id === id) ?? THEMES[0];
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

export function getStoredTheme(): ThemeId {
  if (typeof window === "undefined") return "cyan-amber";
  return (localStorage.getItem("portfolio-theme") as ThemeId) ?? "cyan-amber";
}

export function saveTheme(id: ThemeId) {
  localStorage.setItem("portfolio-theme", id);
}
