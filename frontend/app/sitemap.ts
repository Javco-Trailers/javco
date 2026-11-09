import type { MetadataRoute } from 'next'
import { canonicalUrl, PUBLIC_ROUTES } from '@/utils/seo'

const PRIORITY: Record<string, number> = { '/': 1, '/inventory': 0.9 }

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()
    return PUBLIC_ROUTES.map(path => ({
        url: canonicalUrl(path),
        lastModified,
        changeFrequency: path === '/inventory' ? 'daily' : 'monthly',
        priority: PRIORITY[path] ?? 0.7
    }))
}
