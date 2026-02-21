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
  title: {
    default: 'techsmachine - Blockchain, Solidity & Web3 Development Blog',
    template: '%s | techsmachine',
  },
  description:
    'Tutorials and guides on blockchain development, Solidity smart contracts, Foundry tools, EVM networks, and Web3 dApp building. Written by developers, for developers.',
  keywords: [
    'blockchain',
    'solidity',
    'smart contracts',
    'ethereum',
    'web3',
    'foundry',
    'evm',
    'dapp development',
    'forge',
    'cast',
    'anvil',
    'smart contract accounts',
    'account abstraction',
  ],
  authors: [{ name: 'Javier Rodriguez' }],
  creator: 'Javier Rodriguez',
  metadataBase: new URL('https://blog.techsmachine.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.techsmachine.com',
    siteName: 'techsmachine',
    title: 'techsmachine - Blockchain, Solidity & Web3 Development Blog',
    description:
      'Tutorials and guides on blockchain development, Solidity smart contracts, Foundry tools, EVM networks, and Web3 dApp building.',
    images: [
      {
        url: '/og-global.png',
        width: 1200,
        height: 630,
        alt: 'techsmachine - Blockchain & Smart Contracts Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'techsmachine - Blockchain, Solidity & Web3 Development Blog',
    description:
      'Tutorials and guides on blockchain development, Solidity smart contracts, Foundry tools, and Web3.',
    images: ['/og-global.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
