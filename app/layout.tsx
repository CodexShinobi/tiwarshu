import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700']
})
const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500']
})

export const metadata: Metadata = {
  title: 'Sonali - My Forever Love',
  description: 'A celebration of our eternal love story',
  generator: 'v0.app',
  openGraph: {
    title: 'Sonali - My Forever Love',
    description: 'A celebration of our eternal love story',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className="font-lora antialiased">{children}</body>
    </html>
  )
}
