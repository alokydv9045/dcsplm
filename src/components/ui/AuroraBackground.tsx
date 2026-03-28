'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AuroraBackgroundProps {
    children?: React.ReactNode
    className?: string
    colors?: string[]
    speed?: 'slow' | 'medium' | 'fast'
}

export const AuroraBackground = ({
    children,
    className = '',
    colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'],
    speed = 'medium',
}: AuroraBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const speedMultiplier = speed === 'slow' ? 0.3 : speed === 'fast' ? 1.5 : 1
        let time = 0

        const animate = () => {
            time += 0.001 * speedMultiplier

            // Create gradient
            const gradient = ctx.createLinearGradient(
                Math.sin(time) * canvas.width,
                0,
                canvas.width,
                canvas.height
            )

            colors.forEach((color, index) => {
                gradient.addColorStop(index / (colors.length - 1), color)
            })

            // Fill with animated gradient
            ctx.fillStyle = gradient
            ctx.globalAlpha = 0.3
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Add aurora effect
            for (let i = 0; i < 3; i++) {
                ctx.globalAlpha = 0.1
                ctx.fillStyle = colors[i % colors.length]
                ctx.beginPath()
                ctx.ellipse(
                    canvas.width / 2 + Math.sin(time + i) * 300,
                    canvas.height / 2 + Math.cos(time + i) * 200,
                    300,
                    150,
                    time * 0.5,
                    0,
                    Math.PI * 2
                )
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
        }
    }, [colors, speed])

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    filter: 'blur(60px)',
                }}
            />
            {children}
        </div>
    )
}
