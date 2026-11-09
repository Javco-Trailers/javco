'use client'

import { useRef, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { FileText } from 'lucide-react'
import QuoteDialog from './QuoteDialog'

interface QuoteButtonProps {
    className?: string
    label?: string
}

const subscribe = () => () => {}

export default function QuoteButton({ className, label = 'Request a quote' }: QuoteButtonProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    // false during SSR and hydration, true afterwards. The dialog is portalled to <body> so it still opens when the
    // button sits inside a collapsed mobile menu.
    const isClient = useSyncExternalStore(subscribe, () => true, () => false)

    return (
        <>
            <button type="button" className={className} onClick={() => dialogRef.current?.showModal()}>
                <FileText className="size-4" aria-hidden="true" />
                {label}
            </button>
            {isClient && createPortal(<QuoteDialog ref={dialogRef} />, document.body)}
        </>
    )
}
