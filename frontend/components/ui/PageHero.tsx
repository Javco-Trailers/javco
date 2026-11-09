import Image, { type StaticImageData } from 'next/image'

interface PageHeroProps {
    eyebrow: string
    title: string
    description: string
    image?: StaticImageData
    imageAlt?: string
    children?: React.ReactNode
}

// Shared top-of-page banner for the inner pages. The image is preloaded since it is the LCP element.
export default function PageHero({ eyebrow, title, description, image, imageAlt = '', children }: PageHeroProps) {
    return (
        <section className="relative isolate overflow-hidden bg-brand-900 text-white">
            {image && (
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    className="-z-10 object-cover opacity-35"
                />
            )}
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950/90 via-brand-900/70 to-brand-900/30" aria-hidden="true" />
            <div className="container-page py-20 sm:py-24">
                <p className="eyebrow text-accent-400">{eyebrow}</p>
                <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-6xl">{title}</h1>
                <p className="mt-5 max-w-2xl text-lg text-brand-100">{description}</p>
                {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
        </section>
    )
}
