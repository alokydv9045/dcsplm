'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function PharmacovigilanceExcellencePage() {
    return (
        <ServicePageTemplate
            title="Pharmacovigilance Excellence"
            subtitle="Mastering Drug Safety Monitoring for Patient Protection"
            heroImage="/uploads/2025/10/imgi_64_standard-quality-control-collage-concept_23-2149595850.webp"
            overview={[
                "Our Pharmacovigilance Excellence program trains professionals in the science and practice of drug safety monitoring. Learn to identify, assess, and prevent adverse drug reactions while ensuring regulatory compliance.",
                "This comprehensive program covers the entire pharmacovigilance lifecycle, from signal detection to risk management, preparing you for roles in pharmaceutical companies, regulatory agencies, and CROs.",
                "Stay ahead with training on global pharmacovigilance regulations, advanced safety databases, and emerging trends in drug safety science."
            ]}
            keyServices={[
                "Pharmacovigilance Fundamentals",
                "Adverse Event Reporting",
                "Signal Detection & Management",
                "Risk Management Planning",
                "ICSR Case Processing",
                "MedDRA Coding",
                "Global Regulatory Requirements",
                "Safety Database Training",
                "Aggregate Report Preparation"
            ]}
            benefits={[
                "Comprehensive understanding of drug safety",
                "Hands-on training with safety databases",
                "Global regulatory perspective (FDA, EMA, WHO)",
                "Industry expert-led sessions",
                "Job-ready skills upon completion",
                "Career opportunities in pharma and CROs",
                "Real case studies and practical exercises",
                "Certification recognized by industry"
            ]}
            ctaTitle="Master Pharmacovigilance"
            ctaDescription="Launch your career in drug safety with our industry-leading training program"
        />
    )
}
