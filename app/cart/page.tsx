'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-24 h-24 mx-auto mb-8 text-gray-300" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold" data-aos="fade-up">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 transition-colors"
            data-aos="fade-up"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {state.items.map((item, index) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Color: {item.color} | Size: {item.size}
                    </p>
                    <p className="font-bold">${item.price}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4" data-aos="fade-left">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{state.total > 100 ? 'Free' : '$9.99'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    ${(state.total + (state.total > 100 ? 0 : 9.99) + state.total * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mb-4">
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block text-center text-gray-600 hover:text-black transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}