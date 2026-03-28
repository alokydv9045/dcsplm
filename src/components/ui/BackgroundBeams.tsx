'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function BackgroundBeams({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M0 50 Q 250 0, 500 50 T 1000 50"
                    stroke="url(#beam-gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.path
                    d="M0 150 Q 250 100, 500 150 T 1000 150"
                    stroke="url(#beam-gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
                />
                <motion.path
                    d="M0 250 Q 250 200, 500 250 T 1000 250"
                    stroke="url(#beam-gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
                />
            </svg>
        </div>
    )
}
