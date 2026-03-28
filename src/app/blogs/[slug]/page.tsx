import { blogPosts } from '@/data/blogData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag, Heart, MessageCircle, Eye } from 'lucide-react'
import { BlogInteractions } from './BlogInteractions'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogPosts.find(p => p.slug === params.slug)

    if (!post) return { title: 'Post Not Found' }

    return {
        title: `${post.title} | DCS PLM Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.image ? [post.image] : [],
            type: 'article',
        }
    }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(p => p.slug === params.slug)
    
    if (!post) return notFound()

    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3)
    
    const errorOccurred = false

    if (errorOccurred) {
        return (
            <div className="min-h-screen py-24 flex items-center justify-center bg-slate-50">
                <div className="container-custom max-w-xl text-center">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
                        <Calendar className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">Post Temporarily Unavailable</h3>
                    <p className="text-slate-600 mb-8">
                        We&apos;re currently experiencing a database connection timeout. Please try refreshing the page in a few moments.
                    </p>
                    <Link href="/blogs" className="btn-primary py-2 px-6 rounded-full inline-flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
                    </Link>
                </div>
            </div>
        )
    }

    if (!post) return notFound()

    // Render markdown content
    const renderContent = (content: string) => {
        return (
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 border-l-4 border-primary pl-4" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3" {...props} />,
                    p: ({ node, ...props }) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc ml-6 mb-6 space-y-2 text-slate-600" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal ml-6 mb-6 space-y-2 text-slate-600" {...props} />,
                    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-slate-200 pl-4 py-2 italic text-slate-500 my-6 bg-slate-50 rounded-r-lg" {...props} />
                    ),
                    a: ({ node, ...props }) => <a className="text-primary hover:underline font-medium" {...props} />,
                    code: ({ node, className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !match ? (
                            <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                                {children}
                            </code>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        )
    }

    return (
        <>
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
                {post.image && (
                    <Image src={post.image} alt={post.title} fill className="object-cover opacity-20" priority sizes="100vw" />
                )}
                <div className="container-custom text-center relative z-10 max-w-3xl">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">{post.category}</span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-white/70">
                        <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Eye className="w-4 h-4" />{post.views + 1} views</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container-custom max-w-3xl">
                    <Link href="/blogs" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
                    </Link>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                                    <Tag className="w-3 h-3" />{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Article */}
                    <article className="prose prose-slate max-w-none">
                        {renderContent(post.content)}
                    </article>

                    {/* Interactions */}
                    <BlogInteractions
                        blogId={post.id}
                        initialLikes={post.likes}
                        comments={(post.comments || []).map((c: any) => ({
                            id: c.id,
                            content: c.content,
                            userName: c.userName,
                            createdAt: c.createdAt,
                        }))}
                    />

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Related Posts</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {relatedPosts.map(rp => (
                                    <Link key={rp.id} href={`/blogs/${rp.slug}`} className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-md transition-shadow">
                                        <h4 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors text-sm">{rp.title}</h4>
                                        <p className="text-xs text-slate-400 mt-2">{new Date(rp.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
