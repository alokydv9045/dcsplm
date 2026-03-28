'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function IndustryInsideInstitutePage() {
    return (
        <ServicePageTemplate
            title="Industry Inside Institute"
            subtitle="Bridging Academia and Industry for Career Success"
            heroImage="/uploads/2025/10/Skill-Development.webp"
            overview={[
                "The Industry Inside Institute is our flagship initiative that brings real-world industry experience directly into education. We partner with leading companies to provide immersive learning experiences.",
                "Our programs combine classroom learning with industry internships, live projects, and mentorship from industry professionals to create job-ready graduates.",
                "Through strategic partnerships with pharmaceutical, biotech, and healthcare companies, we ensure our curriculum remains relevant and our students gain practical exposure to current industry practices."
            ]}
            keyServices={[
                "Industry Internship Programs",
                "Corporate Mentorship",
                "Live Project Assignments",
                "Industry Expert Workshops",
                "Company Site Visits",
                "Industry Certification Programs",
                "Skill Gap Analysis",
                "Career Counseling",
                "Placement Partnerships"
            ]}
            benefits={[
                "Direct industry exposure during training",
                "Mentorship from working professionals",
                "Portfolio of real project experience",
                "Industry-recognized certifications",
                "Strong placement assistance",
                "Networking with industry leaders",
                "Understanding of workplace expectations",
                "Competitive advantage in job market"
            ]}
            ctaTitle="Join the Industry Inside Institute"
            ctaDescription="Get the industry exposure you need to launch your career successfully"
        />
    )
}
