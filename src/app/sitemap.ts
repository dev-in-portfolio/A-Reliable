import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.areliabletrucking.com"

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/fleet`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/customers-loads`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/safety-compliance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/work-with-us`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ]
}