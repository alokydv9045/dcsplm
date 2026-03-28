'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, FlaskConical } from 'lucide-react'
import { SparklesCore } from '@/components/ui/SparklesCore'
import type { StatItem } from '../_data/drugDiscoveryData'

interface HeroSectionProps {
    stats: StatItem[]
}

export default function HeroSection({ stats }: HeroSectionProps) {
    return (
        <section className="relative min-h-[650px] md:min-h-[750px] bg-[#0c0c1d] text-white overflow-hidden pt-20 sm:pt-24 md:pt-28">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <SparklesCore className="opacity-30" particleCount={40} particleColor="#175CFF" />

            {/* Gradient orbs */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />

            {/* Orbiting ring decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.03]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.05]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/[0.07]" />

            <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                >
                    <FlaskConical className="w-4 h-4" />
                    End-to-End Drug Development Partner
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.08]"
                >
                    Drug Discovery &{' '}
                    <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                        Development
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    From target identification to IND submission — accelerating the journey from molecule to medicine with AI-driven precision and scientific excellence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center mb-16"
                >
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                        Start a Project <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="#pipeline"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        View Pipeline
                    </Link>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 text-center hover:-translate-y-1 transition-all duration-300"
                        >
                            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${
                                i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : i === 2 ? 'text-emerald-400' : 'text-amber-400'
                            }`} />
                            <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                            <div className="text-xs text-white/30 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
