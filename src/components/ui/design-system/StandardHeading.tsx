'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StandardHeadingProps {
    title: string
    subtitle?: string
    badge?: string
    centered?: boolean
    className?: string
    light?: boolean
}

export default function StandardHeading({
    title,
    subtitle,
    badge,
    centered = false,
    className,
    light = false
}: StandardHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "mb-12 sm:mb-16",
                centered ? "text-center" : "text-left",
                className
            )}
        >
            {badge && (
                <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                    {badge}
                </span>
            )}
            
            <h2 className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-bold mb-6",
                light ? "text-white" : "text-gray-900"
            )}>
                {title.split(' ').map((word, i, arr) => {
                    // Highlight the last word or two if needed
                    if (i >= arr.length - 2) {
                        return (
                            <span key={i} className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {word}{' '}
                            </span>
                        )
                    }
                    return word + ' '
                })}
            </h2>

            {subtitle && (
                <p className={cn(
                    "text-base sm:text-lg max-w-2xl leading-relaxed",
                    centered ? "mx-auto" : "",
                    light ? "text-white/60" : "text-gray-500"
                )}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}
