import Link from 'next/link'
import { Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-md">
                <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
                <p className="text-slate-600 mb-8">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="btn-primary py-2 px-6">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
