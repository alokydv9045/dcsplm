'use client'

import { motion } from 'framer-motion'
import { 
    BookOpen, 
    Microscope, 
    Monitor, 
    Briefcase, 
    Cpu 
} from 'lucide-react'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'
import FeatureCard from '@/components/ui/design-system/FeatureCard'

const services = [
    {
        id: 1,
        title: 'Skill Development',
        description: 'Building a future-ready workforce through specialized training programs that combine hands-on learning and industry-aligned skill development.',
        icon: BookOpen,
        link: '/programs',
        color: 'primary' as const
    },
    {
        id: 2,
        title: 'Clinical Research Services',
        description: 'Comprehensive support across clinical trials, pharmacovigilance, and regulatory affairs, ensuring data integrity and global quality standards.',
        icon: Microscope,
        link: '/pharmacovigilance-excellence',
        color: 'secondary' as const
    },
    {
        id: 3,
        title: 'Healthcare IT Services',
        description: 'Cutting-edge IT solutions including Clinical Data Management, eTMF Systems, CSV, and digital health platforms.',
        icon: Monitor,
        link: '/health-economics-outcomes-research',
        color: 'emerald' as const
    },
    {
        id: 4,
        title: 'Consultancy Services',
        description: 'Strategic, technical, and operational consulting that helps organizations achieve business excellence and sustainable digital transformation.',
        icon: Briefcase,
        link: '/consulting',
        color: 'amber' as const
    },
    {
        id: 5,
        title: 'Industry Digital Services',
        description: 'Next-generation solutions in IoT, digital manufacturing, and data sciences, empowering organizations to enhance efficiency and scalability.',
        icon: Cpu,
        link: '/industry-inside-institute',
        color: 'rose' as const
    },
]

const CoreServices = () => {
    return (
        <SectionWrapper background="gradient-light" padding="large" id="services">
            <StandardHeading 
                centered
                badge="Our Expertise"
                title="Comprehensive Solutions for"
                subtitle="Driving innovation and excellence across industries through our specialized services and domain expertise."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <FeatureCard
                        key={service.id}
                        index={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        href={service.link}
                        colorScheme={service.color}
                        variant="list"
                    />
                ))}
            </div>
        </SectionWrapper>
    )
}

export default CoreServices
