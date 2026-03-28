'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SparklesCore } from '@/components/ui/SparklesCore'
import type { StatItem } from '../_data/smartManufacturingData'

interface HeroSectionProps {
    title: string
    highlight: string
    subtitle: string
    badge: string
    stats: StatItem[]
}

export default function HeroSection({ title, highlight, subtitle, badge, stats }: HeroSectionProps) {
    return (
        <section className="relative min-h-[600px] md:min-h-[700px] bg-[#0c0c1d] text-white overflow-hidden pt-20 sm:pt-24 md:pt-28">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <SparklesCore className="opacity-30" particleCount={40} particleColor="#175CFF" />

            {/* Gradient glow orbs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 sm:py-14 md:py-20">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            {badge}
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                            {title}
                            <br />
                            <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                                {highlight}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-8">
                            {subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            >
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Stats dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className={`relative rounded-2xl p-6 sm:p-7 border border-white/[0.06] backdrop-blur-sm overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
                                        i === 0
                                            ? 'bg-gradient-to-br from-primary/20 to-primary/5'
                                            : i === 1
                                            ? 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                                            : i === 2
                                            ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5'
                                            : 'bg-gradient-to-br from-amber-500/20 to-amber-500/5'
                                    }`}
                                >
                                    <stat.icon className={`w-8 h-8 mb-3 ${
                                        i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : i === 2 ? 'text-emerald-400' : 'text-amber-400'
                                    }`} />
                                    <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-white/50">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
