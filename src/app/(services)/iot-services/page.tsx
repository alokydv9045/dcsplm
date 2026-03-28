'use client'

import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function IoTServicesPage() {
    return (
        <ServicePageTemplate
            title="IoT Services"
            subtitle="Connecting Devices, Data, and People for Smarter Operations"
            heroImage="/uploads/2025/10/Digital-Manufacturing.webp"
            overview={[
                "Our Internet of Things (IoT) services help organizations harness the power of connected devices to improve efficiency, reduce costs, and create new business opportunities across industries.",
                "From sensor deployment to data analytics platforms, we provide end-to-end IoT solutions that transform raw data into actionable insights for better decision-making.",
                "Whether you're looking to monitor equipment, track assets, or automate processes, our IoT expertise helps you build connected ecosystems that deliver measurable business value."
            ]}
            keyServices={[
                "IoT Strategy & Roadmap",
                "Sensor & Device Selection",
                "Edge Computing Solutions",
                "IoT Platform Development",
                "Data Integration & Analytics",
                "Asset Tracking Systems",
                "Remote Monitoring Solutions",
                "IoT Security Implementation",
                "Maintenance & Support Services"
            ]}
            benefits={[
                "Real-time visibility into operations",
                "Reduced operational costs through automation",
                "Predictive insights for proactive decisions",
                "Improved asset utilization and performance",
                "Enhanced customer experiences",
                "New revenue streams through IoT-enabled services",
                "Scalable architecture for future growth",
                "Secure and reliable connectivity"
            ]}
            ctaTitle="Ready to Connect Your Operations?"
            ctaDescription="Build intelligent IoT solutions that drive efficiency and innovation"
        />
    )
}
