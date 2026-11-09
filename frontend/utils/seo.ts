import type { Metadata } from 'next'
import { NAV_ITEMS, SITE_NAME, SITE_ORIGIN, SITE_SOCIAL_IMAGE } from './site'

// Paths crawlers should skip. robots.ts reads this, and tests/seo.spec.ts keeps it in sync with the sitemap.
export const ROBOTS_DISALLOW_PATHS = ['/admin'] as const

// Every public, indexable route. Sitemap entries come from this list.
export const PUBLIC_ROUTES = NAV_ITEMS.map(item => item.href)

// Canonical URLs use the www origin, no query string and no trailing slash (except the root).
export function canonicalUrl(path: string): string {
    const [pathname] = path.split(/[?#]/)
    const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
    const normalized = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
    return `${SITE_ORIGIN}${normalized === '/' ? '' : normalized}`
}

interface PageMetadataInput {
    title: string
    description: string
    path: string
}

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
    const url = canonicalUrl(path)
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            url,
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'website',
            images: [{ url: SITE_SOCIAL_IMAGE, alt: 'The Javco Trailer Sales sign at our Franksville, WI lot' }]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${SITE_NAME}`,
            description,
            images: [SITE_SOCIAL_IMAGE]
        }
    }
}
