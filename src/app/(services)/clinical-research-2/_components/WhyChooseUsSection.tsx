'use client'

import { motion } from 'framer-motion'
import type { WhyUsItem } from '../_data/clinicalResearchData'

interface WhyChooseUsSectionProps {
    items: WhyUsItem[]
}

export default function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
    const borderColors = [
        'border-t-primary',
        'border-t-secondary',
        'border-t-emerald-500',
        'border-t-amber-500',
    ]

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-semibold mb-5">
                        Why DCS PLM?
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Why Choose{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Us
                        </span>
                    </h2>
                </motion.div>

                {/* 2x2 large feature blocks with top-border accent */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-white rounded-2xl p-7 sm:p-9 border-t-4 ${borderColors[i]} shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300">
                                <item.icon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
