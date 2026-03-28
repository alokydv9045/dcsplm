'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircleQuestion } from 'lucide-react'
import type { FaqItem } from '../_data/innovationLabData'

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
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-5">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Common{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </div>

                    {/* Card-style FAQ — each is a separate card */}
                    <div className="space-y-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                                        isOpen ? 'border-primary/20 shadow-lg shadow-primary/5' : 'border-gray-100 shadow-sm'
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left bg-white"
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                            isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                                        }`}>
                                            <MessageCircleQuestion className="w-5 h-5" />
                                        </div>
                                        <span className={`font-semibold text-sm sm:text-base flex-1 transition-colors ${
                                            isOpen ? 'text-primary' : 'text-gray-900'
                                        }`}>
                                            {faq.q}
                                        </span>
                                        <span className={`text-2xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-gray-300'}`}>
                                            +
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 ml-14 text-gray-500 text-sm sm:text-base leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
