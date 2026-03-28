'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const stories = [
    {
        name: 'Impactful Placements',
        desc: 'Over 59,000 students trained and placed in tier-1 companies across pharma, biotech, and technology sectors.',
        stat: '59K+', label: 'Students Placed', color: 'primary',
    },
    {
        name: 'Industrial Transformation',
        desc: 'Working with 230+ colleges to reshape technical education through the Industry Inside Institute model.',
        stat: '230+', label: 'College Partners', color: 'secondary',
    },
]

export default function SuccessStoriesPage() {
    return (
        <>
            <PageHero
                badge="Impact"
                badgeIcon={Trophy}
                title="Success"
                titleHighlight="Stories"
                subtitle="Celebrating the achievements of our students and partners — real impact, real results, real transformation."
                primaryCta={{ href: '/contact-us', label: 'Start Your Journey' }}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Real Impact, Real Results"
                        badge="Achievements"
                        subtitle="Through our Industry Inside Institute model, we've helped thousands of individuals transition into rewarding careers."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stories.map((story, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`relative rounded-2xl p-7 sm:p-8 border ${i === 0 ? 'border-primary/20 bg-primary/[0.02]' : 'border-secondary/20 bg-secondary/[0.02]'} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                            >
                                <div className={`text-6xl font-black leading-none mb-4 ${i === 0 ? 'text-primary/10' : 'text-secondary/10'}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className={`text-4xl font-bold mb-1 ${i === 0 ? 'text-primary' : 'text-secondary'}`}>
                                    {story.stat}
                                </div>
                                <p className="text-sm text-gray-400 mb-4">{story.label}</p>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{story.name}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{story.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
