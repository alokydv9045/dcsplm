'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function ClinicalDataManagementPage() {
    return (
        <ServicePageTemplate
            title="Clinical Data Management"
            subtitle="Excellence in Data Quality for Clinical Research Success"
            heroImage="/uploads/2025/10/Digital-Manufacturing.webp"
            overview={[
                "Our Clinical Data Management program equips professionals with the skills to ensure data quality, integrity, and regulatory compliance throughout clinical trials.",
                "Learn industry-standard tools and best practices for database design, data entry, query management, and data cleaning that are essential for successful clinical research.",
                "This program prepares you for high-demand roles in CDM across pharmaceutical companies, biotech firms, and contract research organizations worldwide."
            ]}
            keyServices={[
                "Database Design & Development",
                "CRF Development & Annotation",
                "EDC System Training (Medidata, Oracle)",
                "Data Entry & Validation",
                "Query Management",
                "Medical Coding (MedDRA, WHO-DD)",
                "Data Cleaning & Reconciliation",
                "Database Lock Procedures",
                "CDISC Standards (CDASH, SDTM)"
            ]}
            benefits={[
                "Hands-on training with industry EDC systems",
                "CDISC standards expertise",
                "Practical database design experience",
                "Strong job market demand",
                "Industry-recognized certification",
                "Expert faculty from pharma industry",
                "Real clinical trial case studies",
                "100% placement support"
            ]}
            ctaTitle="Excel in Clinical Data Management"
            ctaDescription="Build in-demand skills for a rewarding career in clinical data management"
        />
    )
}
