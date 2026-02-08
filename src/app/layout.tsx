import type { Metadata } from 'next'
import { Inter, Merriweather, Geist_Mono } from 'next/font/google'
import './globals.css'
import Breadcrumb from '@/ui/Breadcrumb'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Blockchain Blog',
  description:
    'Learn the most recent technologies for Blockchain, Solidity and Web3 development',
    openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.techsmachine.com',
    siteName: 'techsmachine',
    images: [
      {
        url: '/og-global.png', //internal path to the image in the public folder
        width: 1200,
        height: 630,
        alt: 'techsmachine - Blockchain & Smart Contracts Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-global.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Breadcrumb />
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Blockchain Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
