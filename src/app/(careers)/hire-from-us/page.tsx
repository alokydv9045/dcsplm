'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, GraduationCap, Award, Target, CheckCircle } from 'lucide-react'

export default function HireFromUsPage() {
    const benefits = [
        { icon: GraduationCap, title: 'Industry-Ready Talent', description: 'Our candidates undergo rigorous training aligned with industry requirements and best practices.' },
        { icon: Award, title: 'Certified Professionals', description: 'All candidates hold industry-recognized certifications in their respective domains.' },
        { icon: Target, title: 'Domain Expertise', description: 'Specialized training in pharma, clinical research, healthcare IT, and life sciences.' },
        { icon: Users, title: 'Diverse Talent Pool', description: 'Access to fresh graduates and experienced professionals across multiple specializations.' },
    ]

    const domains = [
        'Clinical Research Associates',
        'Pharmacovigilance Specialists',
        'Clinical Data Managers',
        'Regulatory Affairs Professionals',
        'Medical Writers',
        'Biostatisticians',
        'Quality Assurance Experts',
        'Healthcare IT Analysts',
        'Medical Coders',
        'Drug Safety Associates',
    ]

    return (
        <>
            {/* Hero */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden pt-20"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
                }}
            >
                {/* Glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(228,53,56,0.12) 0%, rgba(23,92,255,0.08) 40%, transparent 70%)',
                    }}
                />

                <div className="container-custom text-center relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] text-white"
                    >
                        Hire From Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-8"
                    >
                        Access Industry-Ready Talent for Your Life Sciences Team
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.7 }}
                    >
                        <Link href="/contact-us" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                            Partner With Us
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* Benefits */}
            <section className="py-24">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        Why Hire Our Candidates?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 group"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                    <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Domains */}
            <section className="py-24 bg-light">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-8"
                    >
                        Available Talent Pool
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto"
                    >
                        Our trained professionals are available across various life sciences domains
                    </motion.p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {domains.map((domain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm font-medium">{domain}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
                <div className="container-custom text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-6"
                    >
                        Build Your Dream Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Connect with us to discuss your hiring needs and access our talent pool
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="/contact-us" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                            Contact Our Placement Team
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
