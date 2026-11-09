'use client'

import { useEffect, useState } from 'react'
import { INVENTORY_EMBED } from '@/utils/site'

// Cherry Trader only allows www.javco.co to frame this widget, so it stays blank on localhost and preview deploys.
export default function InventoryEmbed() {
    const [loaded, setLoaded] = useState(false)

    // onLoad can fire before hydration attaches the handler; never leave the skeleton up forever.
    useEffect(() => {
        const timer = window.setTimeout(() => setLoaded(true), 5000)
        return () => window.clearTimeout(timer)
    }, [])

    return (
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line" aria-busy={!loaded}>
            {!loaded && (
                <div className="absolute inset-0 grid content-start gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
                    {Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="animate-pulse space-y-3">
                            <div className="aspect-4/3 rounded-xl bg-skeleton" />
                            <div className="h-4 w-3/4 rounded-sm bg-skeleton" />
                            <div className="h-4 w-1/2 rounded-sm bg-skeleton" />
                        </div>
                    ))}
                </div>
            )}
            <iframe
                title="Javco Trailer Sales current inventory listings"
                src={INVENTORY_EMBED}
                onLoad={() => setLoaded(true)}
                className="relative block h-[1100px] w-full"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    )
}
