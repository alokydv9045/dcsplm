'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function RegulatoryAffairsPage() {
    return (
        <ServicePageTemplate
            title="Regulatory Affairs"
            subtitle="Navigating Global Pharmaceutical Regulations with Expertise"
            heroImage="/uploads/2025/10/What-We-Do.webp"
            overview={[
                "Our Regulatory Affairs program prepares professionals to navigate the complex regulatory landscape of the pharmaceutical, biotechnology, and medical device industries.",
                "Learn the intricacies of drug approval processes, regulatory submissions, and compliance requirements across major global markets including US FDA, EMA, and Health Canada.",
                "Graduates are equipped to manage regulatory strategies, prepare dossiers, and ensure companies meet all regulatory requirements throughout the product lifecycle."
            ]}
            keyServices={[
                "Regulatory Strategy Development",
                "Drug Approval Pathways",
                "CTD/eCTD Dossier Preparation",
                "FDA & EMA Submission Requirements",
                "Labeling & Promotional Review",
                "Post-Market Surveillance",
                "CMC Regulatory Requirements",
                "Medical Device Regulations",
                "Global Registration Strategies"
            ]}
            benefits={[
                "Understanding of global regulatory frameworks",
                "Practical dossier preparation experience",
                "Career-ready regulatory skills",
                "High-demand job opportunities",
                "Expert faculty from regulatory background",
                "Case studies from real submissions",
                "Industry certification upon completion",
                "Strong placement track record"
            ]}
            ctaTitle="Launch Your Regulatory Affairs Career"
            ctaDescription="Become an expert in pharmaceutical regulations and drug approvals"
        />
    )
}
