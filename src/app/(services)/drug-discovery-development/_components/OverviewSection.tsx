'use client'

import { motion } from 'framer-motion'

interface OverviewSectionProps {
    paragraphs: string[]
}

export default function OverviewSection({ paragraphs }: OverviewSectionProps) {
    return (
        <section className="section-padding bg-white relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Accelerating{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Drug Development
                        </span>
                    </h2>
                </motion.div>

                {/* Horizontal cards row — each card is a pillar */}
                <div className="grid md:grid-cols-3 gap-6">
                    {paragraphs.map((para, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-7 sm:p-8 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                                i === 0 ? 'border-primary/20 bg-primary/[0.02]' :
                                i === 1 ? 'border-secondary/20 bg-secondary/[0.02]' :
                                'border-emerald-500/20 bg-emerald-500/[0.02]'
                            }`}
                        >
                            {/* Large step number */}
                            <div className={`text-6xl font-black leading-none mb-4 ${
                                i === 0 ? 'text-primary/10' : i === 1 ? 'text-secondary/10' : 'text-emerald-500/10'
                            }`}>
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
