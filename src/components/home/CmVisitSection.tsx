'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const visitImages = [
    { src: '/images/cm.jpeg', alt: 'Hon\'ble Chief Minister Visit 1' },
    { src: '/images/cm2.jpeg', alt: 'Hon\'ble Chief Minister Visit 2' },
    { src: '/images/cm3.jpeg', alt: 'Hon\'ble Chief Minister Visit 3' },
    { src: '/images/cm4.jpeg', alt: 'Hon\'ble Chief Minister Visit 4' },
]

export default function CmVisitSection() {
    return (
        <SectionWrapper padding="large" className="bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
            <StandardHeading 
                badge="Special Visit"
                title="Hon'ble Chief Minister Visits CSED Labs"
                subtitle="A proud milestone for our institution—our state-of-the-art CSED laboratories were graced by the presence of the Hon'ble Chief Minister, encouraging technological advancement and academic excellence."
                centered={true}
                className="mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 z-10 relative">
                {visitImages.map((image, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl group border border-gray-100 bg-white">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                            {/* Overlay gradient for premium feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2" />
        </SectionWrapper>
    )
}
