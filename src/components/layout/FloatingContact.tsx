'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

const FloatingContact = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show floating contact after scrolling down 100px
            setIsVisible(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const whatsappNumber = '+918698181853'
    const whatsappMessage = 'Hi, I am interested in DCS PLM programs!'
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    const phoneNumber = '+918698181853'

    const contactOptions = [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            href: whatsappLink,
            bgColor: 'bg-[#25D366]', // Official WhatsApp green
            hoverColor: 'hover:bg-[#128C7E]',
        },
        {
            icon: Phone,
            label: 'Call Us',
            href: `tel:${phoneNumber}`,
            bgColor: 'bg-blue-600',
            hoverColor: 'hover:bg-blue-700',
        },
    ]

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
            <AnimatePresence>
                {isVisible && (
                    <>
                        {contactOptions.map((option, index) => {
                            const Icon = option.icon
                            return (
                                <motion.a
                                    key={index}
                                    href={option.href}
                                    target={option.href.startsWith('http') ? '_blank' : undefined}
                                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ scale: 0, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0, opacity: 0, y: 20 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20,
                                        delay: index * 0.1, // Stagger effect
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white ${option.bgColor} ${option.hoverColor} transition-colors relative group`}
                                    aria-label={option.label}
                                >
                                    <Icon className="w-6 h-6" />

                                    {/* Tooltip on hover */}
                                    <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {option.label}
                                    </span>
                                </motion.a>
                            )
                        })}
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FloatingContact
