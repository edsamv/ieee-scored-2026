import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  title: 'IEEE SCOReD 2026 | Student Conference on Research and Development',
  description: 'IEEE SCOReD 2026 - The premier IEEE Malaysia student conference platform for students and researchers to present innovations in engineering and technology.',
  keywords: ['IEEE', 'SCOReD', 'conference', 'research', 'development', 'engineering', 'technology', 'Malaysia', 'student'],
  authors: [{ name: 'IEEE Malaysia Section' }],
  openGraph: {
    title: 'IEEE SCOReD 2026 | Student Conference on Research and Development',
    description: 'The premier IEEE Malaysia student conference platform for students and researchers to present innovations in engineering and technology.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
