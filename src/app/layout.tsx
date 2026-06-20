import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import PageViewTracker from "@/components/PageViewTracker";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollBackground from "@/components/ScrollBackground";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amirjon.dev"),
  title: "Amirjon Abdunayimov — Software Engineer",
  description:
    "Portfolio of Amirjon Abdunayimov — Software Engineer focused on AI systems, cloud infrastructure, and scalable applications. CS @ NYU Tandon.",
  keywords: [
    "Amirjon Abdunayimov",
    "Software Engineer",
    "NYU Tandon",
    "React",
    "TypeScript",
    "FastAPI",
    "Cloud Infrastructure",
    "AI Engineer",
  ],
  authors: [{ name: "Amirjon Abdunayimov" }],
  openGraph: {
    title: "Amirjon Abdunayimov — Software Engineer",
    description: "Building AI systems, developer tools, and scalable software.",
    url: "https://amirjon.dev",
    siteName: "Amirjon Abdunayimov",
    type: "website",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirjon Abdunayimov — Software Engineer",
    description: "Building AI systems, developer tools, and scalable software.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        <ScrollBackground />
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
        <PageViewTracker />

        {/* Vercel Analytics — enabled automatically on Vercel deploys */}
        <Analytics />

        {/*
          GOOGLE ANALYTICS (optional)
          Set NEXT_PUBLIC_GA_ID in your environment to enable.
        */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/*
          POSTHOG (optional)
          Set NEXT_PUBLIC_POSTHOG_KEY (and optionally NEXT_PUBLIC_POSTHOG_HOST)
          to enable. Visitor stats stay private — neither this nor GA/Vercel
          Analytics are surfaced to site visitors. The /dashboard route is
          a separate, password-protected internal view (see lib/store.ts).
        */}
        {POSTHOG_KEY && (
          <Script id="posthog-init" strategy="afterInteractive">
            {`
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('${POSTHOG_KEY}', { api_host: '${POSTHOG_HOST}' });
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
