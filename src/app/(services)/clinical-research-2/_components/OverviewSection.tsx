'use client'

import { motion } from 'framer-motion'

interface OverviewSectionProps {
    paragraphs: string[]
}

export default function OverviewSection({ paragraphs }: OverviewSectionProps) {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                        About the Program
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
                        Why Clinical{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Research?
                        </span>
                    </h2>
                </motion.div>

                {/* Three stacked full-width text blocks with left accent */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {paragraphs.map((para, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex gap-6 items-start p-6 rounded-xl border-l-4 bg-gray-50 ${
                                i === 0 ? 'border-primary' : i === 1 ? 'border-secondary' : 'border-emerald-500'
                            }`}
                        >
                            <span className={`flex-shrink-0 text-4xl font-black leading-none ${
                                i === 0 ? 'text-primary/20' : i === 1 ? 'text-secondary/20' : 'text-emerald-500/20'
                            }`}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
