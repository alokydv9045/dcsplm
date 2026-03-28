'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TextGenerateEffectProps {
    words: string
    className?: string
    duration?: number
}

export function TextGenerateEffect({ words, className, duration = 0.5 }: TextGenerateEffectProps) {
    const [displayedWords, setDisplayedWords] = useState<string[]>([])
    const wordsArray = words.split(' ')

    useEffect(() => {
        wordsArray.forEach((word, index) => {
            setTimeout(() => {
                setDisplayedWords((prev) => [...prev, word])
            }, index * (duration * 1000))
        })
    }, [words, duration, wordsArray])

    return (
        <div className={cn("", className)}>
            {displayedWords.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: duration }}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    )
}
