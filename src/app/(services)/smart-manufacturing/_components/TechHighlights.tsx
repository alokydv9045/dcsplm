'use client'

import { motion } from 'framer-motion'
import type { TechArea } from '../_data/smartManufacturingData'

interface TechHighlightsProps {
    title: string
    highlight: string
    subtitle: string
    areas: TechArea[]
}

export default function TechHighlights({ title, highlight, subtitle, areas }: TechHighlightsProps) {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 text-secondary text-sm font-semibold mb-5">
                        Core Technologies
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {title}{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {highlight}
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Alternating horizontal cards */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    {areas.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group ${
                                i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Icon */}
                            <div className={`flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}>
                                <area.icon className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                            </div>

                            {/* Content */}
                            <div className={`text-center sm:text-left ${i % 2 === 1 ? 'sm:text-right' : ''}`}>
                                <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{area.title}</h4>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">{area.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
