'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, CheckCircle, AlertCircle } from 'lucide-react'

export default function InterviewTipsPage() {
    const beforeInterview = [
        'Research the company thoroughly - history, products, culture',
        'Review the job description and match your skills',
        'Prepare STAR method answers for behavioral questions',
        'Practice common industry-specific questions',
        'Prepare 3-5 thoughtful questions for the interviewer',
        'Organize your documents and certificates',
        'Plan your route and arrive 15 minutes early',
        'Get adequate sleep the night before',
    ]

    const duringInterview = [
        'Dress professionally and appropriately',
        'Make eye contact and offer a firm handshake',
        'Listen carefully before answering',
        'Be concise and specific in your responses',
        'Show enthusiasm for the role',
        'Highlight relevant experience and skills',
        'Turn weaknesses into learning opportunities',
        'Ask clarifying questions if needed',
    ]

    const donts = [
        'Don\'t speak negatively about previous employers',
        'Don\'t lie or exaggerate qualifications',
        'Don\'t check your phone during the interview',
        'Don\'t interrupt the interviewer',
        'Don\'t give vague or generic answers',
        'Don\'t forget to follow up after the interview',
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
                        Interview Tips
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Master the Art of Job Interviews
                    </motion.p>
                </div>
            </motion.section>

            {/* Before Interview */}
            <section className="py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                            <Lightbulb className="text-yellow-500" />
                            Before the Interview
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {beforeInterview.map((tip, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-3 p-4 bg-green-50 rounded-lg"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{tip}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                            <CheckCircle className="text-blue-500" />
                            During the Interview
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {duringInterview.map((tip, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                                >
                                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{tip}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                            <AlertCircle className="text-red-500" />
                            Things to Avoid
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {donts.map((tip, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-3 p-4 bg-red-50 rounded-lg"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{tip}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                        Ready to Ace Your Interview?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/dcs-placement-cell" className="btn-primary bg-white text-primary hover:bg-gray-100">
                            Register with Placement Cell
                        </Link>
                        <Link href="/lms-course" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary">
                            Start Training
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
