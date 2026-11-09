import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ADDRESS_ONE_LINE, CONTACT, CREDIT_APPLICATION, FOUNDED_YEAR, MAPS_LINK, NAV_ITEMS, SITE_LEGAL_NAME } from '@/utils/site'

export default function SiteFooter() {
    return (
        <footer className="bg-brand-950 text-brand-100">
            <div className="container-page grid gap-10 py-14 md:grid-cols-3">
                <div>
                    <p className="font-display text-2xl font-bold text-white">Javco Trailer Sales</p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-200">
                        Family-built and trusted by Wisconsin and Chicagoland fleets since {FOUNDED_YEAR}.
                    </p>
                </div>

                <nav aria-label="Footer">
                    <p className="eyebrow text-brand-200">Explore</p>
                    <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                        {NAV_ITEMS.map(item => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:text-white hover:underline">{item.label}</Link>
                            </li>
                        ))}
                        <li>
                            <a href={CREDIT_APPLICATION} download className="hover:text-white hover:underline">Credit application</a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <p className="eyebrow text-brand-200">Contact</p>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-white">
                                <Phone className="size-4 shrink-0" aria-hidden="true" /> {CONTACT.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT.emailHref} className="flex items-center gap-2 hover:text-white">
                                <Mail className="size-4 shrink-0" aria-hidden="true" /> {CONTACT.email}
                            </a>
                        </li>
                        <li>
                            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white">
                                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> {ADDRESS_ONE_LINE}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10">
                <p className="container-page py-6 text-xs text-brand-200">
                    © {new Date().getFullYear()} {SITE_LEGAL_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
