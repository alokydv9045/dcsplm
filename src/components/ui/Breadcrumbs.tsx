'use client'

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <Link href="/dashboard" className="hover:text-slate-900 flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-slate-900 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-900 font-medium truncate max-w-[200px]">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    )
}
