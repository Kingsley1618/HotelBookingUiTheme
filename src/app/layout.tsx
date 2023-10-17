import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thrillers Travel simple Clone',
  description: 'Inspiration: creating a clone of your personal website. just the UI',
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
