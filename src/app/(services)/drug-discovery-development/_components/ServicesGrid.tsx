'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ServiceItem } from '../_data/drugDiscoveryData'

interface ServicesGridProps {
    services: ServiceItem[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16"
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
                            Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Our{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Services
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-base sm:text-lg md:text-right">
                        Comprehensive drug development capabilities from target to clinic
                    </p>
                </motion.div>

                {/* Clean list-style rows with arrows */}
                <div className="space-y-3">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
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
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                                    {svc.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                    {svc.desc}
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden sm:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
