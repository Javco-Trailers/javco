import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import javcoLogo from '@/public/javco_logo.png'
import { CONTACT } from '@/utils/site'
import PrimaryNav from './PrimaryNav'
import QuoteButton from '@/components/quote/QuoteButton'

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
            <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
                <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Javco Trailer Sales home">
                    <Image src={javcoLogo} alt="" priority className="h-9 w-auto lg:h-11" />
                    <span className="hidden font-display text-lg leading-tight font-bold text-brand-800 sm:block">
                        Javco
                        <span className="block text-xs font-semibold tracking-wide text-ink-muted">Trailer Sales, Inc.</span>
                    </span>
                </Link>

                <PrimaryNav>
                    <a href={CONTACT.phoneHref} className="btn btn-outline w-full lg:hidden lg:w-auto xl:inline-flex">
                        <Phone className="size-4" aria-hidden="true" />
                        {CONTACT.phoneDisplay}
                    </a>
                    <QuoteButton className="btn btn-primary w-full lg:w-auto" />
                </PrimaryNav>
            </div>
        </header>
    )
}
