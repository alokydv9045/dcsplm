'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function ComputerSystemValidationPage() {
    return (
        <ServicePageTemplate
            title="Computer System Validation"
            subtitle="Ensuring Compliance and Data Integrity in Regulated Systems"
            heroImage="/uploads/2025/10/Digital-Manufacturing.webp"
            overview={[
                "Our Computer System Validation (CSV) program trains professionals to validate computerized systems used in pharmaceutical, biotech, and medical device industries to ensure regulatory compliance.",
                "Learn the principles of validation, GAMP 5 guidelines, and practical approaches to validating laboratory systems, manufacturing systems, and enterprise software applications.",
                "This program prepares you for roles in quality assurance, validation, and IT compliance across the life sciences industry."
            ]}
            keyServices={[
                "GAMP 5 Guidelines & Principles",
                "Validation Life Cycle Approach",
                "User Requirements Specifications",
                "IQ/OQ/PQ Protocols",
                "21 CFR Part 11 Compliance",
                "Data Integrity Requirements",
                "Risk-Based Validation",
                "CSV Documentation",
                "Laboratory System Validation"
            ]}
            benefits={[
                "In-demand skills in pharma industry",
                "Understanding of global regulatory requirements",
                "Practical validation experience",
                "Career opportunities in QA and IT",
                "Expert faculty from validation background",
                "Hands-on protocol development",
                "Industry certification available",
                "Strong placement support"
            ]}
            ctaTitle="Master Computer System Validation"
            ctaDescription="Build expertise in validating regulated computerized systems"
        />
    )
}
