'use client'

import { motion } from 'framer-motion'
import { Users, Shield } from 'lucide-react'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

export default function AdvisoryBoardPage() {
    const advisors = [
        { name: 'Ganesh Parvekar', role: 'Principal Advisor', color: 'primary' },
        { name: 'Dr Dewakar Goel', role: 'Global Advisor', color: 'secondary' },
        { name: 'Yash Dakale', role: 'Technical Advisor — CR & PV Specialist', color: 'emerald' },
        { name: 'Gaurav Sharma', role: 'Senior Advisor — Data Science', color: 'amber' },
    ]

    const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; num: string }> = {
        primary:  { bg: 'bg-primary/10 group-hover:bg-primary', text: 'text-primary group-hover:text-white', border: 'border-primary/20', iconBg: 'bg-primary/[0.04]', num: 'text-primary/[0.04]' },
        secondary:{ bg: 'bg-secondary/10 group-hover:bg-secondary', text: 'text-secondary group-hover:text-white', border: 'border-secondary/20', iconBg: 'bg-secondary/[0.04]', num: 'text-secondary/[0.04]' },
        emerald:  { bg: 'bg-emerald-500/10 group-hover:bg-emerald-500', text: 'text-emerald-600 group-hover:text-white', border: 'border-emerald-500/20', iconBg: 'bg-emerald-500/[0.04]', num: 'text-emerald-500/[0.04]' },
        amber:    { bg: 'bg-amber-500/10 group-hover:bg-amber-500', text: 'text-amber-600 group-hover:text-white', border: 'border-amber-500/20', iconBg: 'bg-amber-500/[0.04]', num: 'text-amber-500/[0.04]' },
    }

    return (
        <>
            <PageHero
                badge="Leadership"
                badgeIcon={Shield}
                title="Advisory"
                titleHighlight="Board"
                subtitle="Our strategic advisors bring decades of global expertise to guide DCS's mission and shape our vision for the future."
                primaryCta={{ href: '/contact-us', label: 'Connect With Us' }}
                backgroundImage="/images/classroom.jpg"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Our Strategic Advisors"
                        badge="Expert Guidance"
                        subtitle="Seasoned professionals who provide strategic direction and domain expertise across our key practice areas."
                        centered
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advisors.map((member, i) => {
                            const c = colorMap[member.color]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative bg-gray-50 rounded-2xl p-7 border ${c.border} hover:bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden text-center`}
                                >
                                    {/* Big number */}
                                    <span className={`absolute -top-4 -right-2 text-[90px] font-black leading-none select-none ${c.num}`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* Icon */}
                                    <div className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 ${c.bg}`}>
                                        <Users className={`w-7 h-7 transition-colors duration-300 ${c.text}`} />
                                    </div>

                                    <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{member.role}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
