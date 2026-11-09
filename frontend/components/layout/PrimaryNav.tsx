'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/utils/site'

interface PrimaryNavProps {
    // Header actions (phone + quote) rendered after the links on desktop and inside the drawer on mobile
    children: React.ReactNode
}

function isActive(pathname: string, href: string) {
    return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export default function PrimaryNav({ children }: PrimaryNavProps) {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) {
            return
        }
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [open])

    const close = () => setOpen(false)

    return (
        <>
            <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-lg text-brand-800 hover:bg-brand-50 lg:hidden"
                aria-expanded={open}
                aria-controls="primary-nav"
                onClick={() => setOpen(value => !value)}
            >
                <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>

            <nav
                id="primary-nav"
                aria-label="Primary"
                className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-6 border-b border-line bg-white
                    px-4 pt-4 pb-6 shadow-raised lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:gap-8
                    lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
            >
                <ul className="flex flex-col gap-1 lg:flex-row lg:gap-1">
                    {NAV_ITEMS.map(item => {
                        const active = isActive(pathname, item.href)
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={close}
                                    aria-current={active ? 'page' : undefined}
                                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors lg:text-sm ${
                                        active
                                            ? 'bg-brand-50 text-brand-700'
                                            : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                    {children}
                </div>
            </nav>
        </>
    )
}
