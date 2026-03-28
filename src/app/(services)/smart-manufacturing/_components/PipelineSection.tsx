'use client'

import { motion } from 'framer-motion'
import type { PipelineStep } from '../_data/smartManufacturingData'

interface PipelineSectionProps {
    title: string
    highlight: string
    subtitle: string
    steps: PipelineStep[]
}

export default function PipelineSection({ title, highlight, subtitle, steps }: PipelineSectionProps) {
    return (
        <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
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
                        Implementation Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {title}{' '}
                        <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                            {highlight}
                        </span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Horizontal timeline */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="text-center group"
                            >
                                {/* Node dot */}
                                <div className="relative inline-flex items-center justify-center mb-6">
                                    <div className={`w-[104px] h-[104px] rounded-full bg-gradient-to-br ${step.color} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="w-full h-full rounded-full bg-[#0c0c1d] flex items-center justify-center">
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    {/* Phase label */}
                                    <span className="absolute -top-8 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                                        {step.phase}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold mb-2">{step.stage}</h4>
                                <p className="text-white/35 text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
