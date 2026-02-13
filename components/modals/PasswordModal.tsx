'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PasswordModalProps {
  isOpen: boolean
  onSubmit: (password: string) => boolean
}

export default function PasswordModal({ isOpen, onSubmit }: PasswordModalProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate a slight delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    if (onSubmit(password)) {
      setPassword('Manshu')
    } else {
      setError('Incorrect password. Try again.')
      setPassword('')
    }
    setIsLoading(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="font-playfair text-4xl text-primary mb-2">
                A Message
              </h2>
              <p className="text-foreground/70">
                This page is special. To enter, I need you to know our secret.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
                  Enter the password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*****"
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  autoFocus
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-playfair font-bold py-3 rounded-lg transition-all duration-200"
              >
                {isLoading ? 'Unlocking...' : 'Unlock My Heart'}
              </button>
            </form>

            {/* Hint */}
            <p className="text-center text-xs text-foreground/50 mt-6">
              Hint: Think of something special between us
            </p>

            {/* Decorative element */}
            <div className="flex justify-center gap-2 mt-6 text-2xl opacity-50">
              <span>💕</span>
              <span>✨</span>
              <span>💕</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
