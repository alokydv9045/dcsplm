'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function MedicalWritingPage() {
    return (
        <ServicePageTemplate
            title="Medical Writing Program"
            subtitle="Crafting Clear, Accurate, and Impactful Medical Communications"
            heroImage="/uploads/2025/10/What-We-Do.webp"
            overview={[
                "Our Medical Writing Program develops professionals skilled in creating high-quality medical and scientific documents for pharmaceutical, biotech, and healthcare organizations.",
                "Learn to write clinical documents, regulatory submissions, publications, and patient-facing materials that meet industry standards and regulatory requirements.",
                "This program combines scientific writing fundamentals with practical experience in creating documents that support drug development and medical communications."
            ]}
            keyServices={[
                "Clinical Study Reports (CSR)",
                "Protocol Development",
                "Investigator Brochures",
                "Regulatory Submission Documents",
                "Scientific Publications",
                "Patient Information Leaflets",
                "Literature Reviews",
                "Pharmacovigilance Documents",
                "Medical Education Materials"
            ]}
            benefits={[
                "Strong writing and editing skills",
                "Understanding of regulatory requirements",
                "Portfolio of sample documents",
                "Growing demand for medical writers",
                "Flexible career opportunities (remote available)",
                "Expert guidance from published writers",
                "Hands-on document creation",
                "Industry networking opportunities"
            ]}
            ctaTitle="Start Your Medical Writing Career"
            ctaDescription="Develop expertise in medical and scientific communication"
        />
    )
}
