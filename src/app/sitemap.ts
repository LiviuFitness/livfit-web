import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://livfit.es";
  return [
    { url: base, priority: 1 },
    { url: `${base}/calculadora`, priority: 0.8 },
    { url: `${base}/aviso-legal` },
    { url: `${base}/privacidad` },
    { url: `${base}/cookies` },
  ];
}
