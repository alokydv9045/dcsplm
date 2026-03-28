'use client'

import { motion } from 'framer-motion'
import type { ProcessStep } from '../_data/innovationLabData'

interface ProcessSectionProps {
    steps: ProcessStep[]
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
    return (
        <section id="process" className="section-padding bg-gray-50 relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 text-secondary text-sm font-semibold mb-5">
                        Our Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        From Idea to{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Impact
                        </span>
                    </h2>
                </motion.div>

                {/* Vertical timeline — alternating left/right */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Center line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30 hidden md:block" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className={`relative flex items-center gap-6 mb-12 last:mb-0 ${
                                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* Content card */}
                            <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className={`inline-block bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 ${
                                    i % 2 === 0 ? 'md:ml-auto' : ''
                                }`}>
                                    <span className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-2 block">
                                        Phase {i + 1}
                                    </span>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.stage}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                                </div>
                            </div>

                            {/* Center node */}
                            <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                    <step.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>

                            {/* Mobile icon */}
                            <div className={`md:hidden flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                <step.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Spacer for the other side */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
