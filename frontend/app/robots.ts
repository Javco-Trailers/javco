import type { MetadataRoute } from 'next'
import { ROBOTS_DISALLOW_PATHS } from '@/utils/seo'
import { SITE_ORIGIN } from '@/utils/site'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/', disallow: [...ROBOTS_DISALLOW_PATHS] },
        sitemap: `${SITE_ORIGIN}/sitemap.xml`,
        host: SITE_ORIGIN
    }
}
