'use client'

import { motion } from 'framer-motion'
import type { BenefitItem } from '../_data/smartManufacturingData'

interface BenefitsSectionProps {
    benefits: BenefitItem[]
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
            {/* Subtle grid */}
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
                        Why It Matters
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Key{' '}
                        <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                            Benefits
                        </span>
                    </h2>
                </motion.div>

                {/* Numbered list with large numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 max-w-5xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300 group"
                        >
                            <span className={`flex-shrink-0 text-3xl font-black leading-none mt-0.5 ${
                                i % 3 === 0 ? 'text-primary/60' : i % 3 === 1 ? 'text-secondary/60' : 'text-emerald-500/60'
                            }`}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm sm:text-base text-white/50 font-medium group-hover:text-white/70 transition-colors leading-relaxed">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
