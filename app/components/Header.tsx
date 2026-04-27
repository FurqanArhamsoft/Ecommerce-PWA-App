'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import SearchModal from './SearchModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { state } = useCart()
  const { state: wishlistState } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100'
          : 'bg-transparent'
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className={`font-display text-3xl lg:text-4xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
              <span className="gradient-text">STYLE</span>HUB
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-12">
              {['HOME', 'PRODUCTS', 'ABOUT', 'CONTACT'].map((item) => (
                <Link
                  key={item}
                  href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className={`font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${isScrolled
                      ? 'text-gray-700 hover:text-amber-600'
                      : 'text-white/90 hover:text-amber-300'
                    }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
                  }`}
              >
                <Search className="w-6 h-6" />
              </button>

              <Link href="/profile" className={`w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
                }`}>
                <User className="w-6 h-6" />
              </Link>

              <Link href="/wishlist" className="relative group">
                <Heart className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${isScrolled ? 'text-gray-700 group-hover:text-amber-600' : 'text-white/90 group-hover:text-amber-300'
                  }`} />
                {wishlistState.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {wishlistState.items.length}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative group">
                <ShoppingBag className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${isScrolled ? 'text-gray-700 group-hover:text-amber-600' : 'text-white/90 group-hover:text-amber-300'
                  }`} />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-amber-200 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-6">
                {['HOME', 'PRODUCTS', 'ABOUT', 'CONTACT'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-amber-600 transition-colors font-semibold tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="/profile"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-semibold tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROFILE
                </Link>
                <Link
                  href="/wishlist"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-semibold tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WISHLIST
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}