import { CONTACT, FOUNDED_YEAR, SITE_DESCRIPTION, SITE_LEGAL_NAME, SITE_ORIGIN, SITE_SOCIAL_IMAGE } from '@/utils/site'

// Structured data so search engines can show Javco as a local business (address, phone, map pin).
export default function LocalBusinessJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'AutoDealer',
        '@id': `${SITE_ORIGIN}/#business`,
        name: SITE_LEGAL_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_ORIGIN,
        logo: `${SITE_ORIGIN}/images/javco-logo.png`,
        image: `${SITE_ORIGIN}${SITE_SOCIAL_IMAGE}`,
        telephone: '+1-262-835-9400',
        email: CONTACT.email,
        foundingDate: String(FOUNDED_YEAR),
        address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT.street,
            addressLocality: CONTACT.city,
            addressRegion: CONTACT.region,
            postalCode: CONTACT.postalCode,
            addressCountry: CONTACT.country
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: CONTACT.latitude,
            longitude: CONTACT.longitude
        },
        areaServed: ['Milwaukee', 'Racine', 'Kenosha', 'Chicago', 'Wisconsin', 'Illinois']
    }

    return (
        <script
            type="application/ld+json"
            // JSON.stringify output is escaped for '<' so the payload can never close the script tag early.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    )
}
