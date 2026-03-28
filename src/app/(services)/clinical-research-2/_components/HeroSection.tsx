'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { SparklesCore } from '@/components/ui/SparklesCore'
import type { StatItem } from '../_data/clinicalResearchData'

interface HeroSectionProps {
    stats: StatItem[]
}

export default function HeroSection({ stats }: HeroSectionProps) {
    return (
        <section className="relative min-h-[620px] md:min-h-[720px] bg-[#0c0c1d] text-white overflow-hidden pt-20 sm:pt-24 md:pt-28">
            {/* Grid background — matches Smart Manufacturing */}
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

            {/* Diagonal accent stripes */}
            <div className="absolute -right-20 top-1/4 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[30deg]" />
            <div className="absolute -right-10 top-1/3 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[30deg]" />

            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                    {/* Left — large title block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                <Stethoscope className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-white/50 text-sm font-medium tracking-wide uppercase">
                                Education Programs
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08]">
                            Clinical{' '}
                            <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                                Research
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-10 max-w-lg">
                            Industry-leading clinical research training — from GCP fundamentals to job placement. Transform your career in one of healthcare&apos;s fastest-growing fields.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            >
                                Enroll Now <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#programs"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                View Programs
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — vertically stacked stat cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="flex-shrink-0 w-full max-w-xs space-y-3"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/[0.06] backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 ${
                                    i === 0
                                        ? 'bg-gradient-to-br from-primary/20 to-primary/5'
                                        : i === 1
                                        ? 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                                        : i === 2
                                        ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5'
                                        : 'bg-gradient-to-br from-amber-500/20 to-amber-500/5'
                                }`}
                            >
                                <stat.icon className={`w-8 h-8 ${
                                    i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : i === 2 ? 'text-emerald-400' : 'text-amber-400'
                                }`} />
                                <div>
                                    <div className="text-xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-white/30">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
