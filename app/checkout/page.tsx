"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, Truck, Shield, Check } from "lucide-react"
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1) // 1: Info, 2: Payment, 3: Confirmation
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState("")

  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Options
    saveInfo: false,
    sameAsBilling: true,
    shippingMethod: "standard",
  })

  const shippingCost = state.total > 100 ? 0 : 9.99
  const tax = state.total * 0.08
  const finalTotal = state.total + shippingCost + tax

  useEffect(() => {
    if (state.items.length === 0 && !orderComplete) {
      router.push("/cart")
    }
  }, [state.items.length, orderComplete, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const validateStep = (stepNumber: number) => {
    if (stepNumber === 1) {
      const required = ["firstName", "lastName", "email", "address", "city", "state", "zipCode"]
      return required.every((field) => formData[field as keyof typeof formData])
    }
    if (stepNumber === 2) {
      const required = ["cardNumber", "expiryDate", "cvv", "cardName"]
      return required.every((field) => formData[field as keyof typeof formData])
    }
    return true
  }

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    } else {
      alert("Please fill in all required fields")
    }
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const handlePlaceOrder = async () => {
    if (!validateStep(2)) {
      alert("Please fill in all payment information")
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Generate order ID
    const newOrderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    setOrderId(newOrderId)

    // Clear cart
    dispatch({ type: "CLEAR_CART" })

    setIsProcessing(false)
    setOrderComplete(true)
    setStep(3)
  }

  if (state.items.length === 0 && !orderComplete) {
    return null // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container-custom">
          <div className="fade-in-up">
            <Link
              href="/cart"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
            <p className="text-gray-600">Complete your order in just a few steps</p>
          </div>
        </div>
      </section>

      <div className="container-custom pb-16">
        {!orderComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="fade-in-up mb-8">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          step >= stepNumber ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {stepNumber}
                      </div>
                      <span className={`ml-2 font-semibold ${step >= stepNumber ? "text-amber-600" : "text-gray-600"}`}>
                        {stepNumber === 1 ? "Shipping" : stepNumber === 2 ? "Payment" : "Confirmation"}
                      </span>
                      {stepNumber < 3 && (
                        <div className={`w-16 h-1 mx-4 ${step > stepNumber ? "bg-amber-500" : "bg-gray-200"}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <div className="fade-in-up">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <span className="text-gray-700">Save this information for next time</span>
                      </label>
                    </div>

                    <div className="flex justify-end mt-8">
                      <button onClick={handleNextStep} className="btn-primary">
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <div className="fade-in-up">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Payment Information</h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date *</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">CVV *</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name *</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button onClick={handlePreviousStep} className="btn-outline">
                        Back to Shipping
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        disabled={isProcessing}
                        className="btn-primary flex items-center"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="w-4 h-4 mr-2" />
                            Place Order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="fade-in-up">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    {state.items.map((item, index) => (
                      <div
                        key={`${item.id}-${item.size}-${item.color}-${index}`}
                        className="flex items-center space-x-4"
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-600">
                            {item.color} | {item.size} | Qty: {item.quantity}
                          </p>
                          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Secure SSL encryption</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Truck className="w-4 h-4" />
                      <span>Free shipping on orders over $100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Order Confirmation */
          <div className="fade-in-up text-center max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your order has been successfully placed.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-2">Order Details</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Order ID: <span className="font-semibold">{orderId}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Total: <span className="font-semibold">${finalTotal.toFixed(2)}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Email: <span className="font-semibold">{formData.email}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn-primary">
                  Continue Shopping
                </Link>
                <Link href="/profile" className="btn-outline">
                  View Order Status
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}