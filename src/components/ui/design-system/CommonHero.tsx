'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { SparklesCore } from '@/components/ui/SparklesCore'

interface Stat {
    icon: LucideIcon
    value: string
    label: string
}

interface CommonHeroProps {
    title: string
    subtitle: string
    description: string
    stats?: Stat[]
    primaryBtn?: { label: string; href: string }
    secondaryBtn?: { label: string; href: string }
    badge?: { label: string; icon: LucideIcon }
    backgroundImage?: string
    backgroundVideo?: string
}

export default function CommonHero({
    title,
    subtitle,
    description,
    stats,
    primaryBtn,
    secondaryBtn,
    badge,
    backgroundImage,
    backgroundVideo,
}: CommonHeroProps) {
    return (
        <section className="relative min-h-[700px] bg-[#0c0c1d] text-white overflow-hidden pt-20 sm:pt-24 md:pt-28 flex items-center">
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

            {/* Background Video Overlay */}
            {backgroundVideo && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 z-0 w-full h-full object-cover opacity-50"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
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

            <SparklesCore className="opacity-30" particleCount={40} particleColor="#175CFF" />

            {/* Gradient orbs */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 w-full">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                    >
                        {badge.icon && <badge.icon className="w-4 h-4" />}
                        {badge.label}
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.08]"
                >
                    {title}{' '}
                    <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                        {subtitle}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    {description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center mb-16"
                >
                    {primaryBtn && (
                        <Link
                            href={primaryBtn.href}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                        >
                            {primaryBtn.label} <ArrowRight className="w-4 h-4" />
                        </Link>
                    )}
                    {secondaryBtn && (
                        <Link
                            href={secondaryBtn.href}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            {secondaryBtn.label}
                        </Link>
                    )}
                </motion.div>

                {/* Stats */}
                {stats && stats.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-10 border-t border-white/5"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-white/30 uppercase tracking-widest font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
