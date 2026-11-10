import { describe, expect, it } from 'vitest'
import type { Metadata } from 'next'
import { HOME_TITLE, SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

// Search results and social previews truncate long text. Keep every page within the limits that show in full:
// Google shows ~60 characters of a title; social cards (X, LinkedIn, iMessage) show ~125 characters of a description.
const MAX_TITLE = 60
const MAX_DESCRIPTION = 125

const pages: Record<string, () => Promise<{ metadata: Metadata }>> = {
    '/inventory': () => import('@/app/inventory/page'),
    '/rentals': () => import('@/app/rentals/page'),
    '/sales': () => import('@/app/sales/page'),
    '/about': () => import('@/app/about/page')
}

describe('page metadata length', () => {
    it('home title and description fit', () => {
        expect(HOME_TITLE.length).toBeLessThanOrEqual(MAX_TITLE)
        expect(SITE_DESCRIPTION.length).toBeLessThanOrEqual(MAX_DESCRIPTION)
    })

    for (const [path, load] of Object.entries(pages)) {
        it(`${path} title and description fit`, async () => {
            const { metadata } = await load()
            // Pages set a short title; the layout template appends " | Javco Trailer Sales"
            const fullTitle = `${String(metadata.title)} | ${SITE_NAME}`
            expect(fullTitle.length).toBeLessThanOrEqual(MAX_TITLE)
            expect(String(metadata.description).length).toBeLessThanOrEqual(MAX_DESCRIPTION)
        })
    }
})
