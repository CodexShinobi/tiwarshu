'use client'

import { useEffect, useState } from 'react'

export function usePasswordProtection() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    // Check if already authenticated in this session
    const authenticated = typeof window !== 'undefined' && localStorage.getItem('sonali_authenticated') === 'true'
    
    if (authenticated) {
      setIsAuthenticated(true)
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }, [])

  const handlePasswordSubmit = (password: string) => {
    // The password is stored in environment variable NEXT_PUBLIC_LOVE_PASSWORD
    const correctPassword = process.env.NEXT_PUBLIC_LOVE_PASSWORD || 'sonali'
    
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setShowModal(false)
      localStorage.setItem('sonali_authenticated', 'true')
      return true
    }
    return false
  }

  return {
    isAuthenticated,
    showModal,
    handlePasswordSubmit,
  }
}
