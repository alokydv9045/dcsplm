'use client'

import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-md">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong</h2>
                <p className="text-slate-600 mb-8">
                    An unexpected error occurred. Please try again or return to the home page.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="btn-primary py-2 px-6"
                    >
                        Try Again
                    </button>
                    <Link href="/" className="btn-outline py-2 px-6">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
