'use client'

import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import CommonHero from '@/components/ui/design-system/CommonHero'

const HomeHero = () => {
    const stats = [
        { icon: Zap, value: '8+', label: 'Institutions' },
        { icon: Users, value: '10K+', label: 'Students Trained' },
        { icon: TrendingUp, value: '95%', label: 'Placement Rate' },
        { icon: Sparkles, value: '50+', label: 'Industry Partners' },
    ]

    return (
        <CommonHero
            title="Upskill Today for a"
            subtitle="Smarter Tomorrow"
            description="Join our industry-focused training programs designed to bridge the gap between classroom learning and real-world expertise. Get trained by industry experts and launch your career."
            stats={stats}
            primaryBtn={{ label: 'Explore Programs', href: '/programs' }}
            secondaryBtn={{ label: 'Contact Us', href: '/contact-us' }}
            badge={{ label: 'Transform Your Career Today', icon: Zap }}
            backgroundVideo="/hero-video.mp4"
        />
    )
}

export default HomeHero
