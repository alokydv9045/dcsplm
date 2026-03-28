'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const counters = [
    { id: 1, end: 25, suffix: '+', label: 'Years of Excellence', color: 'text-primary' },
    { id: 2, end: 250, suffix: '+', label: 'Clients Served', color: 'text-secondary' },
    { id: 3, end: 10000, suffix: '+', label: 'Students Trained', color: 'text-emerald-500' },
    { id: 4, end: 1000, suffix: '+', label: 'Projects Completed', color: 'text-amber-500' },
]

const AchievementsCounter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [counts, setCounts] = useState(counters.map(() => 0))

    useEffect(() => {
        if (!isInView) return

        const duration = 2000
        const frameRate = 1000 / 60
        const totalFrames = Math.round(duration / frameRate)

        const intervals = counters.map((counter, index) => {
            let frame = 0
            return setInterval(() => {
                frame++
                const progress = frame / totalFrames
                const currentCount = Math.round(counter.end * progress)

                if (frame >= totalFrames) {
                    setCounts(prev => {
                        const next = [...prev]
                        next[index] = counter.end
                        return next
                    })
                    clearInterval(intervals[index])
                } else {
                    setCounts(prev => {
                        const next = [...prev]
                        next[index] = currentCount
                        return next
                    })
                }
            }, frameRate)
        })

        return () => intervals.forEach(clearInterval)
    }, [isInView])

    return (
        <SectionWrapper background="white" padding="large">
            <StandardHeading 
                centered
                badge="Our Impact"
                title="Milestones of"
                subtitle="A legacy of excellence built over decades of commitment to industry transformation and talent development."
            />

            <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {counters.map((counter, index) => (
                    <motion.div
                        key={counter.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-primary/20 hover:shadow-xl transition-all duration-500 group"
                    >
                        <div className={`text-4xl lg:text-5xl font-bold mb-3 ${counter.color} group-hover:scale-105 transition-transform duration-500`}>
                            {counts[index].toLocaleString()}{counter.suffix}
                        </div>
                        <div className="text-gray-600 font-medium text-lg italic">
                            {counter.label}
                        </div>
                        <div className="mt-4 w-12 h-1 bg-gray-200 mx-auto rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className={`h-full ${counter.color.replace('text-', 'bg-')}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}

export default AchievementsCounter
