'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { CareerPath } from '../_data/clinicalResearchData'

interface CareerPathsSectionProps {
    paths: CareerPath[]
}

export default function CareerPathsSection({ paths }: CareerPathsSectionProps) {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16"
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-5">
                            Salary Guide
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Career{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Paths
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-base md:text-right max-w-md">
                        Explore high-demand roles and salary ranges in clinical research
                    </p>
                </motion.div>

                {/* Table-style career cards */}
                <div className="rounded-2xl border border-gray-200 overflow-hidden">
                    {paths.map((path, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className={`flex items-center justify-between p-5 sm:p-6 group hover:bg-gray-50 transition-colors duration-200 ${
                                i < paths.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-gray-200 w-8">{String(i + 1).padStart(2, '0')}</span>
                                <span className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-primary transition-colors">
                                    {path.role}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg">
                                    {path.salary}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
