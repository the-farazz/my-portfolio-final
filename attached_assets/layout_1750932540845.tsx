import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Zain | Front-End Developer Portfolio',
  description: 'Muhammad Zain - Professional Front-End Developer specializing in React.js and modern web technologies. View my portfolio of scalable web applications and get in touch for collaboration opportunities.',
  keywords: 'Muhammad Zain, Front-End Developer, React.js, JavaScript, TypeScript, Web Development, Portfolio',
  authors: [{ name: 'Muhammad Zain' }],
  openGraph: {
    title: 'Muhammad Zain | Front-End Developer Portfolio',
    description: 'Professional Front-End Developer specializing in React.js and modern web technologies. Crafting high-performance web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}