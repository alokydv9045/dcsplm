'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Gauge } from 'lucide-react'

interface OverviewSectionProps {
    paragraphs: string[]
    imageSrc: string
    imageAlt: string
    accentStat: { value: string; label: string }
}

export default function OverviewSection({ paragraphs, imageSrc, imageAlt, accentStat }: OverviewSectionProps) {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Subtle diagonal accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                    {/* Image — takes 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[3/4]">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] via-transparent to-transparent" />

                            {/* Overlaid stat */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                                            <Gauge className="w-7 h-7 text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">{accentStat.value}</div>
                                            <div className="text-sm text-white/60">{accentStat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content — takes 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-3"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-5">
                            About Smart Manufacturing
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Building the{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Factory of Tomorrow
                            </span>
                        </h2>

                        <div className="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
                            {paragraphs.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    dangerouslySetInnerHTML={{ __html: para }}
                                />
                            ))}
                        </div>

                        {/* Mini stats row */}
                        <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-gray-100">
                            {[
                                { val: '50+', desc: 'Factories' },
                                { val: '99.5%', desc: 'Uptime' },
                                { val: '10M+', desc: 'Data Points/Day' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{s.val}</div>
                                    <div className="text-sm text-gray-400 mt-1">{s.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
