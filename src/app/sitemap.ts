import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/projects", "/projects/sev0", "/projects/cipherforge", "/projects/ghostmirror", "/projects/staterelay", "/projects/patient-voice-bot", "/skills", "/leadership", "/contact"];
  return routes.map((route) => ({
    url: `https://amirjonabd.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
