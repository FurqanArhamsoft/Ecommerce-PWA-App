'use client'

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'

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

interface WishlistState {
  items: Product[]
}

type WishlistAction = 
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; payload: Product[] }

const WishlistContext = createContext<{
  state: WishlistState
  dispatch: React.Dispatch<WishlistAction>
  isInWishlist: (id: string) => boolean
} | null>(null)

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      const exists = state.items.find(item => item.id === action.payload.id)
      if (exists) return state
      
      const newItems = [...state.items, action.payload]
      localStorage.setItem('wishlist', JSON.stringify(newItems))
      return { items: newItems }
    
    case 'REMOVE_FROM_WISHLIST':
      const filteredItems = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem('wishlist', JSON.stringify(filteredItems))
      return { items: filteredItems }
    
    case 'CLEAR_WISHLIST':
      localStorage.removeItem('wishlist')
      return { items: [] }
    
    case 'LOAD_WISHLIST':
      return { items: action.payload }
    
    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] })

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) })
    }
  }, [])

  const isInWishlist = (id: string) => {
    return state.items.some(item => item.id === id)
  }

  return (
    <WishlistContext.Provider value={{ state, dispatch, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}