'use client'

import { motion } from 'framer-motion'
import type { BenefitItem } from '../_data/innovationLabData'

interface BenefitsSectionProps {
    benefits: BenefitItem[]
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-5">
                        Advantages
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Why Choose Our{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Lab
                        </span>
                    </h2>
                </motion.div>

                {/* Icon grid — 5 columns, icons prominent */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="group bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                                <benefit.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
