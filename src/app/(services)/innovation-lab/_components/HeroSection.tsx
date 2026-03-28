'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import type { StatItem } from '../_data/innovationLabData'

interface HeroSectionProps {
    stats: StatItem[]
}

const floatingPills = [
    { text: 'AI/ML', x: '8%', y: '25%', delay: 0 },
    { text: 'IoT', x: '85%', y: '20%', delay: 0.3 },
    { text: '3D Printing', x: '75%', y: '70%', delay: 0.6 },
    { text: 'AR/VR', x: '12%', y: '72%', delay: 0.9 },
    { text: 'Blockchain', x: '55%', y: '15%', delay: 0.4 },
    { text: 'Edge AI', x: '35%', y: '80%', delay: 0.7 },
]

export default function HeroSection({ stats }: HeroSectionProps) {
    return (
        <section className="relative min-h-[650px] md:min-h-[750px] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
            style={{
                background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
            }}
        >
            {/* Animated floating tech pills */}
            {floatingPills.map((pill, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + pill.delay, duration: 0.5 }}
                    className="absolute hidden md:block"
                    style={{ left: pill.x, top: pill.y }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/30 text-xs font-medium backdrop-blur-sm"
                    >
                        {pill.text}
                    </motion.div>
                </motion.div>
            ))}

            {/* Glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(228,53,56,0.12) 0%, rgba(23,92,255,0.08) 40%, transparent 70%)',
                }}
            />

            <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 text-white/70 text-sm font-medium mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    Where Ideas Transform Into Breakthroughs
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] text-white"
                >
                    Innovation{' '}
                    <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                        Lab
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    A state-of-the-art facility where creativity meets technology. From proof-of-concept to market-ready products — we accelerate innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center mb-16"
                >
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-rose-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                    >
                        Start a Project <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="#process"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white/80 font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        How It Works
                    </Link>
                </motion.div>

                {/* Stats as a horizontal pill bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="inline-flex flex-wrap justify-center gap-2 sm:gap-3"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm"
                        >
                            <stat.icon className="w-4 h-4 text-primary/70" />
                            <span className="text-lg font-bold text-white">{stat.value}</span>
                            <span className="text-xs text-white/30">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
