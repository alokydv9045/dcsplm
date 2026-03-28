'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function StrategicManagementPage() {
    return (
        <ServicePageTemplate
            title="Strategic Management"
            subtitle="Driving Business Excellence Through Visionary Leadership"
            heroImage="/uploads/2025/10/What-We-Do.webp"
            overview={[
                "Our Strategic Management consulting services help organizations navigate complexity, seize opportunities, and build sustainable competitive advantages in rapidly evolving markets.",
                "We partner with C-suite executives and leadership teams to develop and execute strategies that align vision with action, driving measurable business outcomes and long-term value creation.",
                "From market analysis to organizational transformation, our consultants bring deep industry expertise and proven methodologies to solve your most pressing strategic challenges."
            ]}
            keyServices={[
                "Corporate Strategy Development",
                "Business Model Innovation",
                "Market Entry Strategies",
                "Merger & Acquisition Advisory",
                "Organizational Restructuring",
                "Performance Management Systems",
                "Change Management",
                "Leadership Development",
                "Strategic Planning Workshops"
            ]}
            benefits={[
                "Clear strategic direction aligned with market realities",
                "Improved decision-making through data-driven insights",
                "Enhanced organizational capabilities",
                "Sustainable competitive advantages",
                "Accelerated growth and market expansion",
                "Better stakeholder alignment and buy-in",
                "Measurable KPIs and accountability",
                "Long-term value creation for shareholders"
            ]}
            ctaTitle="Ready to Define Your Strategic Direction?"
            ctaDescription="Partner with our strategists to unlock new growth opportunities"
        />
    )
}
