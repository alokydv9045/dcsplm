'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Send, Upload, User, Mail, Phone, FileText, Briefcase, Loader2, CheckCircle } from 'lucide-react'
import { submitApplication } from '@/actions/job'

export default function JoinUsPage() {
    const searchParams = useSearchParams()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
    })

    useEffect(() => {
        const pos = searchParams.get('position')
        if (pos) setFormData(prev => ({ ...prev, position: pos }))
    }, [searchParams])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        // We use a dummy jobId since the form is a general application
        const result = await submitApplication({
            jobId: '', // Will need to be handled 
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            experience: formData.experience,
            message: formData.message,
        })

        setIsLoading(false)
        if (result.success) {
            setIsSubmitted(true)
        } else {
            setError((result as any).error || 'Failed to submit application')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    if (isSubmitted) {
        return (
            <>
                <section
                    className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden pt-20"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
                    }}
                >
                    {/* Glowing orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(228,53,56,0.12) 0%, rgba(23,92,255,0.08) 40%, transparent 70%)',
                        }}
                    />
                    <div className="container-custom text-center relative z-10 px-4 sm:px-6 lg:px-8 py-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] text-white">Application Submitted!</h1>
                    </div>
                </section>
                <section className="py-24">
                    <div className="container-custom max-w-xl text-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h2>
                        <p className="text-slate-500">We&apos;ve received your application. Our team will review it and get back to you soon.</p>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            {/* Hero */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden pt-20"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
                }}
            >
                {/* Glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(228,53,56,0.12) 0%, rgba(23,92,255,0.08) 40%, transparent 70%)',
                    }}
                />

                <div className="container-custom text-center relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] text-white"
                    >
                        Join Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Take the First Step Towards Your Dream Career
                    </motion.p>
                </div>
            </motion.section>

            {/* Application Form */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card p-10 shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-8 text-center">Application Form</h2>

                            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6">{error}</div>}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                            <User className="w-4 h-4 inline mr-1" /> Full Name *
                                        </label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                            <Mail className="w-4 h-4 inline mr-1" /> Email Address *
                                        </label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                                            <Phone className="w-4 h-4 inline mr-1" /> Phone Number *
                                        </label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label htmlFor="position" className="block text-sm font-semibold mb-2">
                                            <Briefcase className="w-4 h-4 inline mr-1" /> Position Applied For *
                                        </label>
                                        <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="e.g. Clinical Research Associate" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="experience" className="block text-sm font-semibold mb-2">Years of Experience *</label>
                                    <select id="experience" name="experience" value={formData.experience} onChange={handleChange} required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                                        <option value="">Select Experience</option>
                                        <option value="fresher">Fresher (0-1 years)</option>
                                        <option value="junior">Junior (1-3 years)</option>
                                        <option value="mid">Mid-Level (3-5 years)</option>
                                        <option value="senior">Senior (5-10 years)</option>
                                        <option value="expert">Expert (10+ years)</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Cover Letter / Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us why you&apos;d be a great fit for this role..." />
                                </div>

                                <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="btn-primary w-full flex items-center justify-center space-x-2">
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                    <span>{isLoading ? 'Submitting...' : 'Submit Application'}</span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
