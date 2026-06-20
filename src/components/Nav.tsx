"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { profile } from "@/data/content";
import { THEMES, applyTheme, getStoredTheme, saveTheme, type ThemeId } from "@/lib/theme";
import Logo from "@/components/Logo";

const links = [
  { href: "/about",      section: "about",      label: "About" },
  { href: "/experience", section: "experience", label: "Experience" },
  { href: "/projects",   section: "projects",   label: "Projects" },
  { href: "/skills",     section: "skills",     label: "Skills" },
  { href: "/contact",    section: "contact",    label: "Contact" },
];

export default function Nav() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTheme, setActiveTheme]     = useState<ThemeId>("cyan-amber");
  const pathname = usePathname();
  const router   = useRouter();
  const isHome   = pathname === "/";

  useEffect(() => {
    const stored = getStoredTheme();
    setActiveTheme(stored);
    applyTheme(stored);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!isHome) { setActiveSection(null); return; }
    function update() {
      const offset = 120;
      let current: string | null = null;
      for (const l of links) {
        const el = document.getElementById(l.section);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = l.section;
      }
      setActiveSection(current);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  if (pathname?.startsWith("/dashboard")) return null;

  function handleLinkClick(e: React.MouseEvent, section: string, href: string) {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${section}`);
      } else {
        router.push(href);
      }
    }
  }

  function handleThemeSelect(id: ThemeId) {
    setActiveTheme(id);
    applyTheme(id);
    saveTheme(id);
  }

  function isActive(l: (typeof links)[number]) {
    if (isHome) return activeSection === l.section;
    return pathname === l.href;
  }

  const currentThemeDot = THEMES.find(t => t.id === activeTheme)?.dot ?? "#5EEAD4";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[rgba(10,14,23,0.82)] backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      {/* theme-driven hover/active colors (uses CSS vars, so it tracks the theme) */}
      <style>{`
        .aa-link { color: rgba(255,255,255,0.72); transition: color .2s ease; }
        .aa-link:hover { color: var(--hex-signal); }
        .aa-link.is-active { color: var(--hex-signal); }
        .aa-name { color: #fff; transition: color .2s ease; }
        .aa-group:hover .aa-name { color: var(--hex-signal); }
        .aa-burger { color: #fff; transition: color .2s ease; }
        .aa-burger:hover { color: var(--hex-signal); }
        .aa-underline { background: var(--hex-signal); }
      `}</style>

      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-16">

        {/* Logo + name — name turns theme color on hover */}
        <Link href="/" className="aa-group flex items-center gap-3">
          <Logo size={34} />
          <span className="aa-name font-display text-lg font-bold tracking-tight">
            {profile.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={isHome ? `#${l.section}` : l.href}
              onClick={(e) => handleLinkClick(e, l.section, l.href)}
              className={`aa-link relative text-[15px] font-semibold tracking-wide ${isActive(l) ? "is-active" : ""}`}
            >
              {l.label}
              {isActive(l) && (
                <span className="aa-underline absolute -bottom-1 left-0 h-[2px] w-full rounded-full" />
              )}
            </Link>
          ))}

          {/* Lightning bolt theme cycler */}
          <button
            onClick={() => {
              const idx  = THEMES.findIndex(t => t.id === activeTheme);
              const next = THEMES[(idx + 1) % THEMES.length];
              handleThemeSelect(next.id);
            }}
            aria-label="Cycle colour theme"
            title={`Theme: ${THEMES.find(t => t.id === activeTheme)?.label}`}
            className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-all hover:border-white/25 hover:bg-white/[0.08]"
            style={{ boxShadow: `0 0 10px ${currentThemeDot}28` }}
          >
            <Zap
              size={14}
              className="transition-transform group-hover:scale-110"
              style={{ color: currentThemeDot, filter: `drop-shadow(0 0 5px ${currentThemeDot})` }}
            />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="aa-burger md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/5 bg-[rgba(10,14,23,0.96)] px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={isHome ? `#${l.section}` : l.href}
                onClick={(e) => handleLinkClick(e, l.section, l.href)}
                className={`aa-link text-base font-semibold ${isActive(l) ? "is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Theme</span>
              <button
                onClick={() => {
                  const idx  = THEMES.findIndex(t => t.id === activeTheme);
                  const next = THEMES[(idx + 1) % THEMES.length];
                  handleThemeSelect(next.id);
                }}
                className="aa-link flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold"
              >
                <Zap size={12} style={{ color: currentThemeDot }} />
                {THEMES.find(t => t.id === activeTheme)?.label}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}