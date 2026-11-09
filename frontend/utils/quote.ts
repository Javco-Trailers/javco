import { CONTACT } from './site'

export const QUOTE_PURPOSES = ['Buy a trailer', 'Rent a trailer', 'Sell my trailer', 'Storage'] as const

export interface QuoteRequest {
    firstName: string
    lastName: string
    phone?: string
    zipCode: string
    business?: string
    purpose: string
    trailerType?: string
    lengthOfUse?: string
}

const MAX_FIELD_LENGTH = 200

// Strip control characters and cap length so user input can't inject extra mail headers or bloat the URL.
function clean(value: string | undefined): string {
    // eslint-disable-next-line no-control-regex -- matching control characters is the point
    return (value ?? '').replace(/[\r\n\t\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, MAX_FIELD_LENGTH)
}

export function buildQuoteMailto(request: QuoteRequest): string {
    const name = `${clean(request.firstName)} ${clean(request.lastName)}`.trim()
    const lines = [
        `Name: ${name}`,
        `Phone: ${clean(request.phone) || 'Not provided'}`,
        `ZIP code: ${clean(request.zipCode)}`,
        `Business: ${clean(request.business) || 'Not provided'}`,
        `Purpose: ${clean(request.purpose)}`,
        `Trailer type: ${clean(request.trailerType) || 'Not sure yet'}`,
        `Length of use: ${clean(request.lengthOfUse) || 'Not provided'}`,
        '',
        'Anything else we should know:',
        ''
    ]
    const subject = `Quote request: ${clean(request.purpose) || 'General'} (${name || 'Website visitor'})`
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}
