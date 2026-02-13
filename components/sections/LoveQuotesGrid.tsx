'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Confetti from 'react-confetti'
import { useState } from 'react'
import GlassCard from '../GlassCard'

const quotes = [
  {
    text: 'You are my greatest adventure',
    author: 'Every day with you',
    icon: '🌟',
  },
  {
    text: 'In your eyes, I found my home',
    author: 'My heart knows',
    icon: '🏠',
  },
  {
    text: 'Love is not finding someone to live with. It\'s finding someone you can\'t imagine living without',
    author: 'The truth about us',
    icon: '💕',
  },
  {
    text: 'You make my soul dance',
    author: 'When you\'re near',
    icon: '💃',
  },
  {
    text: 'Forever isn\'t long enough with you',
    author: 'My forever promise',
    icon: '⏳',
  },
  {
    text: 'You are my favorite person, my soulmate, my love',
    author: 'Always and forever',
    icon: '👑',
  },
  {
    text: 'In a room full of people, my eyes only find you',
    author: 'Every single time',
    icon: '👀',
  },
  {
    text: 'You\'re the answer to all my wishes',
    author: 'My greatest blessing',
    icon: '✨',
  },
]

interface QuoteCardProps {
  quote: (typeof quotes)[0]
  index: number
}

function QuoteCard({ quote, index }: QuoteCardProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const handleHover = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative"
    >
      <GlassCard
        animated
        onClick={handleHover}
        className="h-full cursor-pointer group hover:shadow-2xl"
      >
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={100}
            recycle={false}
          />
        )}

        <div className="flex flex-col items-center justify-center text-center h-full gap-4 p-4">
          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {quote.icon}
          </div>
          <p className="font-playfair text-xl text-primary leading-relaxed">
            "{quote.text}"
          </p>
          <p className="text-sm text-foreground/60 italic font-lora">
            — {quote.author}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function LoveQuotesGrid() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-background via-secondary/5 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl text-primary mb-4">
            Words From My Heart
          </h2>
          <p className="text-lg text-foreground/70">
            Click on any heart to celebrate
          </p>
        </motion.div>

        {/* Grid of quotes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 text-6xl opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        💐
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-6xl opacity-20"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        🌹
      </motion.div>
    </section>
  )
}
