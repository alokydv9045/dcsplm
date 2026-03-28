'use client'

import { useEffect, useRef } from 'react'

interface WavesBackgroundProps {
    children?: React.ReactNode
    className?: string
    waveColors?: string[]
    waveSpeed?: number
    waveCount?: number
}

export const WavesBackground = ({
    children,
    className = '',
    waveColors = [
        'rgba(96, 165, 250, 0.2)',
        'rgba(147, 197, 253, 0.15)',
        'rgba(191, 219, 254, 0.1)',
    ],
    waveSpeed = 0.02,
    waveCount = 3,
}: WavesBackgroundProps) => {
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

        const drawWave = (
            yOffset: number,
            amplitude: number,
            frequency: number,
            speed: number,
            color: string
        ) => {
            ctx.beginPath()
            ctx.moveTo(0, canvas.height)

            for (let x = 0; x <= canvas.width; x++) {
                const y =
                    yOffset +
                    Math.sin((x * frequency + time * speed) * 0.01) * amplitude

                if (x === 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }
            }

            ctx.lineTo(canvas.width, canvas.height)
            ctx.lineTo(0, canvas.height)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw multiple waves
            for (let i = 0; i < Math.min(waveCount, waveColors.length); i++) {
                drawWave(
                    canvas.height * 0.3 + i * 50,
                    40 + i * 10,
                    0.3 + i * 0.1,
                    1 + i * 0.3,
                    waveColors[i]
                )
            }

            time += waveSpeed
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
    }, [waveColors, waveSpeed, waveCount])

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
