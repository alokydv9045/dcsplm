'use client'

import HeroSection from './_components/HeroSection'
import OverviewSection from './_components/OverviewSection'
import PipelineSection from './_components/PipelineSection'
import ServicesGrid from './_components/ServicesGrid'
import WhyChooseUsSection from './_components/WhyChooseUsSection'
import BenefitsSection from './_components/BenefitsSection'
import FaqSection from './_components/FaqSection'
import CtaSection from './_components/CtaSection'

import {
    stats,
    overviewParagraphs,
    pipeline,
    services,
    whyChooseUs,
    benefits,
    faqs,
} from './_data/drugDiscoveryData'

export default function DrugDiscoveryPage() {
    return (
        <>
            <HeroSection stats={stats} />

            <OverviewSection paragraphs={overviewParagraphs} />

            <PipelineSection steps={pipeline} />

            <ServicesGrid services={services} />

            <WhyChooseUsSection items={whyChooseUs} />

            <BenefitsSection benefits={benefits} />

            <FaqSection faqs={faqs} />

            <CtaSection
                title="Ready to Accelerate Your Drug Development?"
                description="Partner with DCS PLM to transform your pipeline from target to clinic — faster, smarter, and with regulatory confidence."
                primaryLink={{ href: '/contact-us', label: 'Start a Project' }}
            />
        </>
    )
}
