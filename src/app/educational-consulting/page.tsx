'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function EducationalConsultingPage() {
    return (
        <ServicePageTemplate
            title="Educational Consulting"
            subtitle="Transforming Education Through Strategic Guidance and Innovation"
            heroImage="/uploads/2025/10/Skill-Development.webp"
            overview={[
                "Our Educational Consulting services help academic institutions, training organizations, and corporate L&D teams design and deliver impactful learning experiences that meet modern educational standards.",
                "We combine pedagogical expertise with industry insights to develop curriculum, programs, and training frameworks that prepare learners for real-world challenges and career success.",
                "From accreditation support to digital learning implementation, we partner with you to transform educational outcomes and create lasting impact in your learning community."
            ]}
            keyServices={[
                "Curriculum Design & Development",
                "Accreditation Support",
                "Faculty Development Programs",
                "Learning Management System Implementation",
                "Corporate Training Solutions",
                "Competency Framework Development",
                "E-Learning Content Creation",
                "Assessment & Evaluation Design",
                "Industry-Academia Partnerships"
            ]}
            benefits={[
                "Industry-aligned curriculum for better job placement",
                "Improved learning outcomes and engagement",
                "Expert guidance from experienced educators",
                "Modern technology integration in education",
                "Flexible learning models for diverse needs",
                "Quality assurance and accreditation readiness",
                "Measurable ROI on training investments",
                "Future-ready skills development"
            ]}
            ctaTitle="Ready to Transform Your Educational Programs?"
            ctaDescription="Partner with us to create impactful learning experiences that drive results"
        />
    )
}
