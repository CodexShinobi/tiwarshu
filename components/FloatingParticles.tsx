'use client'

import { motion } from 'framer-motion'

interface ParticleProps {
  delay: number
  duration: number
}

function Particle({ delay, duration }: ParticleProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-secondary/30"
      initial={{ y: 0, x: 0, opacity: 0.6 }}
      animate={{
        y: [-20, 20, -20],
        x: [0, 10, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        width: Math.random() * 6 + 2,
        height: Math.random() * 6 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  )
}

export default function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: (i * 0.1) % 2,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle key={particle.id} delay={particle.delay} duration={particle.duration} />
      ))}
    </div>
  )
}
