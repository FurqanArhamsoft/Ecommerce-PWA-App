'use client'

import { useState, useEffect } from 'react'
import { Search, X, TrendingUp, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const mockProducts = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: '/placeholder.svg?height=100&width=100&text=T-Shirt',
    category: "Men's Clothing"
  },
  {
    id: '2',
    name: 'Elegant Summer Dress',
    price: 79.99,
    image: '/placeholder.svg?height=100&width=100&text=Dress',
    category: "Women's Clothing"
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    price: 89.99,
    image: '/placeholder.svg?height=100&width=100&text=Jacket',
    category: "Unisex"
  },
  {
    id: '4',
    name: 'Luxury Leather Handbag',
    price: 149.99,
    image: '/placeholder.svg?height=100&width=100&text=Handbag',
    category: "Accessories"
  }
]

const trendingSearches = [
  'Summer Collection',
  'Denim Jackets',
  'Designer Bags',
  'Cotton T-Shirts',
  'Casual Wear'
]

const recentSearches = [
  'Black T-Shirt',
  'Summer Dress',
  'Sneakers'
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(mockProducts)
    }
  }, [searchTerm])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-white h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
          <div className="container-custom">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors text-lg"
                  autoFocus
                />
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="container-custom py-8">
          {!searchTerm ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Trending Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Trending Searches</h3>
                </div>
                <div className="space-y-2">
                  {trendingSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(term)}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-gray-700 hover:text-amber-600"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Recent Searches</h3>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(term)}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-gray-700 hover:text-amber-600"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {filteredProducts.length > 0 
                  ? `Found ${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} for "${searchTerm}"`
                  : `No results found for "${searchTerm}"`
                }
              </h3>

              {filteredProducts.length > 0 ? (
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      onClick={onClose}
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{product.category}</p>
                        <p className="font-bold text-lg text-gray-900">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg mb-4">
                    No products found matching your search.
                  </p>
                  <p className="text-gray-500">
                    Try different keywords or browse our categories.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}