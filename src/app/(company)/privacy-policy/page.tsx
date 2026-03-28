
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = {
    title: "Privacy Policy - DCS PLM",
    description: "Privacy Policy for DCS PLM - How we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white section-padding">
            <div className="container-custom max-w-4xl">
                <SectionHeading className="mb-8">Privacy Policy</SectionHeading>
                <p className="text-sm text-slate-500 mb-8">Last Updated: February 2026</p>

                <div className="prose prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            At DCS PLM, we collect information that you provide directly to us when you:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Create an account or register for our courses</li>
                            <li>Enroll in courses or programs</li>
                            <li>Submit contact forms or inquiries</li>
                            <li>Subscribe to our newsletters</li>
                            <li>Participate in surveys or feedback forms</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            This information may include your name, email address, phone number, educational background, and payment details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">We use the collected information to:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Provide, maintain, and improve our educational services</li>
                            <li>Process enrollments and manage your learning progress</li>
                            <li>Communicate with you about courses, updates, and promotional offers</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Ensure the security and integrity of our platform</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Protection</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely using industry-standard encryption protocols.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies and Tracking</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand usage patterns. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may share your information with trusted third-party service providers who assist us in operating our platform, conducting business, or serving you. These parties are obligated to keep your information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Access, update, or delete your personal information</li>
                            <li>Opt out of marketing communications</li>
                            <li>Request a copy of the data we hold about you</li>
                            <li>Withdraw consent for data processing at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed">
                            If you have questions about this Privacy Policy, please contact us at{' '}
                            <a href="mailto:enquiry@dcsplm.com" className="text-primary hover:underline">enquiry@dcsplm.com</a>
                            {' '}or call us at +91 8698181853.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
