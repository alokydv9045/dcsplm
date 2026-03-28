'use client'

import React from 'react'

interface GridBackgroundProps {
    children?: React.ReactNode
    className?: string
    gridSize?: number
    lineColor?: string
    glowIntensity?: number
}

export const GridBackground = ({
    children,
    className = '',
    gridSize = 20,
    lineColor = 'rgba(255, 255, 255, 0.1)',
    glowIntensity = 0,
}: GridBackgroundProps) => {
    const gridStyle: React.CSSProperties = {
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        ...(glowIntensity > 0 && {
            boxShadow: `inset 0 0 ${glowIntensity}px rgba(96, 165, 250, 0.3)`,
        }),
    }

    return (
        <div className={`absolute inset-0 ${className}`}>
            <div
                className="absolute inset-0"
                style={gridStyle}
            />
            {/* Fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            {children}
        </div>
    )
}
