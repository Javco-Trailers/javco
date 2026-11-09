import { Mail, MapPin, Phone } from 'lucide-react'
import { ADDRESS_ONE_LINE, CONTACT, MAPS_EMBED, MAPS_LINK } from '@/utils/site'

const CHANNELS = [
    { icon: Phone, label: 'Call us', value: CONTACT.phoneDisplay, href: CONTACT.phoneHref, external: false },
    { icon: Mail, label: 'Email us', value: CONTACT.email, href: CONTACT.emailHref, external: false },
    { icon: MapPin, label: 'Visit the lot', value: ADDRESS_ONE_LINE, href: MAPS_LINK, external: true }
]

export default function ContactSection() {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="bg-surface-muted py-20">
            <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="eyebrow text-brand-600">Get in touch</p>
                    <h2 id="contact-heading" className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">
                        Talk to a real person today
                    </h2>
                    <p className="mt-4 max-w-lg text-lg text-ink-muted">
                        Call, email or stop by our lot on I-94 between Milwaukee and Chicago.
                        We&apos;ll help you find the right trailer
                        at the right price.
                    </p>
                    <ul className="mt-8 grid gap-4">
                        {CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    {...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
                                    className="
                                        group flex items-center gap-4 rounded-xl bg-white p-4 shadow-card ring-1 ring-line
                                        transition hover:ring-brand-200
                                    "
                                >
                                    <span className="
                                        flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600
                                        group-hover:bg-brand-600 group-hover:text-white
                                    "
                                    >
                                        <Icon className="size-5" aria-hidden="true" />
                                    </span>
                                    <span>
                                        <span className="block text-sm text-ink-muted">{label}</span>
                                        <span className="block font-semibold text-ink">{value}</span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="overflow-hidden rounded-2xl bg-brand-100 shadow-card ring-1 ring-line">
                    <iframe
                        title={`Map showing Javco Trailer Sales at ${ADDRESS_ONE_LINE}`}
                        src={MAPS_EMBED}
                        className="aspect-4/3 w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}
