'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, type LucideIcon } from 'lucide-react'
import { SparklesCore } from '@/components/ui/SparklesCore'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

interface ServicePageTemplateProps {
    title: string
    titleHighlight?: string
    subtitle: string
    badge?: string
    badgeIcon?: LucideIcon
    heroImage?: string
    overview: string[]
    keyServices: string[]
    benefits?: string[]
    ctaTitle?: string
    ctaDescription?: string
}

export default function ServicePageTemplate({
    title,
    titleHighlight,
    subtitle,
    badge,
    badgeIcon: BadgeIcon,
    overview,
    keyServices,
    benefits,
    ctaTitle = 'Ready to connect?',
    ctaDescription = 'Contact us today to learn more about how we can help transform your business',
}: ServicePageTemplateProps) {
    return (
        <>
            {/* ── Hero Section ── */}
            <section className="relative min-h-[650px] md:min-h-[750px] bg-[#0c0c1d] text-white overflow-hidden pt-20 sm:pt-24 md:pt-28 flex items-center">
                {/* Grid background */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                <SparklesCore className="opacity-30" particleCount={40} particleColor="#175CFF" />

                {/* Gradient orbs */}
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />

                {/* Orbit rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.05]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/[0.07]" />

                <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 w-full">
                    {/* Badge */}
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                        >
                            {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
                            {badge}
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.08]"
                    >
                        {titleHighlight ? (
                            <>
                                {title.replace(titleHighlight, '').trim()}{' '}
                                <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                                    {titleHighlight}
                                </span>
                            </>
                        ) : (
                            <>
                                {title.split(' ').slice(0, -1).join(' ')}{' '}
                                <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                                    {title.split(' ').slice(-1)[0]}
                                </span>
                            </>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                        >
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#overview"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Overview Section ── */}
            <section id="overview" className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Overview"
                        badge="Our Expertise"
                        centered
                    />
                    <div className="grid md:grid-cols-3 gap-6">
                        {overview.map((para, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative rounded-2xl p-7 sm:p-8 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                                    i === 0
                                        ? 'border-primary/20 bg-primary/[0.02]'
                                        : i === 1
                                        ? 'border-secondary/20 bg-secondary/[0.02]'
                                        : 'border-emerald-500/20 bg-emerald-500/[0.02]'
                                }`}
                            >
                                <div
                                    className={`text-6xl font-black leading-none mb-4 ${
                                        i === 0
                                            ? 'text-primary/10'
                                            : i === 1
                                            ? 'text-secondary/10'
                                            : 'text-emerald-500/10'
                                    }`}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed">{para}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Key Services ── */}
            <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse at 80% 20%, rgba(23,92,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(228,53,56,0.06) 0%, transparent 50%)',
                    }}
                />
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                            Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Our Services{' '}
                            <span className="bg-gradient-to-r from-primary via-rose-400 to-secondary bg-clip-text text-transparent">
                                Include
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-3">
                        {keyServices.map((service, i) => {
                            const colors = [
                                { bg: 'bg-primary/10 group-hover:bg-primary', text: 'text-primary group-hover:text-white', border: 'hover:border-primary/20' },
                                { bg: 'bg-secondary/10 group-hover:bg-secondary', text: 'text-secondary group-hover:text-white', border: 'hover:border-secondary/20' },
                                { bg: 'bg-emerald-500/10 group-hover:bg-emerald-500', text: 'text-emerald-400 group-hover:text-white', border: 'hover:border-emerald-500/20' },
                                { bg: 'bg-amber-500/10 group-hover:bg-amber-500', text: 'text-amber-400 group-hover:text-white', border: 'hover:border-amber-500/20' },
                                { bg: 'bg-violet-500/10 group-hover:bg-violet-500', text: 'text-violet-400 group-hover:text-white', border: 'hover:border-violet-500/20' },
                                { bg: 'bg-cyan-500/10 group-hover:bg-cyan-500', text: 'text-cyan-400 group-hover:text-white', border: 'hover:border-cyan-500/20' },
                            ]
                            const c = colors[i % colors.length]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className={`group flex items-center gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] ${c.border} hover:bg-white/[0.05] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${c.bg}`}>
                                        <span className={`text-lg font-bold transition-colors duration-300 ${c.text}`}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <p className="flex-1 text-white/80 font-medium text-sm sm:text-base leading-relaxed">
                                        {service}
                                    </p>
                                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden sm:block" />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Benefits Section ── */}
            {benefits && benefits.length > 0 && (
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <StandardHeading
                            title="Key Benefits"
                            badge="Why Choose Us"
                            centered
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md bg-white hover:bg-primary/[0.01] transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5 group-hover:bg-emerald-500 transition-colors duration-300">
                                        <Check className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA Section ── */}
            <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
                {/* Grid background */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[100px]" />
                {/* Orbit rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.05]" />

                <div className="relative z-10 container-custom text-center py-4 sm:py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Get Started
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight">
                            {ctaTitle}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/40 leading-relaxed max-w-2xl mx-auto">
                            {ctaDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm sm:text-base"
                            >
                                Contact Us Today <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/programs"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                            >
                                View All Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
