'use client'

import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-primary-700 text-white h-8 z-[60] border-b border-white/10 flex items-center">
            <div className="container-custom">
                <div className="flex items-center justify-between text-[10px] sm:text-xs gap-4 mx-2 sm:mx-0">
                    <div className="flex items-center space-x-5 sm:space-x-6">
                        <a href="tel:+918698181853" className="flex items-center space-x-1.5 text-primary-100 hover:text-white transition-colors">
                            <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden sm:inline">+91 8698181853</span>
                            <span className="sm:hidden">Call</span>
                        </a>
                        <a href="mailto:enquiry@dcsplm.com" className="flex items-center space-x-1.5 text-primary-100 hover:text-white transition-colors hidden md:flex">
                            <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span>enquiry@dcsplm.com</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-5 sm:space-x-4">
                        <Link className="px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-600 rounded-md hover:bg-white hover:text-primary transition-all font-bold uppercase tracking-wider text-[9px] sm:text-[10px]" href="/contact-us">
                            Enquiry Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
