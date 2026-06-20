"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Lock, RefreshCw, Github, Linkedin, FileText, Mail, LucideIcon } from "lucide-react";

type Aggregated = {
  totals: {
    totalVisitors: number;
    uniqueVisitors: number;
    returningVisitors: number;
    resumeDownloads: number;
    githubClicks: number;
    linkedinClicks: number;
    contactSubmissions: number;
    mostViewedProject: string;
  };
  timeline: { date: string; views: number }[];
  trafficSources: { name: string; value: number }[];
  deviceTypes: { name: string; value: number }[];
  locations: { name: string; value: number }[];
  projectViews: { name: string; value: number }[];
  recentActivity: { label: string; timestamp: number; path?: string; country?: string; device?: string }[];
};

const COLORS = ["#5EEAD4", "#F2B544", "#8B96AC", "#3a4762", "#222B3D", "#7dd3fc"];
const STORAGE_KEY = "dashboard_pw";

const ACTIVITY_ICONS: Record<string, LucideIcon> = {
  "Resume downloaded": FileText,
  "GitHub clicked": Github,
  "LinkedIn clicked": Linkedin,
  "Contact form submitted": Mail,
};

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="glass rounded-xl p-5 text-center">
      <p className="font-display text-2xl font-semibold text-signal md:text-3xl">{value}</p>
      <p className="mt-1 font-mono text-xs text-muted">{label}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState<Aggregated | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(pw: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });

      if (res.status === 401) {
        setError("Incorrect password.");
        sessionStorage.removeItem(STORAGE_KEY);
        setData(null);
        return;
      }
      if (res.status === 503) {
        setError("ANALYTICS_PASSWORD is not configured in the environment.");
        return;
      }
      if (!res.ok) {
        setError("Something went wrong loading analytics.");
        return;
      }

      const json = await res.json();
      setData(json);
      sessionStorage.setItem(STORAGE_KEY, pw);
    } catch {
      setError("Could not reach the analytics API.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPassword(saved);
      fetchData(saved);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchData(password);
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg px-6 bg-grid-pattern">
        <form onSubmit={handleSubmit} className="glass w-full max-w-sm rounded-2xl p-8">
          <div className="mb-4 flex items-center gap-2 text-signal">
            <Lock size={18} />
            <h1 className="font-display text-lg font-semibold text-ink">Private Analytics</h1>
          </div>
          <p className="mb-4 font-mono text-xs text-muted">
            Enter the dashboard password (ANALYTICS_PASSWORD env var) to continue.
          </p>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-signal"
            placeholder="Password"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-accent px-4 py-2 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
          {error && <p className="mt-3 font-mono text-xs text-[#ff5f56]">{error}</p>}
        </form>
      </main>
    );
  }

  const { totals } = data;

  return (
    <main className="min-h-screen bg-bg bg-grid-pattern px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="section-label">private_dashboard</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Analytics</h1>
          </div>
          <button
            onClick={() => fetchData(password)}
            className="glass flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs text-ink transition-transform hover:-translate-y-0.5"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Refresh
          </button>
        </div>

        {/* Stat cards */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Total Visitors" value={totals.totalVisitors} />
          <StatCard label="Unique Visitors" value={totals.uniqueVisitors} />
          <StatCard label="Returning Visitors" value={totals.returningVisitors} />
          <StatCard label="Most Viewed Project" value={totals.mostViewedProject} />
          <StatCard label="Resume Downloads" value={totals.resumeDownloads} />
          <StatCard label="GitHub Clicks" value={totals.githubClicks} />
          <StatCard label="LinkedIn Clicks" value={totals.linkedinClicks} />
          <StatCard label="Contact Submissions" value={totals.contactSubmissions} />
        </div>

        {/* Timeline */}
        <div className="glass mb-8 rounded-2xl p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Visitors — last 14 days</p>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data.timeline}>
              <CartesianGrid stroke="#222B3D" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#8B96AC" fontSize={12} />
              <YAxis stroke="#8B96AC" fontSize={12} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: "#161D2B", border: "1px solid #222B3D", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#E6EAF2" }}
              />
              <Line type="monotone" dataKey="views" stroke="#5EEAD4" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Traffic sources */}
          <div className="glass rounded-2xl p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Traffic Source</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.trafficSources}>
                <CartesianGrid stroke="#222B3D" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#8B96AC" fontSize={10} interval={0} angle={-20} textAnchor="end" height={50} />
                <YAxis stroke="#8B96AC" fontSize={12} allowDecimals={false} />
                <Tooltip contentStyle={{ background: "#161D2B", border: "1px solid #222B3D", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" fill="#5EEAD4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Device types */}
          <div className="glass rounded-2xl p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Device Type</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={data.deviceTypes} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {data.deviceTypes.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#161D2B", border: "1px solid #222B3D", borderRadius: 8, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Locations */}
          <div className="glass rounded-2xl p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Approximate Location</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.locations} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid stroke="#222B3D" strokeDasharray="3 3" />
                <XAxis type="number" stroke="#8B96AC" fontSize={12} allowDecimals={false} />
                <YAxis type="category" dataKey="name" stroke="#8B96AC" fontSize={10} width={90} />
                <Tooltip contentStyle={{ background: "#161D2B", border: "1px solid #222B3D", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" fill="#F2B544" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Project views */}
          <div className="glass rounded-2xl p-6 md:col-span-1">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Project Views</p>
            {data.projectViews.length === 0 && <p className="font-mono text-xs text-muted">No project views yet.</p>}
            <ul className="space-y-2">
              {data.projectViews.map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
                  <span className="font-mono text-sm text-ink">{p.name}</span>
                  <span className="font-mono text-xs text-signal">{p.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent activity feed */}
          <div className="glass rounded-2xl p-6 md:col-span-2">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Recent Activity</p>
            {data.recentActivity.length === 0 && <p className="font-mono text-xs text-muted">No activity yet.</p>}
            <ul className="space-y-2">
              {data.recentActivity.map((a, i) => {
                const Icon = ACTIVITY_ICONS[a.label] ?? FileText;
                return (
                  <li key={i} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2">
                    <Icon size={16} className="shrink-0 text-signal" />
                    <div className="flex-1">
                      <p className="font-mono text-sm text-ink">{a.label}</p>
                      <p className="font-mono text-[10px] text-muted">
                        {new Date(a.timestamp).toLocaleString()} {a.country && a.country !== "Unknown" ? `· ${a.country}` : ""} {a.device ? `· ${a.device}` : ""}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
