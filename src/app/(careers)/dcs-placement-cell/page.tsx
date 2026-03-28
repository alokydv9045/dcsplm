'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Award, Building, TrendingUp, CheckCircle } from 'lucide-react'

export default function DCSPlacementCellPage() {
    const stats = [
        { icon: Users, value: '5000+', label: 'Students Placed' },
        { icon: Building, value: '200+', label: 'Partner Companies' },
        { icon: Award, value: '95%', label: 'Placement Rate' },
        { icon: TrendingUp, value: '₹8 LPA', label: 'Average Package' },
    ]

    const services = [
        'Resume Building & Review',
        'Interview Preparation Sessions',
        'Industry Connect Programs',
        'Mock Interview Practice',
        'Soft Skills Training',
        'Career Counseling',
        'Aptitude Test Preparation',
        'Group Discussion Training',
    ]

    return (
        <>
            {/* Hero Section */}
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
                        DCS Placement Cell
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Your Gateway to a Successful Career in Life Sciences
                    </motion.p>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                                <p className="text-gray-700">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Dedicated to Your Success
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                The DCS Placement Cell is committed to bridging the gap between academia and industry. We work tirelessly to connect our trained professionals with leading pharmaceutical, biotech, and healthcare organizations.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                With over 200+ corporate partners and a track record of 5000+ successful placements, we provide comprehensive support from resume building to interview preparation, ensuring every candidate is job-ready.
                            </p>
                            <Link href="/placement-avenues" className="btn-primary inline-flex">
                                Explore Placement Avenues
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/uploads/2025/10/Skill-Development.webp"
                                alt="DCS Placement Cell"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-gradient-to-br from-light to-gray-50">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        Our Placement Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="card p-6 flex items-center space-x-4 hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <span className="font-medium">{service}</span>
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
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Ready to Launch Your Career?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Enroll in our programs and get access to exclusive placement opportunities
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/lms-course" className="btn-primary bg-white text-primary hover:bg-gray-100">
                            Browse Courses
                        </Link>
                        <Link href="/contact-us" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary">
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
