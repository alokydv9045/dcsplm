'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
    children: React.ReactNode
    className?: string
    delay?: number
    borderColor?: 'primary' | 'secondary' | 'accent'
    borderPosition?: 'top' | 'bottom' | 'left' | 'right'
}

export function AnimatedCard({
    children,
    className,
    delay = 0,
    borderColor = 'primary',
    borderPosition = 'top'
}: AnimatedCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const borderClasses = {
        top: `border-t-4 border-${borderColor}`,
        bottom: `border-b-4 border-${borderColor}`,
        left: `border-l-4 border-${borderColor}`,
        right: `border-r-4 border-${borderColor}`,
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",
                borderClasses[borderPosition],
                className
            )}
        >
            {children}
        </motion.div>
    )
}

interface CardIconProps {
    icon: React.ReactNode
    bgColor?: string
}

export function CardIcon({ icon, bgColor = 'primary' }: CardIconProps) {
    return (
        <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300",
            `bg-${bgColor}/10 group-hover:bg-${bgColor} group-hover:scale-110`
        )}>
            {icon}
        </div>
    )
}
