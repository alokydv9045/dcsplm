'use client'

import { motion } from 'framer-motion'
import { type LucideIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeatureCardProps {
    index: number
    title: string
    description: string
    icon: LucideIcon
    colorScheme?: 'primary' | 'secondary' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan'
    href?: string
    variant?: 'grid' | 'list'
}

export default function FeatureCard({
    index,
    title,
    description,
    icon: Icon,
    colorScheme = 'primary',
    href,
    variant = 'grid',
}: FeatureCardProps) {
    const colorMap = {
        primary:   { bg: 'bg-primary/10 group-hover:bg-primary', text: 'text-primary group-hover:text-white', border: 'border-primary/20', num: 'text-primary/[0.04]' },
        secondary: { bg: 'bg-secondary/10 group-hover:bg-secondary', text: 'text-secondary group-hover:text-white', border: 'border-secondary/20', num: 'text-secondary/[0.04]' },
        emerald:   { bg: 'bg-emerald-500/10 group-hover:bg-emerald-500', text: 'text-emerald-500 group-hover:text-white', border: 'border-emerald-500/20', num: 'text-emerald-500/[0.04]' },
        amber:     { bg: 'bg-amber-500/10 group-hover:bg-amber-500', text: 'text-amber-500 group-hover:text-white', border: 'border-amber-500/20', num: 'text-amber-500/[0.04]' },
        rose:      { bg: 'bg-rose-500/10 group-hover:bg-rose-500', text: 'text-rose-500 group-hover:text-white', border: 'border-rose-500/20', num: 'text-rose-500/[0.04]' },
        violet:    { bg: 'bg-violet-500/10 group-hover:bg-violet-500', text: 'text-violet-500 group-hover:text-white', border: 'border-violet-500/20', num: 'text-violet-500/[0.04]' },
        cyan:      { bg: 'bg-cyan-500/10 group-hover:bg-cyan-500', text: 'text-cyan-500 group-hover:text-white', border: 'border-cyan-500/20', num: 'text-cyan-500/[0.04]' },
    }

    const c = colorMap[colorScheme]

    const content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative h-full bg-gray-50 rounded-2xl border border-gray-100 ${c.border} transition-all duration-300 group hover:-translate-y-1 overflow-hidden ${
                variant === 'list' ? 'p-5 sm:p-6 flex gap-5 items-start' : 'p-7 sm:p-8 hover:bg-white hover:shadow-xl'
            }`}
        >
            {/* Big background number */}
            <span className={`absolute -top-4 -right-2 text-[100px] font-black leading-none select-none ${c.num}`}>
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Icon */}
            <div className={`relative z-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${c.bg} ${
                variant === 'list' ? 'w-12 h-12' : 'w-14 h-14 mb-5'
            }`}>
                <Icon className={`transition-colors duration-300 ${variant === 'list' ? 'w-6 h-6' : 'w-7 h-7'} ${c.text}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2 truncate-1-line">{title}</h4>
                <p className={`text-gray-500 text-sm leading-relaxed ${variant === 'list' ? 'line-clamp-2 mb-2' : 'mb-4'}`}>
                    {description}
                </p>
                
                {href && (
                    <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${c.text.split(' ')[0]}`}>
                        Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                )}
            </div>
        </motion.div>
    )

    if (href) {
        return <Link href={href} className="block h-full">{content}</Link>
    }

    return content
}
