'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const WhatWeDo = () => {
    return (
        <SectionWrapper padding="large">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <StandardHeading 
                        badge="About DCS"
                        title="Empowering Innovation, Transforming"
                        subtitle="At DCS, we offer end-to-end consulting and technology solutions that drive growth, efficiency, and transformation. Built on four strategic pillars, our expertise spans several sectors—and enables companies to work smarter, faster, and achieve measurable results."
                        className="mb-8"
                    />
                    
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                        <p>
                            With a strong national/international presence and proven track record, DCS is trusted by organizations across India to transform vision into performance and strategy into success.
                        </p>
                        <p>
                            By merging academic foundations with advanced industrial experience, DCS is shaping future-ready talent and enabling a powerful synergy between education and enterprise.
                        </p>
                    </div>

                    <a href="/about-dcs" className="btn-primary">
                        Learn More About Us
                    </a>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                            src="/images/classroom.jpg"
                            alt="DCS Training Excellence"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    {/* Decorative background element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/5 rounded-full blur-2xl -z-10" />
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default WhatWeDo
