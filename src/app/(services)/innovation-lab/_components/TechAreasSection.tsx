'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TechArea } from '../_data/innovationLabData'

interface TechAreasSectionProps {
    areas: TechArea[]
}

export default function TechAreasSection({ areas }: TechAreasSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 text-secondary text-sm font-semibold mb-5">
                        Focus Areas
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Technology{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Domains
                        </span>
                    </h2>
                </motion.div>

                {/* Tab-based interactive layout */}
                <div className="max-w-5xl mx-auto">
                    {/* Tab buttons */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
                        {areas.map((area, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                                    activeIndex === i
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                            >
                                <area.icon className="w-5 h-5" />
                                <span className="hidden sm:inline">{area.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className={`rounded-3xl bg-gradient-to-br ${areas[activeIndex].gradient} p-[1px]`}>
                                <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16">
                                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                        <div className={`flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br ${areas[activeIndex].gradient} flex items-center justify-center shadow-2xl`}>
                                            {(() => {
                                                const Icon = areas[activeIndex].icon
                                                return <Icon className="w-14 h-14 sm:w-18 sm:h-18 text-white" />
                                            })()}
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                                {areas[activeIndex].title}
                                            </h3>
                                            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
                                                {areas[activeIndex].desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
