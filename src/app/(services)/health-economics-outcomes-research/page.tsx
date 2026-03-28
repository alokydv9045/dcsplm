'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function HealthEconomicsPage() {
    return (
        <ServicePageTemplate
            title="Health Economics & Outcomes Research"
            subtitle="Demonstrating Value in Healthcare Decision Making"
            heroImage="/uploads/2025/10/Skill-Development.webp"
            overview={[
                "Our Health Economics & Outcomes Research (HEOR) program prepares professionals to assess the economic value and real-world effectiveness of healthcare interventions and pharmaceuticals.",
                "Learn to design and conduct pharmacoeconomic analyses, outcomes studies, and health technology assessments that inform payer and policy decisions.",
                "This program equips you with skills highly valued by pharmaceutical companies, health insurers, government agencies, and consulting firms."
            ]}
            keyServices={[
                "Pharmacoeconomic Analysis",
                "Cost-Effectiveness Modeling",
                "Budget Impact Analysis",
                "Health Technology Assessment",
                "Quality of Life Measurement",
                "Real-World Evidence Generation",
                "Patient-Reported Outcomes",
                "Systematic Literature Reviews",
                "Value Dossier Development"
            ]}
            benefits={[
                "Growing demand for HEOR expertise",
                "Understanding of health economics principles",
                "Practical modeling experience",
                "Career opportunities in pharma and consulting",
                "Expert faculty from industry",
                "Competitive salary potential",
                "Impactful work in healthcare decisions",
                "Hands-on project experience"
            ]}
            ctaTitle="Advance Your HEOR Career"
            ctaDescription="Develop expertise in demonstrating healthcare value"
        />
    )
}
