
'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const stats = [
    { label: 'Students', value: 5000, suffix: '+' },
    { label: 'Colleges/Universities', value: 50, suffix: '+' },
    { label: 'Companies', value: 200, suffix: '+' },
    { label: 'Business Year', value: 10, suffix: '+' },
]

const ClientsServedStats = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [counts, setCounts] = useState(stats.map(() => 0))

    useEffect(() => {
        if (!isInView) return

        const duration = 2000
        const steps = 60
        const stepTime = duration / steps

        const intervals: NodeJS.Timeout[] = []

        stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / steps

            const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                    setCounts((prev) => {
                        const newCounts = [...prev]
                        newCounts[index] = stat.value
                        return newCounts
                    })
                    clearInterval(timer)
                } else {
                    setCounts((prev) => {
                        const newCounts = [...prev]
                        newCounts[index] = Math.floor(current)
                        return newCounts
                    })
                }
            }, stepTime)
            intervals.push(timer)
        })

        return () => intervals.forEach(clearInterval)
    }, [isInView])

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeading centered>
                    Clients Served via Skill Development
                </SectionHeading>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center relative overflow-hidden group hover:-translate-y-1 duration-300">
                            <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-blue-50 to-blue-100' :
                                index === 1 ? 'from-blue-100 to-sky-50' :
                                    index === 2 ? 'from-sky-50 to-blue-50' :
                                        'from-blue-50 to-indigo-50'
                                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative z-10">
                                <div className="text-4xl font-bold mb-2">
                                    <span className="text-blue-700">
                                        <span>{counts[index]}</span>
                                        {stat.suffix}
                                    </span>
                                </div>
                                <div className="text-base font-semibold text-gray-900">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientsServedStats
