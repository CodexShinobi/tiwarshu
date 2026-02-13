'use client'

import { useEffect, useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import BeautyCarousel from '@/components/sections/BeautyCarousel'
import LoveQuotesGrid from '@/components/sections/LoveQuotesGrid'
import InteractiveButtons from '@/components/sections/InteractiveButtons'
import GrandFinale from '@/components/sections/GrandFinale'
import PasswordModal from '@/components/modals/PasswordModal'
import { usePasswordProtection } from '@/hooks/usePasswordProtection'

export default function Page() {
  const { isAuthenticated, showModal, handlePasswordSubmit } = usePasswordProtection()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative w-full overflow-x-hidden bg-background">
      {/* Password protection modal */}
      <PasswordModal isOpen={showModal && !isAuthenticated} onSubmit={handlePasswordSubmit} />

      {/* Only show content if authenticated */}
      {isAuthenticated && (
        <>
          <HeroSection />
          <BeautyCarousel />
          <LoveQuotesGrid />
          <InteractiveButtons />
          <GrandFinale />

          {/* Footer */}
          <footer className="bg-primary/5 border-t border-primary/10 py-8 px-4 text-center">
            <p className="text-foreground/60 font-lora">
              Made with infinite love for Sonali
            </p>
            <p className="text-sm text-foreground/40 mt-2">
              Forever begins today
            </p>
          </footer>
        </>
      )}
    </main>
  )
}
