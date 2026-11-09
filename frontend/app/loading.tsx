// Shown during client navigations while the next route's payload streams in.
export default function Loading() {
    return (
        <div role="status" aria-live="polite" className="animate-pulse">
            <span className="sr-only">Loading…</span>
            <div className="bg-brand-900">
                <div className="container-page space-y-5 py-24">
                    <div className="h-3 w-32 rounded-sm bg-white/20" />
                    <div className="h-12 w-full max-w-2xl rounded-sm bg-white/20" />
                    <div className="h-5 w-full max-w-xl rounded-sm bg-white/10" />
                </div>
            </div>
            <div className="container-page grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }, (_, index) => <div key={index} className="h-44 rounded-2xl bg-surface-muted" />)}
            </div>
        </div>
    )
}
