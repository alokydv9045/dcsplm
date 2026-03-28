'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '../_data/drugDiscoveryData'

interface FaqSectionProps {
    faqs: FaqItem[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="section-padding bg-white">
            <div className="container-custom max-w-3xl">
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
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                </motion.div>

                {/* Dotted-border single-column accordion */}
                <div className="space-y-0">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`border-b border-dashed ${i === 0 ? 'border-t' : ''} border-gray-200`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-gray-200 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                        <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                                            {faq.q}
                                        </span>
                                    </span>
                                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-300'}`} />
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
                                            <div className="pb-5 sm:pb-6 pl-10 text-gray-500 text-sm sm:text-base leading-relaxed">
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
