"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  colors: string[]
  sizes: string[]
}

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart()
  const { dispatch: wishlistDispatch, isInWishlist } = useWishlist()
  const isLiked = isInWishlist(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.sizes[0],
        color: product.colors[0],
      },
    })
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.location.href = `/products/${product.id}`
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isLiked) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id })
    } else {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
    }
  }

  return (
    <div className="product-card group">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={500}
            className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
            priority={false}
            loading="lazy"
          />

          {/* Sale badge */}
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-sm font-bold rounded-full shadow-lg">
              SALE
            </div>
          )}

          {/* Rating badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 text-sm font-semibold rounded-full shadow-lg flex items-center">
            <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
            4.8
          </div>

          {/* Overlay buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <button
                onClick={handleAddToCart}
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Add to Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                onClick={handleWishlist}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                  isLiked ? "bg-red-500 text-white" : "bg-white text-gray-900 hover:bg-red-500 hover:text-white"
                }`}
                title="Add to Wishlist"
              >
                <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
              </button>
              <button
                onClick={handleQuickView}
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Quick View"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-amber-600 mb-2 uppercase tracking-wider font-semibold">{product.category}</p>
          <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center space-x-3 mb-4">
            <span className="font-bold text-2xl text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <span className="bg-red-100 text-red-600 px-2 py-1 text-xs font-bold rounded-full">
                SAVE ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Color options */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 font-medium">Colors:</span>
              <div className="flex space-x-1">
                {product.colors.slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-amber-500 transition-colors cursor-pointer shadow-sm"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-xs text-gray-500 ml-1 font-medium">+{product.colors.length - 4}</span>
                )}
              </div>
            </div>

            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
