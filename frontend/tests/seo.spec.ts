import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import sitemap from '@/app/sitemap'
import robots from '@/app/robots'
import { canonicalUrl, PUBLIC_ROUTES, ROBOTS_DISALLOW_PATHS } from '@/utils/seo'
import { SITE_ORIGIN } from '@/utils/site'

describe('canonicalUrl', () => {
    it('uses the www origin with no trailing slash, query or hash', () => {
        expect(canonicalUrl('/')).toBe(SITE_ORIGIN)
        expect(canonicalUrl('/sales/')).toBe(`${SITE_ORIGIN}/sales`)
        expect(canonicalUrl('rentals?utm=x#top')).toBe(`${SITE_ORIGIN}/rentals`)
    })
})

describe('sitemap', () => {
    const entries = sitemap()

    it('lists every public route exactly once', () => {
        const urls = entries.map(entry => entry.url)
        expect(urls).toEqual(PUBLIC_ROUTES.map(canonicalUrl))
        expect(new Set(urls).size).toBe(urls.length)
    })

    it('only lists routes that exist in the app directory', () => {
        for (const route of PUBLIC_ROUTES) {
            const file = join(process.cwd(), 'app', route, 'page.tsx')
            expect(existsSync(file), `${route} has no page.tsx`).toBe(true)
        }
    })

    it('never lists a path robots disallows', () => {
        for (const route of PUBLIC_ROUTES) {
            for (const disallowed of ROBOTS_DISALLOW_PATHS) {
                expect(route.startsWith(disallowed)).toBe(false)
            }
        }
    })
})

describe('robots', () => {
    it('points crawlers at the sitemap and mirrors the disallow list', () => {
        const result = robots()
        expect(result.sitemap).toBe(`${SITE_ORIGIN}/sitemap.xml`)
        const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules
        expect(rules.disallow).toEqual([...ROBOTS_DISALLOW_PATHS])
    })
})
