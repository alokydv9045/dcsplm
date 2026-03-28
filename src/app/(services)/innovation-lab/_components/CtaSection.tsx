'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

interface CtaSectionProps {
    title: string
    description: string
    primaryLink: { href: string; label: string }
    secondaryLink?: { href: string; label: string }
}

export default function CtaSection({ title, description, primaryLink, secondaryLink }: CtaSectionProps) {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2rem] overflow-hidden"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
                    }}
                >
                    {/* Decorative glowing orbs */}
                    <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-secondary/15 rounded-full blur-[100px]" />

                    <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        {/* Left content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                Start Innovating
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {title}
                            </h2>
                            <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </div>

                        {/* Right buttons — stacked vertically */}
                        <div className="flex flex-col gap-3 sm:gap-4 flex-shrink-0">
                            <Link
                                href={primaryLink.href}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-rose-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                            >
                                {primaryLink.label}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            {secondaryLink && (
                                <Link
                                    href={secondaryLink.href}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white/70 font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                                >
                                    <BookOpen className="w-5 h-5" />
                                    {secondaryLink.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
