'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronRight } from 'lucide-react'
import type { FaqItem } from '../_data/clinicalResearchData'

interface FaqSectionProps {
    faqs: FaqItem[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Have{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Questions?
                        </span>
                    </h2>
                </motion.div>

                {/* Two-column FAQ grid */}
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                                    isOpen ? 'border-primary/20 bg-primary/[0.02] shadow-sm' : 'border-gray-100 bg-gray-50'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-start gap-3 p-5 text-left"
                                >
                                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                                        isOpen ? 'text-primary' : 'text-gray-300'
                                    }`} />
                                    <span className={`font-semibold text-sm flex-1 transition-colors ${
                                        isOpen ? 'text-primary' : 'text-gray-800'
                                    }`}>
                                        {faq.q}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                                        isOpen ? 'rotate-90 text-primary' : 'text-gray-300'
                                    }`} />
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 ml-8 text-gray-500 text-sm leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
