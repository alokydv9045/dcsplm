'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function DataSciencePage() {
    return (
        <ServicePageTemplate
            title="Data Science & Analytics"
            subtitle="Transforming Data Into Strategic Business Intelligence"
            heroImage="/uploads/2025/10/Digital-Manufacturing.webp"
            overview={[
                "Our Data Science team helps organizations unlock the full potential of their data through advanced analytics, machine learning, and AI solutions that drive smarter business decisions.",
                "From data strategy development to predictive modeling, we deliver actionable insights that transform how businesses operate, compete, and grow in today&apos;s data-driven economy.",
                "Whether you need to optimize processes, predict outcomes, or discover hidden patterns, our data scientists combine domain expertise with cutting-edge algorithms to solve complex business challenges."
            ]}
            keyServices={[
                "Data Strategy & Governance",
                "Predictive Analytics",
                "Machine Learning Solutions",
                "Natural Language Processing",
                "Computer Vision Applications",
                "Business Intelligence Dashboards",
                "Big Data Architecture",
                "Statistical Modeling",
                "AI Implementation & Integration"
            ]}
            benefits={[
                "Data-driven decision making across your organization",
                "Predictive insights for proactive business strategies",
                "Automated processes through intelligent algorithms",
                "Improved customer understanding and personalization",
                "Competitive advantage through advanced analytics",
                "Reduced costs through optimization",
                "Faster time-to-insight with modern tools",
                "Scalable analytics infrastructure"
            ]}
            ctaTitle="Ready to Unlock Your Data&apos;s Potential?"
            ctaDescription="Partner with our data science experts to transform your business with AI and analytics"
        />
    )
}
