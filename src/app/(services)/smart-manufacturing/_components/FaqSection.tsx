'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import type { FaqItem } from '../_data/smartManufacturingData'

interface FaqSectionProps {
    faqs: FaqItem[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Left heading — 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-5">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Frequently Asked{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            Common questions about our smart manufacturing solutions and implementation process.
                        </p>
                    </motion.div>

                    {/* Right accordion — 3 cols */}
                    <div className="lg:col-span-3 space-y-3">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                                >
                                    <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4 group-hover:text-primary transition-colors">
                                        {faq.q}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-500 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
