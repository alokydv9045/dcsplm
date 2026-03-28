'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

export default function PhotosPage() {
    const cmImages = [
        '/images/cm.jpeg',
        '/images/cm2.jpeg',
        '/images/cm3.jpeg',
        '/images/cm4.jpeg',
        ...Array.from({ length: 33 }, (_, i) => `/images/img${i + 1}.jpeg`)
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <PageHero
                badge="Gallery"
                badgeIcon={ImageIcon}
                title="Event"
                titleHighlight="Photos"
                subtitle="Capturing moments of innovation, collaboration, and excellence — from our labs, campus visits, to industry events."
                backgroundImage="/images/classroom.jpg"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Photo Gallery"
                        badge="Moments"
                        subtitle="A visual journey through our programs, events, and partnerships."
                        centered
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cmImages.map((src, i) => (
                            <motion.div
                                key={i}
                                onClick={() => setSelectedImage(src)}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="aspect-square rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group relative cursor-pointer"
                            >
                                <Image
                                    src={src}
                                    alt={`Chief Minister Visit Image ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-[110]"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Full screen event photo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
