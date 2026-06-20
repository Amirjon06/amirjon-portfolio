"use client";

import { useEffect, useRef } from "react";
import { applyTheme, getStoredTheme } from "@/lib/theme";

/**
 * Galaxy background: layered parallax starfield + drifting nebula clouds.
 * Moves with the mouse (depth parallax). Color follows the active theme.
 */
export default function ScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    applyTheme(getStoredTheme());

    const c = canvasRef.current;
    if (!c) return;
    const g = c.getContext("2d");
    if (!g) return;

    let W = 0,
      H = 0,
      raf = 0;
    let targetMX = 0,
      targetMY = 0,
      mx = 0,
      my = 0;

    type Star = { x: number; y: number; r: number; phase: number; ps: number };
    type Neb = { x: number; y: number; r: number; dx: number; dy: number };

    const FACTORS = [7, 16, 30]; // parallax strength: far -> near
    let layers: Star[][] = [];
    let nebula: Neb[] = [];

    function rebuild() {
      W = c!.width = window.innerWidth;
      H = c!.height = window.innerHeight;

      layers = FACTORS.map((_, li) => {
        const count = li === 0 ? 170 : li === 1 ? 95 : 50;
        return Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          r: (li + 1) * 0.45 * (Math.random() * 0.9 + 0.5),
          phase: Math.random() * Math.PI * 2,
          ps: 0.004 + Math.random() * 0.018,
        }));
      });

      nebula = [
        { x: W * 0.24, y: H * 0.3, r: W * 0.52, dx: 0.02, dy: 0.012 },
        { x: W * 0.76, y: H * 0.68, r: W * 0.46, dx: -0.016, dy: 0.013 },
        { x: W * 0.55, y: H * 0.14, r: W * 0.34, dx: 0.011, dy: -0.009 },
      ];
    }
    rebuild();
    window.addEventListener("resize", rebuild);

    function onMove(e: PointerEvent) {
      targetMX = e.clientX / W - 0.5;
      targetMY = e.clientY / H - 0.5;
    }
    window.addEventListener("pointermove", onMove);

    function col() {
      return (
        getComputedStyle(document.documentElement)
          .getPropertyValue("--color-particle")
          .trim() || "94,234,212"
      );
    }

    function draw() {
      const cc = col();
      mx += (targetMX - mx) * 0.05;
      my += (targetMY - my) * 0.05;
      g!.clearRect(0, 0, W, H);

      // drifting nebula clouds (subtle, theme-colored)
      nebula.forEach((n) => {
        n.x += n.dx;
        n.y += n.dy;
        if (n.x < -n.r) n.x = W + n.r;
        if (n.x > W + n.r) n.x = -n.r;
        if (n.y < -n.r) n.y = H + n.r;
        if (n.y > H + n.r) n.y = -n.r;
        const ox = -mx * 24,
          oy = -my * 24;
        const gr = g!.createRadialGradient(n.x + ox, n.y + oy, 0, n.x + ox, n.y + oy, n.r);
        gr.addColorStop(0, `rgba(${cc},0.05)`);
        gr.addColorStop(0.45, `rgba(${cc},0.015)`);
        gr.addColorStop(1, `rgba(${cc},0)`);
        g!.fillStyle = gr;
        g!.fillRect(0, 0, W, H);
      });

      // parallax starfield
      layers.forEach((stars, li) => {
        const f = FACTORS[li];
        const ox = mx * f,
          oy = my * f;
        stars.forEach((s) => {
          s.phase += s.ps;
          const tw = 0.5 + Math.sin(s.phase) * 0.5;
          const a = (0.22 + li * 0.22) * (0.5 + tw * 0.5);
          const x = s.x + ox,
            y = s.y + oy;
          g!.beginPath();
          g!.arc(x, y, s.r, 0, Math.PI * 2);
          g!.fillStyle = `rgba(${cc},${a})`;
          g!.fill();
          if (li === 2 && tw > 0.82) {
            const halo = g!.createRadialGradient(x, y, 0, x, y, s.r * 6);
            halo.addColorStop(0, `rgba(${cc},${a * 0.4})`);
            halo.addColorStop(1, `rgba(${cc},0)`);
            g!.beginPath();
            g!.arc(x, y, s.r * 6, 0, Math.PI * 2);
            g!.fillStyle = halo;
            g!.fill();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", rebuild);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
