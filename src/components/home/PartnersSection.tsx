'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Partner logos - using all 39 available logos from uploads folder
const knowledgePartners = [
    { id: 1, name: 'Partner 1', logo: '/uploads/2025/10/1.png' },
    { id: 2, name: 'Partner 2', logo: '/uploads/2025/10/2.png' },
    { id: 3, name: 'Partner 3', logo: '/uploads/2025/10/3.png' },
    { id: 4, name: 'Partner 4', logo: '/uploads/2025/10/4.png' },
    { id: 5, name: 'Partner 5', logo: '/uploads/2025/10/5.png' },
    { id: 6, name: 'Partner 6', logo: '/uploads/2025/10/6.png' },
    { id: 7, name: 'Partner 7', logo: '/uploads/2025/10/7.png' },
    { id: 8, name: 'Partner 8', logo: '/uploads/2025/10/8.png' },
    { id: 9, name: 'Partner 9', logo: '/uploads/2025/10/9.png' },
    { id: 10, name: 'Partner 10', logo: '/uploads/2025/10/10.png' },
    { id: 11, name: 'Partner 11', logo: '/uploads/2025/10/11.png' },
    { id: 12, name: 'Partner 12', logo: '/uploads/2025/10/12.png' },
    { id: 13, name: 'Partner 13', logo: '/uploads/2025/10/13.png' },
    { id: 14, name: 'Partner 14', logo: '/uploads/2025/10/14.png' },
    { id: 15, name: 'Partner 15', logo: '/uploads/2025/10/15.png' },
    { id: 16, name: 'Partner 16', logo: '/uploads/2025/10/16.png' },
    { id: 17, name: 'Partner 17', logo: '/uploads/2025/10/17.png' },
    { id: 18, name: 'Partner 18', logo: '/uploads/2025/10/18.png' },
    { id: 19, name: 'Partner 19', logo: '/uploads/2025/10/19.png' },
]

const educationPartners = [
    { id: 20, name: 'Education Partner 1', logo: '/uploads/2025/10/20.png' },
    { id: 21, name: 'Education Partner 2', logo: '/uploads/2025/10/21.png' },
    { id: 22, name: 'Education Partner 3', logo: '/uploads/2025/10/22.png' },
    { id: 23, name: 'Education Partner 4', logo: '/uploads/2025/10/23.png' },
    { id: 24, name: 'Education Partner 5', logo: '/uploads/2025/10/24.png' },
    { id: 25, name: 'Education Partner 6', logo: '/uploads/2025/10/25.png' },
    { id: 26, name: 'Education Partner 7', logo: '/uploads/2025/10/26.png' },
    { id: 27, name: 'Education Partner 8', logo: '/uploads/2025/10/27.png' },
    { id: 28, name: 'Education Partner 9', logo: '/uploads/2025/10/28.png' },
    { id: 29, name: 'Education Partner 10', logo: '/uploads/2025/10/29.png' },
    { id: 30, name: 'Education Partner 11', logo: '/uploads/2025/10/30.png' },
    { id: 31, name: 'Education Partner 12', logo: '/uploads/2025/10/31.png' },
    { id: 32, name: 'Education Partner 13', logo: '/uploads/2025/10/32.png' },
    { id: 33, name: 'Education Partner 14', logo: '/uploads/2025/10/33.png' },
    { id: 34, name: 'Education Partner 15', logo: '/uploads/2025/10/34.png' },
    { id: 35, name: 'Education Partner 16', logo: '/uploads/2025/10/35.png' },
    { id: 36, name: 'Education Partner 17', logo: '/uploads/2025/10/36.png' },
    { id: 37, name: 'Education Partner 18', logo: '/uploads/2025/10/37.png' },
    { id: 38, name: 'Education Partner 19', logo: '/uploads/2025/10/38.png' },
    { id: 39, name: 'Education Partner 20', logo: '/uploads/2025/10/39.png' },
]

const PartnersSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <SectionWrapper background="white" padding="large">
            <div ref={ref}>
                <StandardHeading
                    centered
                    badge="Our Partners"
                    title="Delivering innovative PLM and engineering solutions"
                    subtitle="Collaborating with industry leaders to help businesses grow and succeed in the digital era."
                />


                {/* Knowledge & Industry Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="mt-16 sm:mt-20"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-slate-800">
                        Knowledge & Industry Partners
                    </h3>

                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={40}
                            slidesPerView={1}
                            loop={true}
                            speed={5000} // Slow continuous speed
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 50 },
                                768: { slidesPerView: 2, spaceBetween: 60 },
                                1024: { slidesPerView: 3, spaceBetween: 80 },
                                1280: { slidesPerView: 3, spaceBetween: 100 },
                            }}
                            className="partners-swiper linear-scroll py-4"
                        >
                            {knowledgePartners.map((partner) => (
                                <SwiperSlide key={partner.id} className="flex items-center justify-center">
                                    <div className="relative w-64 h-40 transition-transform duration-300 hover:scale-125 z-20">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                            sizes="256px"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>

                {/* Education Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mt-20 sm:mt-24"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-slate-800">
                        Education Partners
                    </h3>

                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={40}
                            slidesPerView={1}
                            loop={true}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: true, // Scroll in opposite direction for variety
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 50 },
                                768: { slidesPerView: 2, spaceBetween: 60 },
                                1024: { slidesPerView: 3, spaceBetween: 80 },
                                1280: { slidesPerView: 3, spaceBetween: 100 },
                            }}
                            className="partners-swiper linear-scroll py-4"
                        >
                            {educationPartners.map((partner) => (
                                <SwiperSlide key={partner.id} className="flex items-center justify-center">
                                    <div className="relative w-64 h-40 transition-transform duration-300 hover:scale-125 z-20">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                            sizes="256px"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </div>
            
            <style jsx global>{`
                .linear-scroll .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </SectionWrapper>
    )
}

export default PartnersSection
