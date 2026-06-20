"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
