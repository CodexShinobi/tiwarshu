'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import AnimatedButton from '../AnimatedButton'

export default function GrandFinale() {
  const [showLetter, setShowLetter] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  const loveLetter = `My Dearest Sonali,

Words can never fully express the depth of my love for you. But I will try, because you deserve to know exactly how I feel.

From the moment I met you, my life changed forever. You brought color to my world, warmth to my heart, and purpose to my days. Every smile you give me is a reminder of why I believe in love.

You are my greatest blessing, my partner in crime, my safe haven. When I'm with you, everything makes sense. When I'm away from you, I count the moments until I see your beautiful face again.

I promise to love you unconditionally, to support your dreams, to celebrate your victories, and to stand beside you through every challenge. You are not just my love – you are my forever.

With all my heart, forever and always,

Navneet`

  useEffect(() => {
    if (!showLetter) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= loveLetter.length) {
        setDisplayedText(loveLetter.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [showLetter])

  const handleShowLetter = () => {
    setShowLetter(true)
  }

  const handleResponse = (response: string) => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-background to-secondary/20 py-20 px-4 flex items-center justify-center">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
        />
      )}

      <div className="max-w-3xl w-full">
        {!showLetter ? (
          // Before revealing letter
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-playfair text-5xl md:text-6xl text-primary"
              >
                A Final Promise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-foreground/70"
              >
                There's something I want to tell you
              </motion.p>
            </div>

            {/* Envelope animation */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: 'spring', damping: 15, stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-9xl"
              >
                💌
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              I've written something just for you. Something I've been wanting to express 
              for a long time. Are you ready to read my heart?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <AnimatedButton
                variant="primary"
                size="lg"
                onClick={handleShowLetter}
              >
                Read My Love Letter ❤️
              </AnimatedButton>
            </motion.div>
          </motion.div>
        ) : (
          // After clicking - show letter
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Letter content */}
            <div className="backdrop-blur-md bg-white/95 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8 pb-8 border-b border-primary/20">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-playfair text-4xl text-primary"
                >
                  A Love Letter
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-lora text-lg text-foreground/90 whitespace-pre-wrap leading-relaxed"
              >
                {displayedText}
                {displayedText.length < loveLetter.length && (
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-1 h-6 bg-primary ml-1"
                  />
                )}
              </motion.p>
            </div>

            {/* Response section */}
            {displayedText.length === loveLetter.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center"
              >
                <h4 className="font-playfair text-3xl text-primary">
                  Will you be my forever?
                </h4>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton
                    variant="primary"
                    size="lg"
                    onClick={() => handleResponse('yes')}
                  >
                    Yes, Forever! 💕
                  </AnimatedButton>
                  <AnimatedButton
                    variant="secondary"
                    size="lg"
                    onClick={() => handleResponse('always')}
                  >
                    Always and Beyond! 💫
                  </AnimatedButton>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-sm text-foreground/60 italic"
                >
                  I love you more than words could ever say. You are my everything.
                </motion.p>
              </motion.div>
            )}

            {/* Scroll back button */}
            {displayedText.length === loveLetter.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center"
              >
                <button
                  onClick={() => {
                    setShowLetter(false)
                    setDisplayedText('')
                  }}
                  className="text-sm text-primary/60 hover:text-primary transition-colors"
                >
                  ← Back to the beginning
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom decorations */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 text-3xl"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span>💐</span>
        <span>💕</span>
        <span>💐</span>
      </motion.div>
    </section>
  )
}
