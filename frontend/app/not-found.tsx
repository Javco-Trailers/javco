import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Page not found',
    robots: { index: false }
}

export default function NotFound() {
    return (
        <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
            <p className="eyebrow text-brand-600">404</p>
            <h1 className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">Wrong exit.</h1>
            <p className="mt-4 max-w-xl text-lg text-ink-muted">
                We couldn&apos;t find that page. It may have moved, or the link may be out of date.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/" className="btn btn-brand">Back to home</Link>
                <Link href="/inventory" className="btn btn-outline">Browse inventory</Link>
            </div>
        </section>
    )
}
