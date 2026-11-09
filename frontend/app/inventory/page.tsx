import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import ContactSection from '@/components/contact/ContactSection'
import InventoryEmbed from '@/components/inventory/InventoryEmbed'
import heroImage from '@/public/images/reefers-lined-up.jpg'
import { pageMetadata } from '@/utils/seo'
import { CONTACT, INVENTORY_EMBED } from '@/utils/site'

export const metadata: Metadata = pageMetadata({
    title: 'Trailer Inventory',
    description: 'Browse used dry vans, reefers, flatbeds and tankers currently for sale at Javco Trailer Sales in Franksville, WI.',
    path: '/inventory'
})

export default function InventoryPage() {
    return (
        <>
            <PageHero
                eyebrow="Inventory"
                title="Trailers on the lot right now"
                description="Our live listings update as trailers come and go. See something you like? Call or request a quote and we'll hold it for you."
                image={heroImage}
            >
                <a href={CONTACT.phoneHref} className="btn btn-primary">Call {CONTACT.phoneDisplay}</a>
                <a href={INVENTORY_EMBED} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                    Open full listings <ExternalLink className="size-4" aria-hidden="true" />
                </a>
            </PageHero>

            <section aria-label="Current inventory" className="bg-surface-muted py-12">
                <div className="container-page">
                    <InventoryEmbed />
                </div>
            </section>

            <ContactSection />
        </>
    )
}
