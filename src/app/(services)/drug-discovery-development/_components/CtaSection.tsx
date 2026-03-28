'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

interface CtaSectionProps {
    title: string
    description: string
    primaryLink: { href: string; label: string }
    secondaryLink?: { href: string; label: string }
}

export default function CtaSection({ title, description, primaryLink, secondaryLink }: CtaSectionProps) {
    return (
        <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[100px]" />

            {/* Orbit rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.05]" />

            <div className="relative z-10 container-custom text-center py-4 sm:py-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Get Started
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight">
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/40 leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            href={primaryLink.href}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm sm:text-base"
                        >
                            {primaryLink.label} <ArrowRight className="w-5 h-5" />
                        </Link>
                        {secondaryLink && (
                            <Link
                                href={secondaryLink.href}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                            >
                                <BookOpen className="w-5 h-5" />
                                {secondaryLink.label}
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
