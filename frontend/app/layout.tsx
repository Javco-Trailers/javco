import type { Metadata, Viewport } from 'next'
import { Barlow_Semi_Condensed, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import LocalBusinessJsonLd from '@/components/seo/LocalBusinessJsonLd'
import { cn } from '@/utils/cn'
import { SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN, SITE_SOCIAL_IMAGE } from '@/utils/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const barlow = Barlow_Semi_Condensed({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-barlow',
    display: 'swap'
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
        default: `${SITE_NAME} | Semi-Trailer Sales, Rentals & Storage in Wisconsin`,
        template: `%s | ${SITE_NAME}`
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: { canonical: SITE_ORIGIN },
    formatDetection: { telephone: false },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_ORIGIN,
        siteName: SITE_NAME,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [{ url: SITE_SOCIAL_IMAGE, alt: 'The Javco Trailer Sales sign at our Franksville, WI lot' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [SITE_SOCIAL_IMAGE]
    },
    robots: { index: true, follow: true },
    // Google Search Console ownership check for the https://www.javco.co/ URL-prefix property (HTML tag method).
    // Public by design; keep it in place, Google re-checks periodically.
    verification: { google: 'LgqNcJws9jpnsyI-32tkJxnKq47VAI18ywm-gMdQCkU' }
}

export const viewport: Viewport = {
    themeColor: '#2163a6',
    colorScheme: 'light'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={cn(inter.variable, barlow.variable)}>
            <body className="flex min-h-dvh flex-col">
                <a
                    href="#main"
                    className="
                        sr-only z-50 rounded-md bg-white px-4 py-2 font-semibold text-brand-700 focus:not-sr-only focus:fixed
                        focus:top-3 focus:left-3
                    "
                >
                    Skip to content
                </a>
                <SiteHeader />
                {/* tabIndex lets the skip link move keyboard and screen-reader focus here, not just scroll */}
                <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
                    {children}
                </main>
                <SiteFooter />
                <LocalBusinessJsonLd />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
