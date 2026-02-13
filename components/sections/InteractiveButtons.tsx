'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from '../AnimatedButton'

const ROMANTIC_MUSIC = 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=='

export default function InteractiveButtons() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [heartIdCounter, setHeartIdCounter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const newHeart = {
      id: heartIdCounter,
      x,
      y,
    }
    setHearts((prev) => [...prev, newHeart])
    setHeartIdCounter((prev) => prev + 1)

    // Remove heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
    }, 1500)
  }

  const handlePlayMusic = () => {
    if (isPlaying) {
      // In a real scenario, you would pause the audio
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      // Play a silent audio as placeholder
      const audio = new Audio(ROMANTIC_MUSIC)
      audio.play().catch(() => {
        // Audio might not play due to browser restrictions
        console.log('Audio playback not available')
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-secondary/5 to-primary/5 py-20 px-4">
      {/* Flying hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ x: heart.x, y: heart.y, opacity: 1, scale: 1 }}
          animate={{
            x: heart.x + (Math.random() - 0.5) * 200,
            y: heart.y - 300,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="fixed pointer-events-none text-4xl"
        >
          💕
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl text-primary mb-4">
            Special Moments
          </h2>
          <p className="text-lg text-foreground/70">
            Click to celebrate our love
          </p>
        </motion.div>

        {/* Interactive buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {/* Send Virtual Kiss */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <AnimatedButton
              variant="primary"
              size="lg"
              onClick={handleHeartClick}
              className="w-full"
            >
              Send Virtual Kiss 💋
            </AnimatedButton>
            <p className="text-sm text-foreground/60 text-center">
              Spread the love and watch hearts fly
            </p>
          </motion.div>

          {/* Heartbeat Music */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <AnimatedButton
              variant="secondary"
              size="lg"
              onClick={handlePlayMusic}
              className="w-full"
            >
              {isPlaying ? 'Stop Heartbeat 🎵' : 'Hear My Heartbeat 💓'}
            </AnimatedButton>
            <p className="text-sm text-foreground/60 text-center">
              Listen to the rhythm of my love
            </p>
          </motion.div>

          {/* Story Timeline */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <AnimatedButton
              variant="primary"
              size="lg"
              onClick={() => handleHeartClick({ currentTarget: { getBoundingClientRect: () => ({ left: 0, top: 0, width: 0, height: 0 }) } } as any)}
              className="w-full"
            >
              Our Love Story 📖
            </AnimatedButton>
            <p className="text-sm text-foreground/60 text-center">
              Explore our beautiful journey
            </p>
          </motion.div>
        </motion.div>

        {/* Additional section with effects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
            <h3 className="font-playfair text-3xl text-primary mb-4">
              Every Moment Matters
            </h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
              From quiet mornings to endless nights, every second with you is a treasure. 
              You make me believe in forever, and I promise to love you with all my heart, today and always.
            </p>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl"
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
