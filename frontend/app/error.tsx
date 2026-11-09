'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CONTACT } from '@/utils/site'

export default function RouteError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
            <p className="eyebrow text-brand-600">Something went wrong</p>
            <h1 className="mt-3 text-4xl font-bold text-brand-900 sm:text-5xl">We hit a pothole.</h1>
            <p className="mt-4 max-w-xl text-lg text-ink-muted">
                Please try again. If it keeps happening, call us at{' '}
                <a href={CONTACT.phoneHref} className="font-semibold text-brand-700 underline">{CONTACT.phoneDisplay}</a>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={reset} className="btn btn-brand">Try again</button>
                <Link href="/" className="btn btn-outline">Back to home</Link>
            </div>
        </section>
    )
}
