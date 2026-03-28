'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import type { BenefitItem } from '../_data/clinicalResearchData'

interface BenefitsSectionProps {
    benefits: BenefitItem[]
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
            {/* Grid background — matches Smart Manufacturing */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-5">
                        Advantages
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Key{' '}
                        <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                            Benefits
                        </span>
                    </h2>
                </motion.div>

                {/* Pill-tag cloud layout */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm font-medium hover:bg-white/[0.07] hover:text-white/80 hover:border-white/10 transition-all duration-300 hover:scale-105 cursor-default"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-primary/60 flex-shrink-0" />
                            {benefit.text}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
