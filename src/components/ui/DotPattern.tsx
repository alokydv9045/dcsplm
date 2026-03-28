'use client'

import { useEffect, useRef } from 'react'

interface DotPatternProps {
    children?: React.ReactNode
    className?: string
    dotSize?: number
    dotSpacing?: number
    dotColor?: string
    animate?: boolean
}

export const DotPattern = ({
    children,
    className = '',
    dotSize = 2,
    dotSpacing = 20,
    dotColor = 'rgba(255, 255, 255, 0.2)',
    animate = true,
}: DotPatternProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        let animationFrameId: number
        let time = 0

        const drawDots = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let x = 0; x < canvas.width; x += dotSpacing) {
                for (let y = 0; y < canvas.height; y += dotSpacing) {
                    ctx.fillStyle = dotColor

                    if (animate) {
                        const distance = Math.sqrt(
                            Math.pow(x - canvas.width / 2, 2) +
                            Math.pow(y - canvas.height / 2, 2)
                        )
                        const opacity = 0.2 + Math.sin(time + distance * 0.01) * 0.3
                        ctx.globalAlpha = Math.max(0, Math.min(1, opacity))
                    }

                    ctx.beginPath()
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2)
                    ctx.fill()
                }
            }

            if (animate) {
                time += 0.03
                animationFrameId = requestAnimationFrame(drawDots)
            }
        }

        drawDots()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            drawDots()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            if (animate) cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
        }
    }, [dotSize, dotSpacing, dotColor, animate])

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            {children}
        </div>
    )
}
