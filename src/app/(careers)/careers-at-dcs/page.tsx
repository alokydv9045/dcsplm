import { jobPostings } from '@/data/staticData'
import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default async function CareersAtDCSPage() {
    const jobs = jobPostings
    const errorOccurred = false

    const benefits = [
        'Competitive Salary & Benefits',
        'Work-Life Balance',
        'Learning & Development',
        'Health Insurance',
        'Flexible Work Options',
        'Career Growth Opportunities',
    ]

    return (
        <>
            {/* Hero */}
            <section
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] text-white">
                        Careers at DCS
                    </h1>
                    <p className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
                        Join our team and make a difference in healthcare and technology
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-4">Current Openings</h2>
                    <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
                        We&apos;re looking for talented individuals to join our growing team
                    </p>

                    {errorOccurred ? (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
                            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertCircle className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Careers Database Offline</h3>
                            <p className="text-slate-600 max-w-md mx-auto mb-8">
                                We are unable to retrieve open positions at this moment. Please try again later or contact our HR directly.
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-slate-500 text-sm border border-slate-100">
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                Database Connectivity Issue
                            </div>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-500 text-lg">No open positions right now. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                                        <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{job.type}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-3">
                                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                                        {job.salary && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.salary}</span>}
                                    </div>
                                    <p className="text-sm text-slate-600 line-clamp-2 mb-4">{job.description}</p>
                                    <Link href={`/join-us?position=${encodeURIComponent(job.title)}`}
                                        className="text-sm text-primary font-semibold hover:underline flex items-center gap-1">
                                        Apply Now <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="text-center mt-12">
                        <Link href="/join-us" className="btn-primary py-3 px-8 inline-flex items-center gap-2">
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
