'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'ABOUT US', href: '/about-us' },
        { name: 'CONSULTING', href: '/drug-discovery-development' },
        { name: 'PROGRAMS', href: '/clinical-research-education-programs' },
        { name: 'INNOVATION LAB', href: '/innovation-lab' },
        { name: 'CAREER', href: '/join-us' },
        { name: 'CONTACT US', href: '/contact-us' },
    ]

    const skillDevelopment = [
        { name: 'Clinical Research Management', href: '/clinical-research-education-programs' },
        { name: 'Pharmacovigilance', href: '/pharmacovigilance-excellence' },
        { name: 'Clinical Data Management', href: '/clinical-data-management' },
        { name: 'Regulatory Affairs', href: '/regulatory-affairs-in-pharmaceutical-healthcare-industries' },
        { name: 'Medical Writing', href: '/dcs-medical-writing-program' },
        { name: 'Industry Inside Institute', href: '/industry-inside-institute' },
        { name: 'IoT Services', href: '/iot-services' },
        { name: 'Data Science', href: '/data-science' },
        { name: 'Aerospace Engineering', href: '/aerospace-engineering' }, // Assuming link exists or justplaceholder
        { name: 'Smart Manufacturing', href: '/smart-manufacturing' },
        { name: 'Mern Stack', href: '/mern-stack' }, // Assuming link exists
    ]

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
                    <div className="lg:col-span-2 mb-6 sm:mb-0">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-lg">
                                <Image
                                    src="/images/logo.png"
                                    alt="DCS Logo"
                                    width={40}
                                    height={40}
                                    style={{ width: 'auto', height: '40px' }}
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-md">
                            Delivering innovative PLM and engineering solutions to help businesses grow and succeed in the digital era.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/dcsplm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/dcsplm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/company/dcs-plm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/dcsplm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com/@dcsplm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="YouTube">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link className="text-gray-400 hover:text-primary-400 transition-colors text-sm" href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold text-white mb-4">SKILL DEVELOPMENT</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ul className="space-y-2">
                                {skillDevelopment.slice(0, 6).map((link) => (
                                    <li key={link.name}>
                                        <Link className="text-gray-400 hover:text-primary-400 transition-colors text-sm" href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {skillDevelopment.slice(6).map((link) => (
                                    <li key={link.name}>
                                        <Link className="text-gray-400 hover:text-primary-400 transition-colors text-sm" href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 lg:px-8 py-3">
                    <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                            <span>Office No. 502, 5 Floor, Royal Avenue, BRS road, Shivar Chowk, Rahatani, Pimple Saudagar, Pune 411027.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                            <span>+91 8698181853 / +91 8956895738</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                            <a href="mailto:enquiry@dcsplm.com" className="hover:text-primary-400 transition-colors">enquiry@dcsplm.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 bg-gray-950">
                <div className="container mx-auto px-4 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                        <p suppressHydrationWarning>Copyright © {currentYear} DCS PLM | DCS PLM</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

