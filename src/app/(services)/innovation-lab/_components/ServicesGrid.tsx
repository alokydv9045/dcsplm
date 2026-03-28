'use client'

import { motion } from 'framer-motion'
import type { ServiceItem } from '../_data/innovationLabData'

interface ServicesGridProps {
    services: ServiceItem[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
    // Assign each card a visual variant for variety
    const cardStyles = [
        'row-span-1',           // normal
        'md:row-span-2',        // tall
        'row-span-1',           // normal
        'row-span-1',           // normal
        'md:row-span-2',        // tall
        'row-span-1',           // normal
        'row-span-1',           // normal
        'row-span-1',           // normal
        'md:col-span-2',        // wide
    ]

    const accentColors = [
        'group-hover:border-primary/40',
        'group-hover:border-secondary/40',
        'group-hover:border-emerald-500/40',
        'group-hover:border-amber-500/40',
        'group-hover:border-violet-500/40',
        'group-hover:border-cyan-500/40',
        'group-hover:border-rose-500/40',
        'group-hover:border-indigo-500/40',
        'group-hover:border-primary/40',
    ]

    const iconBg = [
        'group-hover:bg-primary',
        'group-hover:bg-secondary',
        'group-hover:bg-emerald-500',
        'group-hover:bg-amber-500',
        'group-hover:bg-violet-500',
        'group-hover:bg-cyan-500',
        'group-hover:bg-rose-500',
        'group-hover:bg-indigo-500',
        'group-hover:bg-primary',
    ]

    return (
        <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 80% 20%, rgba(23,92,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(228,53,56,0.06) 0%, transparent 50%)',
                }}
            />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
                        Lab Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        What We{' '}
                        <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                            Build
                        </span>
                    </h2>
                    <p className="text-white/30 max-w-2xl mx-auto text-base sm:text-lg">
                        End-to-end innovation capabilities — from workshops to market-ready products
                    </p>
                </motion.div>

                {/* Masonry-style grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 sm:gap-5">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className={`group ${cardStyles[i] || 'row-span-1'}`}
                        >
                            <div className={`h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 ${accentColors[i]}`}>
                                <div className={`w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 transition-all duration-300 ${iconBg[i]}`}>
                                    <svc.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white/90">{svc.title}</h4>
                                <p className="text-white/30 text-sm leading-relaxed">{svc.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
