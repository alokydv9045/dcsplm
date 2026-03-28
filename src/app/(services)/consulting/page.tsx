'use client'

import { motion } from 'framer-motion'
import { Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const services = [
    { name: 'Drug Discovery & Development', href: '/drug-discovery-development', color: 'primary' },
    { name: 'Clinical Research', href: '/clinical-research-2', color: 'secondary' },
    { name: 'Innovation Lab', href: '/innovation-lab', color: 'emerald' },
    { name: 'Smart Manufacturing', href: '/smart-manufacturing', color: 'amber' },
    { name: 'IOT Services', href: '/iot-services', color: 'violet' },
    { name: 'Data Science', href: '/data-science', color: 'cyan' },
    { name: 'Educational Consulting', href: '/educational-consulting', color: 'primary' },
    { name: 'Strategic Management', href: '/strategic-management', color: 'secondary' },
    { name: 'Stressed Asset Advisory', href: '/stressed-asset-advisory', color: 'emerald' },
]

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
    primary:   { bg: 'bg-primary/10 group-hover:bg-primary', text: 'text-primary group-hover:text-white', hover: 'hover:border-primary/20' },
    secondary: { bg: 'bg-secondary/10 group-hover:bg-secondary', text: 'text-secondary group-hover:text-white', hover: 'hover:border-secondary/20' },
    emerald:   { bg: 'bg-emerald-500/10 group-hover:bg-emerald-500', text: 'text-emerald-500 group-hover:text-white', hover: 'hover:border-emerald-500/20' },
    amber:     { bg: 'bg-amber-500/10 group-hover:bg-amber-500', text: 'text-amber-500 group-hover:text-white', hover: 'hover:border-amber-500/20' },
    violet:    { bg: 'bg-violet-500/10 group-hover:bg-violet-500', text: 'text-violet-500 group-hover:text-white', hover: 'hover:border-violet-500/20' },
    cyan:      { bg: 'bg-cyan-500/10 group-hover:bg-cyan-500', text: 'text-cyan-500 group-hover:text-white', hover: 'hover:border-cyan-500/20' },
}

export default function ConsultingPage() {
    return (
        <>
            <PageHero
                badge="Consulting"
                badgeIcon={Briefcase}
                title="Expert Consulting"
                titleHighlight="Services"
                subtitle="Strategic expertise to solve complex industrial challenges — combining deep domain knowledge with the latest technology trends."
                primaryCta={{ href: '/contact-us', label: 'Start a Project' }}
                secondaryCta={{ href: '#services', label: 'View Services' }}
            />

            <section id="services" className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Our Consulting Areas"
                        badge="Capabilities"
                        subtitle="DCS provides high-end consulting services across multiple domains. Our consultants are industry veterans who bring practical insights and strategic foresight."
                        centered
                    />
                    <div className="space-y-3">
                        {services.map((svc, i) => {
                            const c = colorMap[svc.color]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={svc.href}
                                        className={`group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 ${c.hover} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                                    >
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${c.bg}`}>
                                            <span className={`text-base font-bold transition-colors duration-300 ${c.text}`}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {svc.name}
                                            </h4>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden sm:block" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why DCS */}
            <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl p-8 sm:p-10 border border-primary/20 bg-primary/[0.02] overflow-hidden"
                        >
                            <div className="absolute -top-6 -right-4 text-[120px] font-black leading-none text-primary/[0.04] select-none">★</div>
                            <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
                                Why DCS Consulting
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                We combine domain depth with strategic foresight
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We combine deep domain knowledge with the latest technology trends to provide actionable strategies that drive growth and institutional excellence. Our consultants bring cross-industry experience across pharma, manufacturing, IoT, and digital transformation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
