'use client'

import { 
    Briefcase, 
    GraduationCap, 
    Award, 
    Users, 
    Factory 
} from 'lucide-react'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'
import FeatureCard from '@/components/ui/design-system/FeatureCard'

const features = [
    {
        id: 1,
        icon: Factory,
        title: 'Industry-Driven Programs',
        description: 'Built around real market needs to make you job-ready from day one with practical skills.',
        color: 'primary' as const,
    },
    {
        id: 2,
        icon: Briefcase,
        title: 'Consultancy Exposure',
        description: 'Work on live projects and real challenges alongside seasoned industry experts.',
        color: 'secondary' as const,
    },
    {
        id: 3,
        icon: GraduationCap,
        title: 'Technical Education',
        description: 'Courses designed for emerging tech trends—AI, IoT, and Smart Manufacturing.',
        color: 'emerald' as const,
    },
    {
        id: 4,
        icon: Award,
        title: 'Recognized Certification',
        description: 'Gain credentials that matter—backed by verifiable hands-on industry experience.',
        color: 'amber' as const,
    },
    {
        id: 5,
        icon: Users,
        title: 'Expert Mentorship',
        description: 'Get personalized guidance from faculty with international industrial backgrounds.',
        color: 'rose' as const,
    },
]

const FeaturesSection = () => {
    return (
        <SectionWrapper background="gradient-light" padding="large">
            <StandardHeading
                centered
                badge="Why Choose DCS"
                title="Features That Make Us"
                subtitle="We combine academic excellence with practical industry application to shape the leaders of tomorrow."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={feature.id}
                        index={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        colorScheme={feature.color}
                    />
                ))}
            </div>
        </SectionWrapper>
    )
}

export default FeaturesSection
