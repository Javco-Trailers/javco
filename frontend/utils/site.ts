// Single source of truth for business details. Every page, the sitemap, robots and JSON-LD read from here.

export const SITE_ORIGIN = 'https://www.javco.co'
export const SITE_NAME = 'Javco Trailer Sales'
export const SITE_LEGAL_NAME = 'Javco Trailer Sales, Inc.'
// Home page title and meta description. Kept within what Google and social previews show without truncating:
// titles <= 60 characters, descriptions <= 125. Checkers count the escaped HTML, so '&' costs 5 (&amp;); prefer 'and'.
// tests/metadata.spec.ts enforces this for every page.
export const HOME_TITLE = `${SITE_NAME} | Semi-Trailer Rentals in Wisconsin`
export const SITE_DESCRIPTION = 'Used semi-trailer sales, rentals and storage in Franksville, WI. '
    + 'Dry vans, reefers and flatbeds for Milwaukee and Chicago.'
// Photos of the business for search-engine structured data (stable public URLs)
export const BUSINESS_PHOTOS = ['/images/javco-sign.jpg', '/images/aerial-lot.jpg', '/images/reefers-lined-up.jpg']
export const FOUNDED_YEAR = 1984

export const CONTACT = {
    phoneDisplay: '262-835-9400',
    phoneHref: 'tel:+12628359400',
    email: 'info@javco.co',
    emailHref: `mailto:info@javco.co?subject=${encodeURIComponent('Javco Inquiry')}`,
    street: '3873 S. 27th St',
    city: 'Franksville',
    region: 'WI',
    postalCode: '53126',
    country: 'US',
    latitude: 42.7755806,
    longitude: -87.9553531
} as const

export const ADDRESS_ONE_LINE = `${CONTACT.street}, ${CONTACT.city}, ${CONTACT.region} ${CONTACT.postalCode}`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_ONE_LINE)}`
// Google Place ID for Javco's business listing, so the map shows the named pin rather than a bare address.
export const MAPS_PLACE_ID = 'ChIJNY_vg59uBYgRXmWJTrJDh-Q'
// Maps Embed API keys are public by design; keep this one restricted to javco.co referrers in Google Cloud.
const MAPS_API_KEY = process.env.NEXT_PUBLIC_MAPS
export const MAPS_EMBED = MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?q=place_id:${MAPS_PLACE_ID}&key=${MAPS_API_KEY}`
    // Fallback for local dev without the key
    : `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_ONE_LINE)}&output=embed`

export const INVENTORY_EMBED = 'https://cherrytrader.com/embed/seller/javco-trailer-sales-inc-ef07a243'
export const CREDIT_APPLICATION = '/credit-application.pdf'

export interface NavItem {
    href: string
    label: string
}

export const NAV_ITEMS: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/inventory', label: 'Inventory' },
    { href: '/rentals', label: 'Rentals' },
    { href: '/sales', label: 'Sales' },
    { href: '/about', label: 'About' }
]

export const TRAILER_TYPES = ['Dry Vans', 'Reefers', 'Flatbeds', 'Tankers'] as const
