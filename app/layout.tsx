import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import AOSInit from './components/AOSInit'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'StyleHub - Premium Clothing Brand',
  description: 'Discover the latest fashion trends with our premium clothing collection',
  keywords: 'clothing, fashion, style, premium, trendy',
  manifest: '/manifest.json',
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <WishlistProvider>
          <CartProvider>
            <AOSInit />
            {children}
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  )
}
