import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CtaBand from '@/components/ui/CtaBand'
import ContactSection from '@/components/contact/ContactSection'
import heroImage from '@/public/picture-1-email-edited-min.jpg'
import reeferImage from '@/public/ReeferVan-min.png'
import dryVanImage from '@/public/DryVanForSales-min.png'
import { pageMetadata } from '@/utils/seo'
import { CONTACT, TRAILER_TYPES } from '@/utils/site'

export const metadata: Metadata = pageMetadata({
    title: 'Used Trailer Sales',
    description: 'Buy or sell used dry vans, reefers, flatbeds and tankers. Javco is a licensed trailer dealer in Franksville, WI.',
    path: '/sales'
})

const SELL_EMAIL = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Selling a trailer to Javco')}`

export default function SalesPage() {
    return (
        <>
            <PageHero
                eyebrow="Sales"
                title="The right trailer at the right price"
                description={`Javco is a licensed dealer of used ${TRAILER_TYPES.join(', ').toLowerCase()}. We buy, sell and trade.`}
                image={heroImage}
            >
                <Link href="/inventory" className="btn btn-primary">
                    See current inventory <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a href={CONTACT.phoneHref} className="btn btn-ghost-light">Call {CONTACT.phoneDisplay}</a>
            </PageHero>

            <section id="buy" aria-labelledby="buy-heading" className="py-20">
                <div className="container-page">
                    <div className="max-w-2xl">
                        <p className="eyebrow text-brand-600">Buy</p>
                        <h2 id="buy-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                            Quality used trailers, honest pricing
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                            Call or email and ask about what&apos;s on the lot, or browse our inventory online.
                            We&apos;ll help you match
                            the trailer to your freight and budget.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <figure className="rounded-2xl bg-surface-muted p-6 ring-1 ring-line">
                            <Image
                                src={reeferImage}
                                alt="A red truck pulling a white refrigerated reefer trailer"
                                placeholder="blur"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="mx-auto h-auto w-full max-w-md"
                            />
                            <figcaption className="mt-4 text-center font-display text-xl font-bold text-ink">Reefers</figcaption>
                        </figure>
                        <figure className="rounded-2xl bg-surface-muted p-6 ring-1 ring-line">
                            <Image
                                src={dryVanImage}
                                alt="A blue truck pulling a dry van trailer"
                                placeholder="blur"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="mx-auto h-auto w-full max-w-md"
                            />
                            <figcaption className="mt-4 text-center font-display text-xl font-bold text-ink">Dry vans</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section id="sell" aria-labelledby="sell-heading" className="bg-brand-900 py-20 text-white">
                <div className="container-page grid items-center gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <p className="eyebrow text-accent-400">Sell or trade-in</p>
                        <h2 id="sell-heading" className="mt-3 text-4xl font-bold sm:text-5xl">Thinking of selling your trailer?</h2>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
                            Javco is always looking for quality inventory at a fair price.
                            Whether you want to trade in or downsize your
                            fleet, we&apos;ll make the process easy and pain-free. Tell us what you have.
                        </p>
                    </div>
                    <div className="flex lg:justify-end">
                        <a href={SELL_EMAIL} className="btn btn-primary px-6 py-3.5 text-base">
                            <Mail className="size-4" aria-hidden="true" /> Email us your trailer details
                        </a>
                    </div>
                </div>
            </section>

            <CtaBand />
            <ContactSection />
        </>
    )
}
