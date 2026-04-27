'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
import { Heart, ShoppingBag, Trash2 } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'

export default function WishlistPage() {
  const { state, dispatch } = useWishlist()

  const clearWishlist = () => {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch({ type: 'CLEAR_WISHLIST' })
    }
  }

  const removeFromWishlist = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />
        
        {/* Page Header */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 text-white py-24 mt-20">
          <div className="container-custom text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
              My <span className="gradient-text">Wishlist</span>
            </h1>
            <p className="text-amber-100 text-xl max-w-3xl mx-auto fade-in-up">
              Save your favorite items for later
            </p>
          </div>
        </section>

        <div className="container-custom py-16 text-center">
          <Heart className="w-24 h-24 mx-auto mb-8 text-gray-300" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Discover amazing products and add them to your wishlist to save for later.
          </p>
          <Link href="/products" className="btn-primary">
            <ShoppingBag className="mr-2 w-5 h-5" />
            Start Shopping
          </Link>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 text-white py-24 mt-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
            My <span className="gradient-text">Wishlist</span>
          </h1>
          <p className="text-amber-100 text-xl max-w-3xl mx-auto fade-in-up">
            {state.items.length} item{state.items.length !== 1 ? 's' : ''} saved for later
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Wishlist Actions */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Saved Items ({state.items.length})
              </h2>
              <p className="text-gray-600">Items you've saved for later consideration</p>
            </div>
            <button
              onClick={clearWishlist}
              className="flex items-center text-red-500 hover:text-red-700 transition-colors font-semibold"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </button>
          </div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {state.items.map((product, index) => (
              <div key={product.id} className="relative group">
                <ProductCard product={product} />
                
                {/* Remove button overlay */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 shadow-lg z-10"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-16">
            <Link href="/products" className="btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}