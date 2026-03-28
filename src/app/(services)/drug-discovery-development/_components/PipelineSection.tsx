'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { PipelineStep } from '../_data/drugDiscoveryData'

interface PipelineSectionProps {
    steps: PipelineStep[]
}

export default function PipelineSection({ steps }: PipelineSectionProps) {
    return (
        <section id="pipeline" className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-5">
                        Development Pipeline
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Discovery to{' '}
                        <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                            Clinic
                        </span>
                    </h2>
                    <p className="text-white/30 max-w-2xl mx-auto text-base sm:text-lg">
                        Our structured approach from target discovery to IND submission
                    </p>
                </motion.div>

                {/* Horizontal scrollable pipeline strip */}
                <div className="relative">
                    {/* Top connecting bar */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                {/* Top node */}
                                <div className="flex justify-center mb-6">
                                    <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                                        <step.icon className="w-10 h-10 text-white" />
                                        <span className="absolute -top-3 -right-3 w-7 h-7 rounded-lg bg-[#0c0c1d] border border-white/10 flex items-center justify-center text-xs font-bold text-white/50">
                                            {i + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center px-2">
                                    <h4 className="text-lg font-bold mb-2">{step.stage}</h4>
                                    <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                                </div>

                                {/* Arrow connector */}
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute -right-3 top-12 z-10 text-white/20">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
