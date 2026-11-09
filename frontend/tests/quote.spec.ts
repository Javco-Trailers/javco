import { describe, expect, it } from 'vitest'
import { buildQuoteMailto } from '@/utils/quote'

describe('buildQuoteMailto', () => {
    const base = { firstName: 'Pat', lastName: 'Lee', zipCode: '53126', purpose: 'Rent a trailer' }

    it('addresses the Javco inbox with an encoded subject and body', () => {
        const href = buildQuoteMailto(base)
        expect(href.startsWith('mailto:info@javco.co?subject=')).toBe(true)
        const params = new URLSearchParams(href.split('?')[1])
        expect(params.get('subject')).toBe('Quote request: Rent a trailer (Pat Lee)')
        expect(params.get('body')).toContain('ZIP code: 53126')
    })

    it('strips newlines so input cannot inject extra mail headers', () => {
        const href = buildQuoteMailto({ ...base, firstName: 'Pat\r\nBcc: evil@example.com' })
        const subject = new URLSearchParams(href.split('?')[1]).get('subject') ?? ''
        expect(subject).not.toMatch(/[\r\n]/)
        expect(href).not.toContain('%0D%0ABcc')
    })

    it('caps very long values', () => {
        const href = buildQuoteMailto({ ...base, business: 'x'.repeat(5000) })
        const body = new URLSearchParams(href.split('?')[1]).get('body') ?? ''
        expect(body.length).toBeLessThan(1000)
    })
})
