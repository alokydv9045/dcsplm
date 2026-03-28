'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, X, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface MenuItem {
    name: string
    href?: string
    submenu?: { name: string; href: string }[]
}

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    menuItems: MenuItem[]
}

const MobileMenu = ({ isOpen, onClose, menuItems }: MobileMenuProps) => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[9999] lg:hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <Link href="/" onClick={onClose}>
                                <Image
                                    src="/uploads/2025/10/Dcs-logo-01.png"
                                    alt="DCS Logo"
                                    width={40}
                                    height={40}
                                    style={{ width: 'auto', height: '40px' }}
                                />
                            </Link>
                            <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {/* Menu Items */}
                            <nav className="space-y-1">
                                {menuItems.map((item) => (
                                    <div key={item.name} className="border-b border-gray-50 last:border-0 pb-1 last:pb-0">
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                                                    className={cn(
                                                        "flex items-center justify-between w-full py-3 px-2 font-semibold text-slate-800 rounded-lg uppercase",
                                                        openSubmenu === item.name && "text-primary bg-primary/5"
                                                    )}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={cn("w-4 h-4 transition-transform", openSubmenu === item.name && "rotate-180")} />
                                                </button>
                                                <AnimatePresence>
                                                    {openSubmenu === item.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden pl-4"
                                                        >
                                                            {item.submenu.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    onClick={onClose}
                                                                    className="flex items-center justify-between py-2.5 px-3 text-sm text-slate-600 hover:text-primary transition-colors uppercase"
                                                                >
                                                                    {sub.name}
                                                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                onClick={onClose}
                                                className="block py-3 px-2 font-semibold text-slate-800 hover:text-primary transition-colors uppercase"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                            <div className="mt-8">
                                <Link 
                                    href="/contact-us"
                                    onClick={onClose}
                                    className="w-full bg-red-600 text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg hover:bg-red-700 transition-all block"
                                >
                                    Partner With Us
                                </Link>
                            </div>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu
