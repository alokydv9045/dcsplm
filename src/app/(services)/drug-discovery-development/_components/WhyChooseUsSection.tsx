'use client'

import { motion } from 'framer-motion'
import type { WhyUsItem } from '../_data/drugDiscoveryData'

interface WhyChooseUsSectionProps {
    items: WhyUsItem[]
}

export default function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-semibold mb-5">
                        Our Edge
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Why Choose{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            DCS PLM
                        </span>
                    </h2>
                </motion.div>

                {/* Large numbered feature cards — 1 row of 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative bg-gray-50 rounded-2xl p-7 sm:p-8 hover:bg-white hover:shadow-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Big gradient number */}
                            <span className={`absolute -top-4 -right-2 text-[100px] font-black leading-none select-none ${
                                i === 0 ? 'text-primary/[0.04]' : i === 1 ? 'text-secondary/[0.04]' : i === 2 ? 'text-emerald-500/[0.04]' : 'text-amber-500/[0.04]'
                            }`}>
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                                i === 0 ? 'bg-primary/10 group-hover:bg-primary' :
                                i === 1 ? 'bg-secondary/10 group-hover:bg-secondary' :
                                i === 2 ? 'bg-emerald-500/10 group-hover:bg-emerald-500' :
                                'bg-amber-500/10 group-hover:bg-amber-500'
                            }`}>
                                <item.icon className={`w-7 h-7 transition-colors duration-300 ${
                                    i === 0 ? 'text-primary group-hover:text-white' :
                                    i === 1 ? 'text-secondary group-hover:text-white' :
                                    i === 2 ? 'text-emerald-500 group-hover:text-white' :
                                    'text-amber-500 group-hover:text-white'
                                }`} />
                            </div>
                            <h4 className="relative z-10 text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                            <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
