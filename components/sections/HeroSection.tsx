'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from '../AnimatedText'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10 flex items-center justify-center py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <AnimatedText
              text="Sonali"
              variant="heading"
              className="text-6xl md:text-7xl"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-playfair text-3xl text-primary mb-4">
                My Forever Love
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-lora">
                In a world full of temporary things, you are my forever. Every moment with you is a 
                beautiful reminder of what true love means. This page is a celebration of us, our story, 
                and the infinite future we will create together.
              </p>
            </motion.div>

            {/* Decorative heart */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-5xl mt-4"
            >
              ❤️
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              {/* Glow border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary/50 rounded-3xl p-1 -z-10 animate-pulse-glow" />
              
              <Image
                src="C:\Users\NAVNEET PRAKASH\Downloads\valentine-s-day-website (2)\WhatsApp Image 2026-02-13 at 7.11.44 PM.jpeg"
                alt="Sonali"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-3xl"
                priority
              />

              {/* Corner decorations */}
              <motion.div
                className="absolute top-4 right-4 text-4xl"
                animate={{
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 text-4xl"
                animate={{
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                💫
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
