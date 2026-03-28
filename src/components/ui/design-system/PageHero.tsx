'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { SparklesCore } from '@/components/ui/SparklesCore'

interface CtaLink {
    href: string
    label: string
}

interface PageHeroProps {
    badge?: string
    badgeIcon?: LucideIcon
    title: string
    /** Optional: the portion of the title to render in gradient text. If omitted, the full title renders in gradient. */
    titleHighlight?: string
    subtitle: string
    primaryCta?: CtaLink
    secondaryCta?: CtaLink
    minHeight?: string
    backgroundImage?: string
}

export default function PageHero({
    badge,
    badgeIcon: BadgeIcon,
    title,
    titleHighlight,
    subtitle,
    primaryCta,
    secondaryCta,
    minHeight = 'min-h-[600px] md:min-h-[700px]',
    backgroundImage,
}: PageHeroProps) {
    return (
        <section
            className={`relative ${minHeight} bg-[#0c0c1d] text-white overflow-hidden pt-20 sm:pt-24 md:pt-28 flex items-center`}
        >
            {/* Background Image Overlay */}
            {backgroundImage && (
                <div 
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: `url("${backgroundImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}

            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Sparkle particles */}
            <SparklesCore className="opacity-30" particleCount={40} particleColor="#175CFF" />

            {/* Gradient orbs */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />

            {/* Orbiting ring decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.03]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.05]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/[0.07]" />

            <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 w-full">
                {/* Badge label */}
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                    >
                        {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
                        {badge}
                    </motion.div>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.08]"
                >
                    {titleHighlight ? (
                        <>
                            {title.replace(titleHighlight, '').trim()}{' '}
                            <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                                {titleHighlight}
                            </span>
                        </>
                    ) : (
                        <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                            {title}
                        </span>
                    )}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    {subtitle}
                </motion.p>

                {/* CTA buttons */}
                {(primaryCta || secondaryCta) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {primaryCta && (
                            <Link
                                href={primaryCta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            >
                                {primaryCta.label} <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                        {secondaryCta && (
                            <Link
                                href={secondaryCta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                {secondaryCta.label}
                            </Link>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
