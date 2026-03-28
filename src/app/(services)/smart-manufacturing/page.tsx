'use client'

import HeroSection from './_components/HeroSection'
import OverviewSection from './_components/OverviewSection'
import PipelineSection from './_components/PipelineSection'
import ServicesGrid from './_components/ServicesGrid'
import TechHighlights from './_components/TechHighlights'
import BenefitsSection from './_components/BenefitsSection'
import FaqSection from './_components/FaqSection'
import CtaSection from './_components/CtaSection'

import {
    stats,
    overviewParagraphs,
    overviewImage,
    overviewAccentStat,
    pipeline,
    services,
    techAreas,
    benefits,
    faqs,
} from './_data/smartManufacturingData'

export default function SmartManufacturingPage() {
    return (
        <>
            <HeroSection
                title="Smart"
                highlight="Manufacturing"
                subtitle="Industry 4.0 solutions for the factory of the future — powered by IoT, AI, digital twins, and real-time analytics to transform your manufacturing operations."
                badge="Industry 4.0 Solutions for the Factory of the Future"
                stats={stats}
            />

            <OverviewSection
                paragraphs={overviewParagraphs}
                imageSrc={overviewImage}
                imageAlt="Smart Manufacturing & Industry 4.0"
                accentStat={overviewAccentStat}
            />

            <PipelineSection
                title="Implementation"
                highlight="Roadmap"
                subtitle="A phased approach from assessment to continuous optimization"
                steps={pipeline}
            />

            <ServicesGrid
                title="Our"
                highlight="Services"
                subtitle="End-to-end smart manufacturing capabilities from sensor to boardroom"
                services={services}
            />

            <TechHighlights
                title="Technology"
                highlight="Stack"
                subtitle="The core technologies powering the smart factory revolution"
                areas={techAreas}
            />

            <BenefitsSection benefits={benefits} />

            <FaqSection faqs={faqs} />

            <CtaSection
                title="Ready to Modernize Your Factory?"
                description="Transform your manufacturing operations with intelligent Industry 4.0 solutions. Start with a free assessment of your digitization readiness."
                primaryLink={{ href: '/contact-us', label: 'Contact Us Today' }}
            />
        </>
    )
}
