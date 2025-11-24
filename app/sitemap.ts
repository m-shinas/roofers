import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://roofersfzc.ae',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://roofersfzc.ae/projects',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://roofersfzc.ae/services',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://roofersfzc.ae/about-us',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://roofersfzc.ae/contact',
      lastModified: new Date(),
      priority: 1,
    }
  ]
}