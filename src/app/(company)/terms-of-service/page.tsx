
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = {
    title: "Terms of Service - DCS PLM",
    description: "Terms of Service for DCS PLM - Terms and conditions governing the use of our platform.",
}

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-white section-padding">
            <div className="container-custom max-w-4xl">
                <SectionHeading className="mb-8">Terms of Service</SectionHeading>
                <p className="text-sm text-slate-500 mb-8">Last Updated: February 2026</p>

                <div className="prose prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 leading-relaxed">
                            By accessing and using the DCS PLM website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
                        <p className="text-slate-600 leading-relaxed">
                            DCS PLM provides educational programs, consulting services, skill development courses, and a Learning Management System (LMS) platform. Our services include but are not limited to clinical research programs, pharmacovigilance training, regulatory affairs, medical writing, and technology consulting.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>You must provide accurate and complete registration information</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                            <li>You must notify us immediately of any unauthorized use of your account</li>
                            <li>You may not share your account with other individuals</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Course Enrollment and Access</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">When you enroll in a course:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>You are granted a personal, non-transferable license to access the course content</li>
                            <li>Course materials are for your personal educational use only</li>
                            <li>You may not reproduce, distribute, or share course content</li>
                            <li>Access to course content may be time-limited as specified per course</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
                        <p className="text-slate-600 leading-relaxed">
                            All content on DCS PLM, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of DCS PLM and is protected by intellectual property laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payment and Refund Policy</h2>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Fees for paid courses are specified on the course page at the time of enrollment</li>
                            <li>All payments are processed securely through our payment partners</li>
                            <li>Refund requests must be made within 7 days of enrollment</li>
                            <li>Refunds are subject to our review and may not apply if significant course progress has been made</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Prohibited Conduct</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">You agree not to:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Use the platform for any unlawful purpose</li>
                            <li>Attempt to gain unauthorized access to any part of the platform</li>
                            <li>Interfere with the proper functioning of the website</li>
                            <li>Upload any malicious software or content</li>
                            <li>Misrepresent your identity or affiliation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
                        <p className="text-slate-600 leading-relaxed">
                            DCS PLM shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid by you for the relevant service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Modifications to Terms</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of the platform after changes constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
                        <p className="text-slate-600 leading-relaxed">
                            For questions regarding these Terms of Service, contact us at{' '}
                            <a href="mailto:enquiry@dcsplm.com" className="text-primary hover:underline">enquiry@dcsplm.com</a>
                            {' '}or call us at +91 8698181853.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
