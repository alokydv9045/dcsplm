'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface OverviewSectionProps {
    paragraphs: string[]
    imageSrc: string
    imageAlt: string
}

export default function OverviewSection({ paragraphs, imageSrc, imageAlt }: OverviewSectionProps) {
    return (
        <section className="section-padding bg-white relative">
            <div className="container-custom">
                {/* Full-width image banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden mb-14 sm:mb-20 shadow-2xl"
                >
                    <div className="aspect-[21/9]">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c1d]/80 via-[#0c0c1d]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium border border-white/10 mb-4">
                            About the Lab
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-lg">
                            Where Bold Ideas Become{' '}
                            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
                                Reality
                            </span>
                        </h2>
                    </div>
                </motion.div>

                {/* Three column content cards */}
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {paragraphs.map((para, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            {/* Large number */}
                            <span className="text-[80px] font-black leading-none text-gray-100 absolute -top-6 -left-2 select-none">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="relative pt-12 text-base sm:text-lg text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
