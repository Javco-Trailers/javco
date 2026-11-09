import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Download, Phone } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CtaBand from '@/components/ui/CtaBand'
import ContactSection from '@/components/contact/ContactSection'
import QuoteButton from '@/components/quote/QuoteButton'
import heroImage from '@/public/dryvansatdock-min.jpg'
import interiorImage from '@/public/DryVanInside-min.jpg'
import { pageMetadata } from '@/utils/seo'
import { CONTACT, CREDIT_APPLICATION } from '@/utils/site'

export const metadata: Metadata = pageMetadata({
    title: 'Trailer Rentals & Storage',
    description: 'Rent storage, cartage and OTR semi-trailers from Javco in Franksville, WI. Delivered to your dock or jobsite, short or long term.',
    path: '/rentals'
})

const STORAGE_BENEFITS = [
    'Delivered right to your dock or jobsite',
    'Secure storage for your products',
    'Short-term or long-term, on your schedule',
    'Save on warehouse costs'
]

const INDUSTRIES = [
    'Manufacturing',
    'Shopping centers',
    'Lawn & garden',
    'Recycling centers',
    'Hotels',
    'Bulk mail',
    'Construction sites',
    'Merchandisers',
    'Tradeshows & conventions'
]

export default function RentalsPage() {
    return (
        <>
            <PageHero
                eyebrow="Rentals"
                title="A quality rental fleet for short and long-term needs"
                description="Multi-brand storage, cartage and over-the-road trailers, ready when you are."
                image={heroImage}
                imageAlt="Dry van trailers lined up at loading docks"
            >
                <QuoteButton className="btn btn-primary" label="Get a rental quote" />
                <a href={CONTACT.phoneHref} className="btn btn-ghost-light">
                    <Phone className="size-4" aria-hidden="true" /> {CONTACT.phoneDisplay}
                </a>
            </PageHero>

            <section id="storage" aria-labelledby="storage-heading" className="py-20">
                <div className="container-page grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow text-brand-600">Storage trailers</p>
                        <h2 id="storage-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                            Out of room? Park a trailer at your dock.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                            Alleviate a cramped warehouse with the security and flexibility of a storage trailer.
                            Javco delivers right to
                            your dock or jobsite.
                        </p>
                        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                            {STORAGE_BENEFITS.map(benefit => (
                                <li key={benefit} className="flex gap-3">
                                    <Check className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image
                        src={interiorImage}
                        alt="The clean, empty interior of a dry van storage trailer"
                        placeholder="blur"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="max-h-[32rem] w-full rounded-2xl object-cover shadow-raised"
                    />
                </div>
            </section>

            <section id="otr" aria-labelledby="otr-heading" className="bg-surface-muted py-20">
                <div className="container-page grid gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <p className="eyebrow text-brand-600">Cartage &amp; OTR</p>
                        <h2 id="otr-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                            Road-ready trailers for your loads
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
                            Javco maintains a quality multi-brand rental fleet of cartage and over-the-road trailers.
                            Fill out a credit
                            application and request a quote. Owner-operators welcome!
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                        <h3 className="text-2xl font-bold text-ink">Getting started</h3>
                        <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-muted">
                            <li>Download and complete our credit application.</li>
                            <li>Email it to {CONTACT.email} or bring it by the lot.</li>
                            <li>We&apos;ll confirm availability and get you rolling.</li>
                        </ol>
                        <a href={CREDIT_APPLICATION} download className="btn btn-brand mt-6 w-full">
                            <Download className="size-4" aria-hidden="true" /> Credit application (PDF)
                        </a>
                    </div>
                </div>
            </section>

            <section aria-labelledby="industries-heading" className="py-20">
                <div className="container-page">
                    <p className="eyebrow text-brand-600">Who we serve</p>
                    <h2 id="industries-heading" className="mt-3 text-4xl font-bold text-brand-900">Industries we work with</h2>
                    <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {INDUSTRIES.map(industry => (
                            <li key={industry} className="rounded-xl bg-surface-muted px-4 py-3 font-medium text-ink ring-1 ring-line">
                                {industry}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaBand />
            <ContactSection />
        </>
    )
}
