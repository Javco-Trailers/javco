import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeDollarSign, Box, Handshake, Layers, Snowflake, Truck, Warehouse, Droplets } from 'lucide-react'
import heroImage from '@/public/images/aerial-lot.jpg'
import signImage from '@/public/images/javco-sign.jpg'
import foundersImage from '@/public/images/founders-early.jpg'
import ContactSection from '@/components/contact/ContactSection'
import CtaBand from '@/components/ui/CtaBand'
import QuoteButton from '@/components/quote/QuoteButton'
import { canonicalUrl } from '@/utils/seo'
import { FOUNDED_YEAR } from '@/utils/site'

export const metadata: Metadata = {
    alternates: { canonical: canonicalUrl('/') }
}

const TRAILERS = [
    { icon: Box, name: 'Dry Vans', blurb: 'The everyday workhorse for general freight and on-site storage.' },
    { icon: Snowflake, name: 'Reefers', blurb: 'Temperature-controlled trailers for food, floral and pharma loads.' },
    { icon: Layers, name: 'Flatbeds', blurb: 'Open decks for steel, lumber, machinery and oversized cargo.' },
    { icon: Droplets, name: 'Tankers', blurb: 'Liquid and bulk tankers for specialized hauling.' }
]

const SERVICES = [
    {
        icon: Truck,
        title: 'Rent',
        href: '/rentals',
        body: 'Short and long-term cartage and OTR rentals from a quality multi-brand fleet. Owner-operators welcome.'
    },
    {
        icon: BadgeDollarSign,
        title: 'Buy',
        href: '/sales',
        body: 'Licensed dealer of used dry vans, reefers, flatbeds and tankers at fair, straightforward prices.'
    },
    {
        icon: Handshake,
        title: 'Sell or trade-in',
        href: '/sales#sell',
        body: 'Downsizing your fleet? We buy quality trailers and make the process easy and pain-free.'
    },
    {
        icon: Warehouse,
        title: 'Storage',
        href: '/rentals#storage',
        body: 'Free up a cramped warehouse with secure storage trailers delivered right to your dock or jobsite.'
    }
]

const STATS = [
    { value: `${new Date().getFullYear() - FOUNDED_YEAR}+`, label: 'years in business' },
    { value: 'I-94', label: 'between Milwaukee & Chicago' },
    { value: '4', label: 'trailer types in stock' }
]

export default function HomePage() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-brand-950 text-white">
                <Image
                    src={heroImage}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    className="-z-10 object-cover opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950 via-brand-950/80 to-brand-900/20" aria-hidden="true" />
                <div className="container-page grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
                    <div className="lg:col-span-7">
                        <p className="eyebrow text-accent-400">Franksville, Wisconsin · Since {FOUNDED_YEAR}</p>
                        <h1 className="mt-4 text-5xl leading-[1.05] font-bold sm:text-7xl">
                            Semi-trailers to buy, rent &amp; store.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-brand-100 sm:text-xl">
                            Dry vans, reefers, flatbeds and tankers for storage, cartage and over-the-road use, backed by four
                            decades of honest dealing.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link href="/inventory" className="btn btn-primary px-6 py-3.5 text-base">
                                View current inventory <ArrowRight className="size-4" aria-hidden="true" />
                            </Link>
                            <QuoteButton className="btn btn-ghost-light px-6 py-3.5 text-base" />
                        </div>
                    </div>
                </div>
            </section>

            <section aria-label="At a glance" className="border-b border-line bg-white">
                <dl className="container-page grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {STATS.map(stat => (
                        <div key={stat.label} className="flex flex-col items-center gap-1 py-8 text-center">
                            <dt className="order-2 text-sm text-ink-muted">{stat.label}</dt>
                            <dd className="order-1 font-display text-4xl font-bold text-brand-700">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section aria-labelledby="trailers-heading" className="py-20">
                <div className="container-page">
                    <div className="max-w-2xl">
                        <p className="eyebrow text-brand-600">What we carry</p>
                        <h2 id="trailers-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                            The right trailer for the job
                        </h2>
                    </div>
                    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {TRAILERS.map(({ icon: Icon, name, blurb }) => (
                            <li key={name} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                    <Icon className="size-6" aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 text-2xl font-bold text-ink">{name}</h3>
                                <p className="mt-2 text-sm/relaxed text-ink-muted">{blurb}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section aria-labelledby="services-heading" className="bg-surface-muted py-20">
                <div className="container-page">
                    <div className="max-w-2xl">
                        <p className="eyebrow text-brand-600">How we help</p>
                        <h2 id="services-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                            One lot. Every trailer need.
                        </h2>
                    </div>
                    <ul className="mt-12 grid gap-6 md:grid-cols-2">
                        {SERVICES.map(({ icon: Icon, title, href, body }) => (
                            <li key={title}>
                                <Link
                                    href={href}
                                    className="
                                        group flex h-full gap-5 rounded-2xl bg-white p-6 shadow-card ring-1 ring-line transition
                                        hover:-translate-y-0.5 hover:shadow-raised hover:ring-brand-200
                                    "
                                >
                                    <span className="
                                        flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white
                                    ">
                                        <Icon className="size-7" aria-hidden="true" />
                                    </span>
                                    <span>
                                        <span className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
                                            {title}
                                            <ArrowRight
                                                className="size-5 text-brand-600 transition-transform group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="mt-2 block leading-relaxed text-ink-muted">{body}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section aria-labelledby="heritage-heading" className="py-20">
                <div className="container-page grid items-center gap-12 lg:grid-cols-2">
                    <div className="relative">
                        <Image
                            src={foundersImage}
                            alt="Javco founders Avner Hizmi and John Griska at a desk in the company's early days"
                            placeholder="blur"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="rounded-2xl shadow-raised"
                        />
                        <Image
                            src={signImage}
                            alt="The Javco Trailer Sales sign"
                            placeholder="blur"
                            sizes="(min-width: 1024px) 20vw, 40vw"
                            className="
                                absolute -right-4 -bottom-8 hidden w-2/5 rounded-xl border-4 border-white shadow-raised sm:block
                            "
                        />
                    </div>
                    <div>
                        <p className="eyebrow text-brand-600">Our story</p>
                        <h2 id="heritage-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                            Built on a handshake in {FOUNDED_YEAR}
                        </h2>
                        <p className="mt-5 text-lg/relaxed text-ink-muted">
                            Javco was founded by an unlikely duo, Avner Hizmi and John Griska,
                            who built a network of trusted vendors and
                            customers across the Milwaukee and Chicago markets. Their lot on I-94 is still our home base today.
                        </p>
                        <Link href="/about" className="mt-8 btn btn-outline">
                            Read our history <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <CtaBand />
            <ContactSection />
        </>
    )
}
