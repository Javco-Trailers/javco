import Link from 'next/link'
import { Phone } from 'lucide-react'
import QuoteButton from '@/components/quote/QuoteButton'
import { CONTACT } from '@/utils/site'

interface CtaBandProps {
    title?: string
    description?: string
}

export default function CtaBand({
    title = 'Ready to put a trailer to work?',
    description = 'Get a quote in minutes. Owner-operators and fleets welcome.'
}: CtaBandProps) {
    return (
        <section className="bg-brand-600">
            <div className="container-page flex flex-col gap-6 py-12 text-white md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="mt-2 text-brand-100">{description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <QuoteButton className="btn btn-primary" />
                    <a href={CONTACT.phoneHref} className="btn btn-ghost-light">
                        <Phone className="size-4" aria-hidden="true" /> {CONTACT.phoneDisplay}
                    </a>
                    <Link href="/inventory" className="btn btn-ghost-light">Browse inventory</Link>
                </div>
            </div>
        </section>
    )
}
