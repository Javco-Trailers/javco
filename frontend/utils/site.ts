// Single source of truth for business details. Every page, the sitemap, robots and JSON-LD read from here.

export const SITE_ORIGIN = 'https://www.javco.co'
export const SITE_NAME = 'Javco Trailer Sales'
export const SITE_LEGAL_NAME = 'Javco Trailer Sales, Inc.'
export const SITE_DESCRIPTION = 'Used semi-trailer sales, rentals and storage in Franksville, Wisconsin. '
    + 'Dry vans, reefers, flatbeds and tankers serving Milwaukee, Racine, Kenosha and Chicagoland since 1984.'
export const SITE_SOCIAL_IMAGE = '/JavcoSignZoomed-min.jpg'
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
// Keyless embed: avoids shipping a Maps API key to the browser.
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_ONE_LINE)}&output=embed`

export const INVENTORY_EMBED = 'https://cherrytrader.com/embed/seller/javco-trailer-sales-inc-ef07a243'
export const CREDIT_APPLICATION = '/creditApplication.pdf'

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
