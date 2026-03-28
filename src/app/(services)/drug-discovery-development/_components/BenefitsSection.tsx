'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { BenefitItem } from '../_data/drugDiscoveryData'

interface BenefitsSectionProps {
    benefits: BenefitItem[]
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-5">
                        Advantages
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Key{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Benefits
                        </span>
                    </h2>
                </motion.div>

                {/* Two-column checklist */}
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="flex items-start gap-3 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200"
                        >
                            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-primary" />
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
