'use client'

import { useId } from 'react'
import { Download, X } from 'lucide-react'
import { buildQuoteMailto, QUOTE_PURPOSES, type QuoteRequest } from '@/utils/quote'
import { CREDIT_APPLICATION, TRAILER_TYPES } from '@/utils/site'

interface QuoteDialogProps {
    ref: React.Ref<HTMLDialogElement>
}

const inputClass = 'mt-1 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink shadow-xs '
    + 'placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none'
const labelClass = 'block text-sm font-medium text-ink'

export default function QuoteDialog({ ref }: QuoteDialogProps) {
    const id = useId()
    const field = (name: string) => `${id}-${name}`

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const values = Object.fromEntries(new FormData(form)) as unknown as QuoteRequest
        // There is no backend; hand the request to the visitor's mail client, pre-filled.
        window.location.href = buildQuoteMailto(values)
        form.closest('dialog')?.close()
    }

    return (
        <dialog
            ref={ref}
            aria-labelledby={field('title')}
            className="m-auto w-[min(40rem,calc(100%-2rem))] rounded-2xl bg-white p-0 text-ink shadow-raised backdrop:bg-brand-950/60
                backdrop:backdrop-blur-sm"
        >
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
                <div>
                    <h2 id={field('title')} className="text-2xl font-bold text-brand-900">Request a quote</h2>
                    <p className="mt-1 text-sm text-ink-muted">
                        Tell us what you need. Submitting opens your email app with the details filled in.
                    </p>
                </div>
                <form method="dialog">
                    <button
                        type="submit"
                        className="inline-flex size-9 items-center justify-center rounded-lg text-ink-muted hover:bg-surface-muted"
                    >
                        <span className="sr-only">Close</span>
                        <X className="size-5" aria-hidden="true" />
                    </button>
                </form>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 px-6 py-5 sm:grid-cols-2">
                <div>
                    <label htmlFor={field('firstName')} className={labelClass}>First name</label>
                    <input id={field('firstName')} name="firstName" required autoComplete="given-name" className={inputClass} />
                </div>
                <div>
                    <label htmlFor={field('lastName')} className={labelClass}>Last name</label>
                    <input id={field('lastName')} name="lastName" required autoComplete="family-name" className={inputClass} />
                </div>
                <div>
                    <label htmlFor={field('phone')} className={labelClass}>Phone</label>
                    <input id={field('phone')} name="phone" type="tel" autoComplete="tel" className={inputClass} />
                </div>
                <div>
                    <label htmlFor={field('zipCode')} className={labelClass}>ZIP code</label>
                    <input
                        id={field('zipCode')}
                        name="zipCode"
                        required
                        inputMode="numeric"
                        autoComplete="postal-code"
                        pattern="\d{5}(-\d{4})?"
                        title="5-digit ZIP code"
                        className={inputClass}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor={field('business')} className={labelClass}>
                        Business name <span className="font-normal text-ink-muted">(optional)</span>
                    </label>
                    <input id={field('business')} name="business" autoComplete="organization" className={inputClass} />
                </div>
                <div>
                    <label htmlFor={field('purpose')} className={labelClass}>I want to</label>
                    <select id={field('purpose')} name="purpose" required className={inputClass} defaultValue="">
                        <option value="" disabled>Choose one</option>
                        {QUOTE_PURPOSES.map(purpose => <option key={purpose}>{purpose}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor={field('trailerType')} className={labelClass}>Trailer type</label>
                    <select id={field('trailerType')} name="trailerType" className={inputClass} defaultValue="Not sure yet">
                        {[...TRAILER_TYPES, 'Not sure yet'].map(type => <option key={type}>{type}</option>)}
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor={field('lengthOfUse')} className={labelClass}>
                        How long do you need it? <span className="font-normal text-ink-muted">(optional)</span>
                    </label>
                    <input id={field('lengthOfUse')} name="lengthOfUse" placeholder="e.g. 3 months" className={inputClass} />
                </div>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <a href={CREDIT_APPLICATION} download className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:underline">
                        <Download className="size-4" aria-hidden="true" />
                        Credit application (PDF)
                    </a>
                    <button type="submit" className="btn btn-brand">Send request</button>
                </div>
            </form>
        </dialog>
    )
}
