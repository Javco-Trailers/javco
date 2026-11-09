import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'

// Third-party origins the site intentionally embeds: the Cherry Trader inventory widget and the Google Maps embed.
const FRAME_SOURCES = ['https://cherrytrader.com', 'https://www.cherrytrader.com', 'https://www.google.com', 'https://maps.google.com']

// Every page is statically prerendered, so a per-request nonce is not available. Next.js injects inline bootstrap
// scripts, which means 'unsafe-inline' is required for scripts; everything else is locked down.
const contentSecurityPolicy = [
    'default-src \'self\'',
    `script-src 'self' 'unsafe-inline'${isDev ? ' \'unsafe-eval\'' : ''} https://va.vercel-scripts.com`,
    'style-src \'self\' \'unsafe-inline\'',
    'img-src \'self\' data: blob:',
    'font-src \'self\'',
    `connect-src 'self' https://vitals.vercel-insights.com${isDev ? ' ws:' : ''}`,
    `frame-src ${FRAME_SOURCES.join(' ')}`,
    'object-src \'none\'',
    'base-uri \'self\'',
    'form-action \'self\' mailto:',
    'frame-ancestors \'none\'',
    ...isDev ? [] : ['upgrade-insecure-requests']
].join('; ')

const securityHeaders = [
    { key: 'Content-Security-Policy', value: contentSecurityPolicy },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' }
]

const nextConfig: NextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp']
    },
    async headers() {
        return [{ source: '/:path*', headers: securityHeaders }]
    },
    async redirects() {
        // The retired CMS admin lived here; send any old bookmarks home instead of a 404.
        return [{ source: '/admin/:path*', destination: '/', permanent: true }]
    }
}

export default nextConfig
