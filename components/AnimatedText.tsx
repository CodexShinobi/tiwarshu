'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
  variant?: 'heading' | 'body' | 'accent'
}

export default function AnimatedText({
  text,
  delay = 0,
  duration = 0.5,
  className = '',
  variant = 'body',
}: AnimatedTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const variantClasses = {
    heading: 'font-playfair text-5xl font-bold text-primary',
    body: 'text-lg text-foreground',
    accent: 'font-playfair text-3xl text-secondary',
  }

  return (
    <motion.h1
      className={`${variantClasses[variant]} ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
