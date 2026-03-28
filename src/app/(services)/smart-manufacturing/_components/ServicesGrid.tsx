'use client'

import { motion } from 'framer-motion'
import type { ServiceItem } from '../_data/smartManufacturingData'

interface ServicesGridProps {
    title: string
    highlight: string
    subtitle: string
    services: ServiceItem[]
}

export default function ServicesGrid({ title, highlight, subtitle, services }: ServicesGridProps) {
    return (
        <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
                                What We Offer
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                {title}{' '}
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    {highlight}
                                </span>
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-base sm:text-lg md:text-right">
                            {subtitle}
                        </p>
                    </div>
                </motion.div>

                {/* Bento grid layout — mixed sizes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((svc, i) => {
                        // First and last cards span 2 columns for bento effect
                        const isWide = i === 0 || i === services.length - 1
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className={`group relative rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                                    isWide ? 'lg:col-span-2' : ''
                                }`}
                            >
                                {/* Top accent bar */}
                                <div className={`h-1 w-full bg-gradient-to-r ${
                                    i % 3 === 0 ? 'from-primary to-rose-400' :
                                    i % 3 === 1 ? 'from-secondary to-blue-400' :
                                    'from-emerald-500 to-teal-400'
                                }`} />

                                <div className={`p-6 sm:p-7 ${isWide ? 'md:flex md:items-start md:gap-6' : ''}`}>
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 md:mb-0 flex-shrink-0 transition-all duration-300 ${
                                        i % 3 === 0 ? 'bg-primary/10 group-hover:bg-primary' :
                                        i % 3 === 1 ? 'bg-secondary/10 group-hover:bg-secondary' :
                                        'bg-emerald-500/10 group-hover:bg-emerald-500'
                                    }`}>
                                        <svc.icon className={`w-7 h-7 transition-colors duration-300 ${
                                            i % 3 === 0 ? 'text-primary group-hover:text-white' :
                                            i % 3 === 1 ? 'text-secondary group-hover:text-white' :
                                            'text-emerald-500 group-hover:text-white'
                                        }`} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                            {svc.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                            {svc.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
