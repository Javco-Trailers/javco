import type { Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import PageHero from '@/components/ui/PageHero'
import CtaBand from '@/components/ui/CtaBand'
import ContactSection from '@/components/contact/ContactSection'
import heroImage from '@/public/images/aerial-lot.jpg'
import foundersYoungImage from '@/public/images/founders-early.jpg'
import salesLotImage from '@/public/images/original-sales-lot.jpg'
import foundersImage from '@/public/images/founders-later.jpg'
import { pageMetadata } from '@/utils/seo'
import { FOUNDED_YEAR } from '@/utils/site'

export const metadata: Metadata = pageMetadata({
    title: 'About Us',
    description: `Founded in ${FOUNDED_YEAR} by Avner Hizmi and John Griska, Javco has served Milwaukee and Chicago trucking for four decades.`,
    path: '/about'
})

interface Milestone {
    year: string
    title: string
    body: string
    image: StaticImageData
    alt: string
}

const MILESTONES: Milestone[] = [
    {
        year: String(FOUNDED_YEAR),
        title: 'An unlikely partnership',
        body: 'Javco Trailer Sales, Inc. was founded by the unlikely duo of Avner Hizmi and John Griska. Avner, an Israeli immigrant, '
            + 'and John, a Pittsburgh-born yinzer and Vietnam veteran, crossed paths in the trailer industry and forged a business '
            + 'partnership that endured a lifetime. They deftly operated in the Milwaukee and Chicago markets and gradually built a '
            + 'network of trusted vendors and customers.',
        image: foundersYoungImage,
        alt: 'Avner and John as young men at a desk discussing business'
    },
    {
        year: 'Early years',
        title: 'Humble beginnings',
        body: 'Javco started out on a modest sales lot, the first step toward the operation we run today.',
        image: salesLotImage,
        alt: 'The original Javco sales lot, showing the small beginnings of the business'
    },
    {
        year: '1998',
        title: 'A home on I-94',
        body: 'Avner and John purchased a parcel of land along I-94 and built a 5,000 square-foot building, which still serves as '
            + 'our base of operations today.',
        image: heroImage,
        alt: 'An aerial view of the Javco premises along I-94'
    },
    {
        year: 'Today',
        title: 'Carrying the legacy forward',
        body: 'Avner passed away in November 2011 and John in May 2022. We are forever indebted to their entrepreneurship, '
            + 'ingenuity and mutual loyalty, and we run Javco the way they did.',
        image: foundersImage,
        alt: 'Founders Avner and John in suits later in life'
    }
]

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About us"
                title={`Four decades of trailers and trust, since ${FOUNDED_YEAR}`}
                description="A family-style dealership built on loyalty, a handshake and a lot on I-94."
                image={heroImage}
            />

            <section aria-label="Our history" className="py-20">
                <ol className="container-page space-y-20">
                    {MILESTONES.map((milestone, index) => (
                        <li key={milestone.title} className="grid items-center gap-10 lg:grid-cols-2">
                            <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                                <Image
                                    src={milestone.image}
                                    alt={milestone.alt}
                                    placeholder="blur"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="max-h-112 w-full rounded-2xl object-cover shadow-raised"
                                />
                            </div>
                            <div>
                                <p className="eyebrow text-brand-600">{milestone.year}</p>
                                <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">{milestone.title}</h2>
                                <p className="mt-4 text-lg/relaxed text-ink-muted">{milestone.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <CtaBand />
            <ContactSection />
        </>
    )
}
