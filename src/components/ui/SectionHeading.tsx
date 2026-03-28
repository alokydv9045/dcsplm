'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
    children: React.ReactNode
    className?: string
    gradient?: boolean
    subtitle?: string
    centered?: boolean
}

export function SectionHeading({
    children,
    className,
    gradient = false,
    subtitle,
    centered = false
}: SectionHeadingProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <div ref={ref} className={cn("text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20", className)}>
            <div className="relative inline-block">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10"
                >
                    <span className="relative inline-block pb-1 sm:pb-2">
                        {children}
                        <motion.span
                            initial={{ width: '0%' }}
                            animate={isInView ? { width: '100%' } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                            className="absolute bottom-0 left-0 h-1 sm:h-[5px] bg-primary/20 rounded-full"
                        />
                    </span>
                </motion.h2>
            </div>

            {subtitle && (
                <div className="mt-4 sm:mt-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold"
                    >
                        <span className="text-blue-700 font-bold inline-block relative">
                            <span className="relative inline-block pb-1 sm:pb-2">
                                {subtitle}
                                <motion.span
                                    initial={{ width: '0%' }}
                                    animate={isInView ? { width: '100%' } : {}}
                                    transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 h-1 sm:h-[5px] bg-secondary/20 rounded-full"
                                />
                            </span>
                        </span>
                    </motion.h3>
                </div>
            )}
        </div>
    )
}
