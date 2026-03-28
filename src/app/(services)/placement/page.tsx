'use client'

import { motion } from 'framer-motion'
import { UserCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const placementLinks = [
    { name: 'DCS Placement Cell', href: '#', desc: 'Dedicated team connecting graduates to opportunity.' },
    { name: 'Placement Avenues', href: '#', desc: 'Diverse career paths across clinical, engineering, and tech.' },
    { name: 'Placement Procedure', href: '#', desc: 'Step-by-step guidance from application to placement.' },
    { name: 'Interview Tips', href: '#', desc: 'Expert coaching for interview success in your domain.' },
    { name: 'Careers at DCS', href: '#', desc: 'Join the DCS team and help shape future professionals.' },
]

const colorCycle = ['primary', 'secondary', 'emerald', 'amber', 'violet']
const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
    primary:   { bg: 'bg-primary/10 group-hover:bg-primary', text: 'text-primary group-hover:text-white', hover: 'hover:border-primary/20' },
    secondary: { bg: 'bg-secondary/10 group-hover:bg-secondary', text: 'text-secondary group-hover:text-white', hover: 'hover:border-secondary/20' },
    emerald:   { bg: 'bg-emerald-500/10 group-hover:bg-emerald-500', text: 'text-emerald-500 group-hover:text-white', hover: 'hover:border-emerald-500/20' },
    amber:     { bg: 'bg-amber-500/10 group-hover:bg-amber-500', text: 'text-amber-500 group-hover:text-white', hover: 'hover:border-amber-500/20' },
    violet:    { bg: 'bg-violet-500/10 group-hover:bg-violet-500', text: 'text-violet-500 group-hover:text-white', hover: 'hover:border-violet-500/20' },
}

export default function PlacementPage() {
    return (
        <>
            <PageHero
                badge="Career Support"
                badgeIcon={UserCheck}
                title="Placement"
                titleHighlight="Cell"
                subtitle="Bridging the gap between talent and opportunity — with 140+ corporate partners and dedicated career support for every graduate."
                primaryCta={{ href: '/contact-us', label: 'Get Career Support' }}
                secondaryCta={{ href: '#placement', label: 'Explore Opportunities' }}
            />

            <section id="placement" className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Career Opportunities"
                        badge="Placement"
                        subtitle="The DCS Placement Cell is dedicated to ensuring our graduates find the right roles in top-tier companies across Clinical, Engineering, and Tech sectors."
                        centered
                    />
                    <div className="space-y-3 mb-16">
                        {placementLinks.map((item, i) => {
                            const c = colorMap[colorCycle[i % colorCycle.length]]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 ${c.hover} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                                    >
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${c.bg}`}>
                                            <span className={`text-base font-bold transition-colors duration-300 ${c.text}`}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden sm:block" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Stat highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl p-8 border border-primary/20 bg-primary/[0.02] overflow-hidden text-center"
                    >
                        <div className="text-[100px] font-black leading-none text-primary/[0.04] absolute -top-6 left-1/2 -translate-x-1/2 select-none">140+</div>
                        <div className="relative z-10">
                            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">140+</div>
                            <p className="text-gray-600 font-medium">Corporate Partners providing placement opportunities</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
