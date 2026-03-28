'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Star } from 'lucide-react'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function OurLeadersPage() {
    const leaders = [
        { name: 'Dr. Dewakar Goel', role: 'Leadership Team', image: '/images/Dr-Dewakar-Goel.png' },
        { name: 'Neha Sharma', role: 'Director — Clinical Services', image: '/images/Neha-Sharma.png' },
        { name: 'Yash', role: 'Leadership Team', image: '/images/yash.jpeg' },
        { name: 'Gaurav Sharma', role: 'Leadership Team', image: '/images/Gaurav-Sharma.png' },
        { name: 'Ganesh', role: 'Leadership Team', image: '/images/ganesh.jpeg' },
        { name: 'Anuj Sharma', role: 'Director — Engineering Services', image: '/images/Anuj-Sharma.png' },
    ]

    return (
        <>
            <PageHero
                badge="Leadership"
                badgeIcon={Star}
                title="Our"
                titleHighlight="Leaders"
                subtitle="Guided by visionary leadership to deliver excellence across industries — shaping the future of education and innovation."
                primaryCta={{ href: '/contact-us', label: 'Connect With Us' }}
                secondaryCta={{ href: '/advisory-board', label: 'Advisory Board' }}
                backgroundImage="/images/classroom.jpg"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Visionary Leadership"
                        badge="Our Team"
                        subtitle="Meet the directors who drive DCS's mission of bridging industry and education."
                        centered
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto"
                    >
                        <Swiper
                            modules={[Autoplay, Pagination, Mousewheel]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            mousewheel={{ forceToAxis: true }}
                            className="pb-14"
                        >
                            {leaders.map((leader, i) => (
                                <SwiperSlide key={i} className="h-auto">
                                    <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                                        <div className="aspect-[4/5] relative w-full overflow-hidden bg-gray-100">
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d]/90 via-[#0c0c1d]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-1">{leader.name}</h3>
                                            <p className="text-white/80 text-sm font-medium">{leader.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
