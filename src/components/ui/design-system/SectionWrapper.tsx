'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
    id?: string
    background?: 'white' | 'gray' | 'dark' | 'gradient-light' | 'gradient-dark'
    padding?: 'none' | 'small' | 'medium' | 'large'
    containerSize?: 'default' | 'fluid' | 'narrow'
}

export default function SectionWrapper({
    children,
    className,
    id,
    background = 'white',
    padding = 'medium',
    containerSize = 'default'
}: SectionWrapperProps) {
    const bgStyles = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        dark: 'bg-[#0c0c1d] text-white',
        'gradient-light': 'bg-gradient-to-b from-gray-50 to-white',
        'gradient-dark': 'bg-gradient-to-b from-[#0c0c1d] to-[#1a1a2e] text-white'
    }

    const paddingStyles = {
        none: 'py-0',
        small: 'section-padding-compact',
        medium: 'section-padding',
        large: 'section-padding-large'
    }

    const containerStyles = {
        default: 'container-custom',
        fluid: 'container-fluid',
        narrow: 'max-w-4xl mx-auto px-4 sm:px-6'
    }

    return (
        <section 
            id={id} 
            className={cn(bgStyles[background], paddingStyles[padding], className)}
        >
            <div className={containerStyles[containerSize]}>
                {children}
            </div>
        </section>
    )
}
