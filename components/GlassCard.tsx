'use client'

import React, { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  animated?: boolean
  onClick?: () => void
}

export default function GlassCard({
  children,
  className = '',
  animated = false,
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        backdrop-blur-md bg-white/10 border border-white/20 
        rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
        ${animated ? 'hover:bg-white/15 hover:border-white/30 cursor-pointer' : ''}
        ${animated ? 'hover:-translate-y-1' : ''}
        ${className}
      `}
      style={{
        boxShadow: animated 
          ? '0 8px 32px rgba(139, 29, 29, 0.1)'
          : '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      {children}
    </div>
  )
}
