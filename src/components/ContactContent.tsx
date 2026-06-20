"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Send, MapPin, Check, Download } from "lucide-react";
import { profile } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import Reveal from "./Reveal";
type Status = "idle" | "loading" | "success" | "error";
export default function ContactContent() {
  const [status, setStatus] = useState<Status>("idle");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackEvent("contact_form_submit");
      form.reset();
      // return the button to its normal state after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }
  const contactLinks = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, event: "email_click", source: undefined },
    { icon: Linkedin, label: "linkedin.com/in/amirjon-abd", href: profile.linkedin, event: "linkedin_click", source: "contact" },
    { icon: Github, label: "github.com/Amirjon06", href: profile.github, event: "github_click", source: "contact" },
  ];
  const inputClass =
    "w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-4 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-signal focus:bg-white/[0.04]";
  const isSuccess = status === "success";
  return (
<>
  <div className="max-w-3xl pt-2">
    <Reveal>
      <h2 className="font-display text-6xl font-semibold tracking-tight text-ink md:text-7xl">
        Let&apos;s Connect
      </h2>
    </Reveal>
    <Reveal delay={0.05}>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Interested in software engineering, AI systems, cloud infrastructure, or
        collaboration opportunities? Let&apos;s talk.
      </p>
    </Reveal>
  </div>
  <div className="mt-20 grid items-start gap-24 lg:grid-cols-2 xl:gap-32">
        {/* Left: contact links */}
        <Reveal variant="slide-right">
          <div className="max-w-[560px]">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-signal">
              Get in touch
            </p>
            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, href, event, source }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  onClick={() => trackEvent(event, source ? { source } : undefined)}
                  className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-5 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-signal/50 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/30"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15 text-signal shadow-[0_0_22px_rgba(var(--color-signal,94,234,212),0.16)] transition-all group-hover:bg-signal/20 group-hover:shadow-[0_0_28px_rgba(var(--color-signal,94,234,212),0.24)]">
                      <Icon size={18} />
                    </span>
                    <span className="text-base text-ink">{label}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                  />
                </a>
              ))}
            </div>
            {/* Download resume */}
            <a            
              href={profile.resumeFile}
              download
              onClick={() => trackEvent("resume_download", { source: "contact" })}
              className="group mt-5 flex items-center justify-between rounded-2xl border border-signal/40 bg-signal/[0.06] px-5 py-5 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-signal/70 hover:bg-signal/[0.1] hover:shadow-xl hover:shadow-black/30"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/20 text-signal">
                  <Download size={18} />
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-medium text-ink">Download resume</span>
                  <span className="text-xs text-muted">PDF</span>
                </span>
              </span>
              <ArrowUpRight size={18} className="text-signal/70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
            </a>

            <div className="mt-8 flex items-start gap-3 border-t border-white/5 pt-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-signal">
                <MapPin size={18} />
              </span>
              <p className="text-sm leading-relaxed text-muted">
                Based in {profile.location}.
                <br />
                Usually responds within a day or two.
              </p>
            </div>
          </div>
        </Reveal>
        {/* Right: form card */}
        <Reveal variant="slide-left" delay={0.08}>
          <div className="-mt-3 w-full rounded-3xl border border-white/15 bg-surface/40 p-10 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,.4)]">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-signal">
              Send a message
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="Your email" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder="Your message"
                  className={`${inputClass} resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || isSuccess}
                className={
                  isSuccess
                    ? "flex min-h-[58px] w-full items-center justify-center gap-2 rounded-2xl border border-emerald-400/70 bg-gradient-to-r from-emerald-500/20 via-emerald-500/25 to-emerald-500/15 px-6 py-4 text-base font-semibold text-emerald-300 transition-all duration-300"
                    : "flex min-h-[58px] w-full items-center justify-center gap-2 rounded-2xl border border-signal/70 bg-gradient-to-r from-signal/15 via-signal/20 to-signal/10 px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:from-signal/20 hover:via-signal/25 hover:to-signal/15 disabled:translate-y-0 disabled:opacity-60"
                }
                style={
                  isSuccess
                    ? { boxShadow: "inset 0 1px 0 rgba(255,255,255,.08), 0 0 40px -10px rgba(52,211,153,.85), 0 16px 50px -24px rgba(0,0,0,.85)" }
                    : { boxShadow: "inset 0 1px 0 rgba(255,255,255,.08), 0 0 40px -10px rgba(var(--color-signal, 94,234,212), .85), 0 16px 50px -24px rgba(0,0,0,.85)" }
                }
              >
                {isSuccess ? (
                  <>
                    <Check size={18} /> Message sent
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {status === "loading" ? "Sending…" : "Send message"}
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-sm text-[#ff8a80]">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </>
  );
}
