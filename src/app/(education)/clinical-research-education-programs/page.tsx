'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function ClinicalResearchProgramsPage() {
    return (
        <ServicePageTemplate
            title="Clinical Research Programs"
            subtitle="Building Future-Ready Clinical Research Professionals"
            heroImage="/uploads/2025/10/imgi_64_standard-quality-control-collage-concept_23-2149595850.webp"
            overview={[
                "Our Clinical Research Education Programs prepare aspiring professionals for successful careers in the clinical research industry. We offer comprehensive training that combines theoretical knowledge with practical skills.",
                "Designed in collaboration with industry experts, our programs cover all aspects of clinical research, from GCP guidelines to data management, trial operations, and regulatory compliance.",
                "Graduates from our programs gain the competencies and certifications needed to excel in roles across pharmaceutical, biotech, CRO, and healthcare organizations globally."
            ]}
            keyServices={[
                "Clinical Research Associate Training",
                "Good Clinical Practice (GCP) Certification",
                "Clinical Trial Operations",
                "Ethics & Regulatory Training",
                "Site Management Training",
                "Protocol Development Workshop",
                "Safety Reporting Training",
                "Investigator Site Training",
                "Career Guidance & Placement Support"
            ]}
            benefits={[
                "Industry-recognized certifications",
                "Hands-on practical training",
                "Expert faculty from clinical research industry",
                "100% placement assistance",
                "Access to clinical trial site visits",
                "Real-world case study learning",
                "Networking opportunities with industry leaders",
                "Flexible learning schedules"
            ]}
            ctaTitle="Start Your Clinical Research Career"
            ctaDescription="Join our industry-leading programs and launch your career in clinical research"
        />
    )
}
