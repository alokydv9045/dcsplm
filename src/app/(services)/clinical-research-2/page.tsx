'use client'

import HeroSection from './_components/HeroSection'
import OverviewSection from './_components/OverviewSection'
import LearningPathSection from './_components/LearningPathSection'
import ProgramsGrid from './_components/ProgramsGrid'
import WhyChooseUsSection from './_components/WhyChooseUsSection'
import CareerPathsSection from './_components/CareerPathsSection'
import BenefitsSection from './_components/BenefitsSection'
import FaqSection from './_components/FaqSection'
import CtaSection from './_components/CtaSection'

import {
    stats,
    overviewParagraphs,
    learningPath,
    programs,
    whyChooseUs,
    careerPaths,
    benefits,
    faqs,
} from './_data/clinicalResearchData'

export default function ClinicalResearchPage() {
    return (
        <>
            <HeroSection stats={stats} />

            <OverviewSection paragraphs={overviewParagraphs} />

            <LearningPathSection steps={learningPath} />

            <ProgramsGrid programs={programs} />

            <WhyChooseUsSection items={whyChooseUs} />

            <CareerPathsSection paths={careerPaths} />

            <BenefitsSection benefits={benefits} />

            <FaqSection faqs={faqs} />

            <CtaSection
                title="Ready to Launch Your Clinical Research Career?"
                description="Join 10,000+ students who have built successful careers in clinical research with DCS PLM&apos;s industry-leading programs."
            />
        </>
    )
}
