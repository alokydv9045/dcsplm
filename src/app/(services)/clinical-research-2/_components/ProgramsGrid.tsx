'use client'

import { motion } from 'framer-motion'
import type { ProgramItem } from '../_data/clinicalResearchData'

interface ProgramsGridProps {
    programs: ProgramItem[]
}

export default function ProgramsGrid({ programs }: ProgramsGridProps) {
    return (
        <section id="programs" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
                        Programs & Courses
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Our{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Programs
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                        Comprehensive clinical research education from foundation to job placement
                    </p>
                </motion.div>

                {/* Featured program (highlight) */}
                {programs.filter(p => p.highlight).map((prog, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="relative rounded-2xl bg-gradient-to-r from-primary to-secondary p-[1px] overflow-hidden">
                            <div className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                                    <prog.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{prog.title}</h3>
                                        <span className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                                            Flagship
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-base leading-relaxed mb-3">{prog.desc}</p>
                                    <span className="text-sm font-semibold text-secondary">Duration: {prog.duration}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Other programs in list format */}
                <div className="space-y-3">
                    {programs.filter(p => !p.highlight).map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="group flex items-center gap-5 p-5 sm:p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-secondary/10 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300">
                                <prog.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors truncate">
                                    {prog.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mt-1">{prog.desc}</p>
                            </div>
                            <span className="hidden sm:block flex-shrink-0 text-xs font-semibold text-gray-300 bg-gray-100 px-3 py-1.5 rounded-lg group-hover:bg-secondary/10 group-hover:text-secondary transition-all duration-300">
                                {prog.duration}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
