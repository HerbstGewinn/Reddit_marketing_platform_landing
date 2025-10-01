import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://redditmarketing.co'
  const routes = ['/', '/#how', '/#reviews', '/#pricing', '/#faq']
  const now = new Date().toISOString()
  return routes.map((path) => ({
    url: `${base}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.6
  }))
}
