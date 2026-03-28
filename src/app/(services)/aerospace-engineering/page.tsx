import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export const metadata = {
    title: 'Aerospace Engineering | DCS PLM',
    description: 'Advanced aerospace engineering training program combining theoretical knowledge with hands-on industry experience in aircraft design, systems, and manufacturing.',
}

export default function AerospaceEngineeringPage() {
    return (
        <ServicePageTemplate
            title="Aerospace Engineering"
            subtitle="Elevate Your Career in Aviation & Space Technology"
            heroImage="/uploads/2025/10/Digital-Manufacturing.webp"
            overview={[
                "Master the art and science of aerospace engineering with our comprehensive program designed to prepare you for careers in aircraft design, spacecraft development, and aviation systems.",
                "Our curriculum combines theoretical knowledge with hands-on industry experience, covering everything from aerodynamics and propulsion to space systems engineering and advanced manufacturing.",
                "Learn with industry-standard tools like CATIA, ANSYS, and SolidWorks while working on real aerospace projects that prepare you for professional certifications and career success."
            ]}
            keyServices={[
                "Aircraft Design & Analysis - Aerodynamics, propulsion, and structural design for modern aircraft",
                "Space Systems Engineering - Satellite design, orbital mechanics, and space mission planning",
                "Aviation Manufacturing - Advanced manufacturing processes specific to aerospace industry standards",
                "Flight Dynamics & Control - Aircraft stability, control systems, and flight simulation",
                "CAD/CAM Tools Training - Hands-on experience with CATIA, ANSYS, and SolidWorks",
                "Industry Certifications - Preparation for professional aerospace certifications",
                "Composite Materials - Advanced materials fabrication and testing",
                "Quality Assurance - AS9100 standards and aviation quality control",
                "Live Project Work - Real aerospace industry projects and case studies"
            ]}
            benefits={[
                "Comprehensive curriculum covering all aerospace engineering domains",
                "Hands-on training with industry-standard simulation tools",
                "Expert faculty with aerospace industry experience",
                "Industry projects and internship opportunities",
                "Placement assistance in aerospace companies",
                "International certification preparation",
                "State-of-the-art laboratory facilities",
                "Career guidance and mentorship program"
            ]}
            ctaTitle="Launch Your Aerospace Career"
            ctaDescription="Enroll in our Aerospace Engineering program and take the first step toward a rewarding career in aviation and space technology"
        />
    )
}
