'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, ArrowRight, Heart, MessageCircle } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

interface BlogSectionProps {
    initialBlogs: any[]
}

const BlogSection = ({ initialBlogs }: BlogSectionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeading
                    subtitle="Stay updated with industry trends, research insights, and expert perspectives"
                    centered
                >
                    Latest Insights
                </SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {initialBlogs.map((post, index) => (
                        <motion.article
                            key={post.id || post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2"
                        >
                            {/* Featured Image */}
                            <div className="relative h-48 overflow-hidden">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                        <Image src="/uploads/2025/10/Dcs-logo-01.png" alt="DCS Logo" width={60} height={60} className="opacity-20 object-contain" />
                                    </div>
                                )}
                            </div>

                            {/* Gradient Header */}
                            <div className="h-2 bg-gradient-to-r from-primary to-primary-600"></div>

                            <div className="p-6">
                                {/* Category Badge */}
                                <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-4">
                                    {post.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 mb-4 line-clamp-3 text-sm h-[3.75rem]">
                                    {post.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1.5" />
                                            <span suppressHydrationWarning>{new Date(post.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-3 h-3" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle className="w-3 h-3" />
                                            <span>{post._count?.comments || 0}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
                                >
                                    Read Full Story
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/blogs" className="btn-primary inline-flex items-center gap-2 group">
                        Browse All News
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default BlogSection
