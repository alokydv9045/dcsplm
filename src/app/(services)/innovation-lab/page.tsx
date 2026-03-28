'use client'

import HeroSection from './_components/HeroSection'
import OverviewSection from './_components/OverviewSection'
import ProcessSection from './_components/ProcessSection'
import ServicesGrid from './_components/ServicesGrid'
import TechAreasSection from './_components/TechAreasSection'
import BenefitsSection from './_components/BenefitsSection'
import FaqSection from './_components/FaqSection'
import CtaSection from './_components/CtaSection'

import {
    stats,
    overviewParagraphs,
    overviewImage,
    process,
    services,
    techAreas,
    benefits,
    faqs,
} from './_data/innovationLabData'

export default function InnovationLabPage() {
    return (
        <>
            <HeroSection stats={stats} />

            <OverviewSection
                paragraphs={overviewParagraphs}
                imageSrc={overviewImage}
                imageAlt="DCS PLM Innovation Lab"
            />

            <ProcessSection steps={process} />

            <ServicesGrid services={services} />

            <TechAreasSection areas={techAreas} />

            <BenefitsSection benefits={benefits} />

            <FaqSection faqs={faqs} />

            <CtaSection
                title="Ready to Build Something Extraordinary?"
                description="Bring your ideas to our Innovation Lab. Whether you&apos;re a startup, enterprise, or researcher — let&apos;s create the future together."
                primaryLink={{ href: '/contact-us', label: 'Start a Project' }}
            />
        </>
    )
}
