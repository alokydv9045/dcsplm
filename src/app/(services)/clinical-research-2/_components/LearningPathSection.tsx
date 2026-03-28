'use client'

import { motion } from 'framer-motion'
import type { PathStep } from '../_data/clinicalResearchData'

interface LearningPathSectionProps {
    steps: PathStep[]
}

export default function LearningPathSection({ steps }: LearningPathSectionProps) {
    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-5">
                        Your Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Learning{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Roadmap
                        </span>
                    </h2>
                </motion.div>

                {/* Horizontal stepper with dots */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gray-200" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                {/* Dot node */}
                                <div className="relative inline-block mb-6">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest text-gray-300 whitespace-nowrap">
                                        {step.duration}
                                    </span>
                                </div>

                                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                                    {step.stage}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
