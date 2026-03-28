'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from '@/components/ui/BackgroundBeams'
import { SparklesCore } from '@/components/ui/SparklesCore'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Thank you for your message! We will get back to you soon.',
                })
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to submit form. Please try again.',
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden pt-20"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
                }}
            >
                {/* Background Image Overlay */}
                <div 
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: 'url("/images/classroom.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                {/* Glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(228,53,56,0.12) 0%, rgba(23,92,255,0.08) 40%, transparent 70%)',
                    }}
                />

                <BackgroundBeams className="opacity-30" />
                <SparklesCore className="opacity-40" particleCount={60} particleColor="#ffffff" />

                <div className="container-custom text-center relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Get In Touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] text-white"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Get in touch with us—we&apos;re here to help
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Info & Form */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1 space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <MapPin className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Address</h4>
                                            <p className="text-gray-700">
                                                Office No. 502, 5th Floor, Royal Avenue,<br />
                                                BRS Road, Shivar Chowk, Rahatani, Pimple Saudagar,<br />
                                                Pune, Maharashtra 411027
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <Phone className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Phone</h4>
                                            <a href="tel:+919876543210" className="text-gray-700 hover:text-primary transition-colors">
                                                +91 98765 43210
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Email</h4>
                                            <a href="mailto:info@dcsplm.com" className="text-gray-700 hover:text-primary transition-colors">
                                                info@dcsplm.com
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="card p-10 shadow-xl">
                                <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                                ? 'bg-green-50 text-green-800 border border-green-200'
                                                : 'bg-red-50 text-red-800 border border-red-200'
                                                }`}
                                        >
                                            {submitStatus.message}
                                        </motion.div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        className={`btn-primary w-full md:w-auto flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        <Send className="w-5 h-5" />
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Optional) */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Visit Our Office
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700 mb-8"
                    >
                        We&apos;d love to meet you in person at our office in Pune
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.428766175402!2d73.7851395759714!3d18.59532958252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9beee7d1303%3A0xb69c1ce846f494f6!2sRoyal%20Avenue!5e0!3m2!1sen!2sin!4v1710344400000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="DCS PLM Office Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
