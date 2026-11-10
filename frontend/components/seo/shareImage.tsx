import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import sharp from 'sharp'
import { CONTACT, FOUNDED_YEAR } from '@/utils/site'

// Link-preview card (Open Graph / X / iMessage / Slack) at the 1200x630 size every platform expects.
// Rendered once at build time by each route's opengraph-image.tsx, then saved as JPEG: the PNG that next/og produces is
// over 1MB for a photo, and some apps (WhatsApp) skip previews above ~300KB.
export const SHARE_IMAGE_SIZE = { width: 1200, height: 630 }
export const SHARE_IMAGE_TYPE = 'image/jpeg'

const fontFile = (weight: number) => join(
    process.cwd(),
    'node_modules/@fontsource/barlow-semi-condensed/files',
    `barlow-semi-condensed-latin-${weight}-normal.woff`
)

async function dataUrl(publicPath: string, mime: string) {
    const bytes = await readFile(join(process.cwd(), 'public', publicPath))
    return `data:${mime};base64,${bytes.toString('base64')}`
}

interface ShareImageInput {
    eyebrow: string
    title: string
    // Photo under public/, e.g. 'images/aerial-lot.jpg'
    photo: string
    // Call to action shown as a button on the card, e.g. 'Get a quote'
    cta: string
}

export async function renderShareImage({ eyebrow, title, photo, cta }: ShareImageInput) {
    const [semibold, bold, photoSrc, logoSrc] = await Promise.all([
        readFile(fontFile(600)),
        readFile(fontFile(700)),
        dataUrl(photo, 'image/jpeg'),
        dataUrl('images/javco-logo.png', 'image/png')
    ])

    const png = new ImageResponse(
        (
            <div style={{ display: 'flex', width: '100%', height: '100%', position: 'relative', fontFamily: 'Barlow' }}>
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- rendered to a PNG, not HTML */}
                <img src={photoSrc} width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }} />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 1200,
                        height: 630,
                        display: 'flex',
                        backgroundImage: 'linear-gradient(90deg, rgba(8,30,56,0.95) 0%, rgba(8,30,56,0.8) 55%, rgba(8,30,56,0.35) 100%)'
                    }}
                />
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: '64px 72px', width: '100%' }}>
                    <div style={{ display: 'flex', alignSelf: 'flex-start', background: 'white', borderRadius: 16, padding: '14px 22px' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- rendered to PNG */}
                        <img src={logoSrc} width={228} height={60} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 'auto', fontSize: 28, fontWeight: 600, color: '#fbbf24', letterSpacing: 3 }}>
                        {eyebrow.toUpperCase()}
                    </div>
                    <div style={{ display: 'flex', marginTop: 12, maxWidth: 900, fontSize: 70, fontWeight: 700, lineHeight: 1.02, color: 'white' }}>
                        {title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 32, gap: 28 }}>
                        <div
                            style={{
                                display: 'flex',
                                background: '#f59e0b',
                                color: '#0a1d33',
                                borderRadius: 12,
                                padding: '14px 28px',
                                fontSize: 32,
                                fontWeight: 700
                            }}
                        >
                            {`${cta} →`}
                        </div>
                        <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, color: 'white' }}>
                            {`Call ${CONTACT.phoneDisplay}`}
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 18, fontSize: 24, fontWeight: 600, color: '#cfe0f3' }}>
                        {`javco.co  ·  ${CONTACT.city}, ${CONTACT.region}  ·  Since ${FOUNDED_YEAR}`}
                    </div>
                </div>
            </div>
        ),
        {
            ...SHARE_IMAGE_SIZE,
            fonts: [
                { name: 'Barlow', data: semibold, weight: 600, style: 'normal' },
                { name: 'Barlow', data: bold, weight: 700, style: 'normal' }
            ]
        }
    )

    const jpeg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 82, mozjpeg: true }).toBuffer()
    return new Response(new Uint8Array(jpeg), { headers: { 'Content-Type': SHARE_IMAGE_TYPE } })
}
