'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function StressedAssetAdvisoryPage() {
    return (
        <ServicePageTemplate
            title="Stressed Asset Advisory"
            subtitle="Maximizing Value Recovery Through Expert Asset Resolution"
            heroImage="/uploads/2025/10/What-We-Do.webp"
            overview={[
                "Our Stressed Asset Advisory services help financial institutions, investors, and corporates navigate the complexities of distressed asset situations, maximizing value recovery while managing risk.",
                "We bring deep expertise in asset resolution, restructuring, and turnaround management to help stakeholders make informed decisions and achieve optimal outcomes in challenging situations.",
                "From due diligence to resolution strategy implementation, our experienced team provides end-to-end support for managing stressed assets across industries and asset classes."
            ]}
            keyServices={[
                "Distressed Asset Valuation",
                "Resolution Strategy Development",
                "Turnaround Management",
                "Debt Restructuring Advisory",
                "Asset Recovery Services",
                "Forensic Investigation",
                "IBC/NCLT Advisory",
                "Lender Coordination",
                "Exit Strategy Planning"
            ]}
            benefits={[
                "Maximized asset value recovery",
                "Reduced time-to-resolution",
                "Expert navigation of regulatory frameworks",
                "Risk mitigation through due diligence",
                "Stakeholder alignment and communication",
                "Proven restructuring methodologies",
                "Cross-functional expertise for complex cases",
                "Confidential and professional handling"
            ]}
            ctaTitle="Need Help With Stressed Assets?"
            ctaDescription="Let our experts guide you through complex asset resolution challenges"
        />
    )
}
