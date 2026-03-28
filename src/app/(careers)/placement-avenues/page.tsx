'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Pill, FlaskConical, HeartPulse, Microscope, Shield, FileText, Database } from 'lucide-react'

export default function PlacementAvenuesPage() {
    const sectors = [
        { icon: Pill, title: 'Pharmaceutical Companies', description: 'Roles in drug development, quality control, regulatory affairs, and manufacturing at leading pharma giants.', companies: ['Sun Pharma', 'Cipla', 'Dr. Reddy\'s', 'Lupin'] },
        { icon: FlaskConical, title: 'Clinical Research Organizations', description: 'Opportunities in clinical trials, data management, pharmacovigilance, and project management.', companies: ['IQVIA', 'Parexel', 'PPD', 'Syneos Health'] },
        { icon: HeartPulse, title: 'Healthcare IT', description: 'Positions in health informatics, EHR systems, healthcare analytics, and digital health solutions.', companies: ['Optum', 'Cognizant', 'Infosys', 'TCS Healthcare'] },
        { icon: Microscope, title: 'Biotech Companies', description: 'Careers in biotechnology research, process development, and biopharmaceutical manufacturing.', companies: ['Biocon', 'Serum Institute', 'Bharat Biotech', 'MedGenome'] },
        { icon: Shield, title: 'Regulatory Agencies', description: 'Roles in drug approval, policy development, and quality assurance at regulatory bodies.', companies: ['CDSCO', 'FDA', 'EMA', 'WHO'] },
        { icon: FileText, title: 'Medical Writing', description: 'Opportunities in scientific publications, regulatory documents, and medical communications.', companies: ['Cactus', 'Freyr', 'Indegene', 'Navitas'] },
        { icon: Database, title: 'Data Science in Healthcare', description: 'Roles in health data analytics, AI in healthcare, and epidemiological research.', companies: ['Mu Sigma', 'Fractal', 'Tiger Analytics', 'HealthCatalyst'] },
        { icon: Building2, title: 'Consulting Firms', description: 'Strategic consulting roles focusing on life sciences and healthcare industries.', companies: ['McKinsey', 'BCG', 'Deloitte', 'KPMG'] },
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
                        Placement Avenues
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Explore Diverse Career Paths in Life Sciences & Healthcare
                    </motion.p>
                </div>
            </motion.section>

            {/* Sectors Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16"
                    >
                        Our trained professionals find opportunities across a wide spectrum of industries. Here are the key sectors where our alumni are making their mark.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-6 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <sector.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{sector.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{sector.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {sector.companies.slice(0, 2).map((company, i) => (
                                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{company}</span>
                                    ))}
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
                        Ready to Explore Your Career Options?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/placement-procedure" className="btn-primary bg-white text-primary hover:bg-gray-100">
                            View Placement Procedure
                        </Link>
                        <Link href="/interview-tips" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary">
                            Interview Tips
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
