'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const programs = [
    { name: 'Clinical Research Programs', href: '/clinical-research-education-programs', color: 'primary' },
    { name: 'Pharmacovigilance Excellence', href: '/pharmacovigilance-excellence', color: 'secondary' },
    { name: 'Clinical Data Management', href: '/clinical-data-management', color: 'emerald' },
    { name: 'Regulatory Affairs', href: '/regulatory-affairs-in-pharmaceutical-healthcare-industries', color: 'amber' },
    { name: 'Medical Writing', href: '/dcs-medical-writing-program', color: 'violet' },
    { name: 'Computer System Validation', href: '/computer-system-validation-in-pharmaceutical-manufacturing', color: 'cyan' },
    { name: 'Health Economics & Outcomes Research', href: '/health-economics-outcomes-research', color: 'primary' },
    { name: 'Industry Inside Institute', href: '/industry-inside-institute', color: 'secondary' },
    { name: 'Aerospace Engineering', href: '/aerospace-engineering', color: 'emerald' },
    { name: 'MERN Stack', href: '/mern-stack', color: 'amber' },
]

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
    primary:   { bg: 'bg-primary/10 group-hover:bg-primary', text: 'text-primary group-hover:text-white', hover: 'hover:border-primary/20' },
    secondary: { bg: 'bg-secondary/10 group-hover:bg-secondary', text: 'text-secondary group-hover:text-white', hover: 'hover:border-secondary/20' },
    emerald:   { bg: 'bg-emerald-500/10 group-hover:bg-emerald-500', text: 'text-emerald-500 group-hover:text-white', hover: 'hover:border-emerald-500/20' },
    amber:     { bg: 'bg-amber-500/10 group-hover:bg-amber-500', text: 'text-amber-500 group-hover:text-white', hover: 'hover:border-amber-500/20' },
    violet:    { bg: 'bg-violet-500/10 group-hover:bg-violet-500', text: 'text-violet-500 group-hover:text-white', hover: 'hover:border-violet-500/20' },
    cyan:      { bg: 'bg-cyan-500/10 group-hover:bg-cyan-500', text: 'text-cyan-500 group-hover:text-white', hover: 'hover:border-cyan-500/20' },
}

export default function ProgramsPage() {
    return (
        <>
            <PageHero
                badge="Education"
                badgeIcon={GraduationCap}
                title="Our"
                titleHighlight="Programs"
                subtitle="Industry-ready education for tomorrow's professionals — built on the 'Industry Inside Institute' philosophy."
                primaryCta={{ href: '/contact-us', label: 'Enroll Now' }}
                secondaryCta={{ href: '#programs', label: 'Browse Programs' }}
            />

            <section id="programs" className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Empowering Through Knowledge"
                        badge="Certifications"
                        subtitle="We offer specialized certifications designed with direct industry involvement. Each program prepares you for real-world roles from day one."
                        centered
                    />
                    <div className="space-y-3">
                        {programs.map((prog, i) => {
                            const c = colorMap[prog.color]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <Link
                                        href={prog.href}
                                        className={`group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 ${c.hover} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                                    >
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${c.bg}`}>
                                            <span className={`text-base font-bold transition-colors duration-300 ${c.text}`}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {prog.name}
                                            </h4>
                                            <p className="text-gray-400 text-sm mt-0.5">
                                                Professional certification program
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden sm:block" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
