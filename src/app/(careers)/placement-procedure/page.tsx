'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function PlacementProcedurePage() {
    const steps = [
        { step: 1, title: 'Registration', description: 'Complete your course with DCS and register with the Placement Cell. Update your profile with academic details, projects, and career preferences.' },
        { step: 2, title: 'Profile Building', description: 'Our career experts help you craft a compelling resume and LinkedIn profile that highlights your skills and training.' },
        { step: 3, title: 'Skill Assessment', description: 'Take our comprehensive skill assessment to identify your strengths and areas for improvement before interviews.' },
        { step: 4, title: 'Training & Workshops', description: 'Attend specialized workshops on interview skills, group discussions, and industry-specific preparation.' },
        { step: 5, title: 'Company Matching', description: 'Based on your profile and preferences, we match you with suitable job openings from our partner companies.' },
        { step: 6, title: 'Interview Scheduling', description: 'Interviews are scheduled with shortlisted candidates. We provide pre-interview briefings and company information.' },
        { step: 7, title: 'Interview Process', description: 'Attend interviews with confidence. Our support team is available for any queries during the process.' },
        { step: 8, title: 'Offer & Onboarding', description: 'Receive offer letters and get our guidance on salary negotiation and smooth onboarding with your new employer.' },
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
                        Placement Procedure
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Your Step-by-Step Journey to Career Success
                    </motion.p>
                </div>
            </motion.section>

            {/* Steps Timeline */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 mb-8"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="w-0.5 h-full bg-primary/20 mt-2" />
                                    )}
                                </div>
                                <div className="card p-6 flex-1 hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
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
                        Start Your Placement Journey Today
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/lms-course" className="btn-primary bg-white text-primary hover:bg-gray-100">
                            Enroll in a Course
                        </Link>
                        <Link href="/contact-us" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary">
                            Contact Placement Cell
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
