'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../GlassCard'

const beautyCards = [
  {
    id: 1,
    title: 'Your Smile',
    description: 'Lights up my world in ways words cannot describe. It\'s the first thing I think of when I wake up.',
    icon: '😊',
  },
  {
    id: 2,
    title: 'Your Kindness',
    description: 'The way you care for others shows me what unconditional love truly means. You inspire me daily.',
    icon: '💝',
  },
  {
    id: 3,
    title: 'Your Strength',
    description: 'You face every challenge with grace and determination. Your resilience is breathtaking.',
    icon: '💪',
  },
  {
    id: 4,
    title: 'Your Laughter',
    description: 'Is the most beautiful melody. Even on hard days, your joy brings me back to life.',
    icon: '✨',
  },
  {
    id: 5,
    title: 'Your Love',
    description: 'Is the greatest gift I\'ve ever received. With you, I\'ve found my home, my peace, my forever.',
    icon: '❤️',
  },
]

export default function BeautyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beautyCards.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beautyCards.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beautyCards.length) % beautyCards.length)
    setAutoPlay(false)
  }

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-secondary/10 to-background py-20 px-4">
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
            Why I Love You
          </h2>
          <p className="text-lg text-foreground/70">
            Just a few reasons among countless more
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Main slide */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <GlassCard className="max-w-2xl w-full">
              <div className="text-center space-y-6">
                <div className="text-7xl mb-4">
                  {beautyCards[currentIndex].icon}
                </div>
                <h3 className="font-playfair text-4xl text-primary">
                  {beautyCards[currentIndex].title}
                </h3>
                <p className="text-xl text-foreground/80 leading-relaxed font-lora">
                  {beautyCards[currentIndex].description}
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="bg-primary/20 hover:bg-primary/40 text-primary rounded-full p-3 transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-primary/20 hover:bg-primary/40 text-primary rounded-full p-3 transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 flex-wrap">
            {beautyCards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8 h-3'
                    : 'bg-primary/30 w-3 h-3 hover:bg-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
