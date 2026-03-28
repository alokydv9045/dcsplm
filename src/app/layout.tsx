import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'
import { ToastProvider } from '@/components/providers/ToastProvider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'DCS PLM - Empowering Innovation Through Technology',
    description: 'DCS PLM offers end-to-end consulting and technology solutions that drive growth, efficiency, and transformation. Expertise in skill development, clinical research, healthcare IT, and consultancy services.',
    keywords: 'DCS PLM, clinical research, pharmacovigilance, healthcare IT, consulting, skill development, innovation',
    authors: [{ name: 'DCS PLM' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://dcsplm.com',
        title: 'DCS PLM - Empowering Innovation Through Technology',
        description: 'End-to-end consulting and technology solutions for business growth and transformation',
        siteName: 'DCS PLM',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <ToastProvider />
                <Header />
                <main>{children}</main>
                <Footer />
                <FloatingContact />
            </body>
        </html>
    )
}
