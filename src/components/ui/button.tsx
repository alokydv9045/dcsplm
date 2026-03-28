'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary'
    size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
        const variants: Record<string, string> = {
            default: 'bg-primary text-white hover:bg-primary-hover shadow-sm',
            outline: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 shadow-sm',
            ghost: 'hover:bg-slate-100 text-slate-700',
            destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
            secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-sm',
        }

        const sizes: Record<string, string> = {
            default: 'h-10 px-4 py-2',
            sm: 'h-8 px-3 text-sm',
            lg: 'h-12 px-6 text-lg',
            icon: 'h-10 w-10',
        }

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
