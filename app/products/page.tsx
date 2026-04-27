"use client"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Search } from "lucide-react"
import product1 from "../assets/images/men-fashion.jpg";
import product2 from "../assets/images/men-style.jpg";
import product3 from "../assets/images/female-clothes.jpg";
import product4 from "../assets/images/female-fashion.jpg";
import product5 from "../assets/images/jacket.jpg";
import product6 from "../assets/images/glasses-black.jpg";
import product7 from "../assets/images/glasses-luxery.jpg";
import product8 from "../assets/images/shoes-brown.jpg";
import product9 from "../assets/images/shoes-luxery.jpg";
import product10 from "../assets/images/lather-bag-luxery.jpg";
import Header from "../components/Header";


const allProducts = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 128,
    image: product1,
    category: "Men's Clothing",
    inStock: true,
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "A premium quality cotton t-shirt for everyday comfort and style.",
  },
  {
    id: "2",
    name: "Elegant Summer Dress",
    price: 79.99,
    rating: 4.8,
    reviews: 89,
    image: product3 ,
    category: "Women's Clothing",
    inStock: true,
    colors: ["Red", "Blue", "Green"],
    sizes: ["XS", "S", "M", "L"],
    description: "Stay cool and stylish with this elegant summer dress.",
  },
  {
    id: "3",
    name: "Classic Denim Jacket",
    price: 89.99,
    rating: 4.3,
    reviews: 156,
    image: product2,
    category: "Men's Clothing",
    inStock: true,
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A timeless denim jacket that pairs well with any outfit.",
  },
  {
    id: "4",
    name: "Luxury Leather Handbag",
    price: 149.99,
    rating: 4.6,
    reviews: 203,
    image: product10,
    category: "Accessories",
    inStock: false,
    colors: ["Brown", "Black", "Tan"],
    sizes: ["One Size"],
    description: "A luxury leather handbag for a sophisticated look.",
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 199.99,
    rating: 4.2,
    reviews: 94,
    image: product6,
    category: "Accessories",
    inStock: false,
    colors: ["Black", "Brown", "Gold"],
    sizes: ["One Size"],
    description: "Protect your eyes in style with these designer sunglasses.",
  },
  {
    id: "6",
    name: "Casual Sneakers",
    price: 129.99,
    rating: 4.6,
    reviews: 203,
    image: product10,
    category: "Shoes",
    inStock: true,
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Comfortable and versatile sneakers for everyday wear.",
  },
  {
    id: "7",
    name: "Business Shirt",
    price: 59.99,
    rating: 4.7,
    reviews: 167,
    image: product2,
    category: "Men's Clothing",
    inStock: true,
    colors: ["White", "Blue", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    description: "A crisp business shirt perfect for office or formal events.",
  },
  {
    id: "8",
    name: "Floral Blouse",
    price: 45.99,
    rating: 4.6,
    reviews: 203,
    image: product4,
    category: "Women's Clothing",
    inStock: true,
    colors: ["Pink", "White", "Yellow"],
    sizes: ["XS", "S", "M", "L"],
    description: "A light and airy floral blouse for a fresh look.",
  },
  {
    id: "9",
    name: "Leather Boots",
    price: 179.99,
    rating: 4.6,
    reviews: 203,
    image: product8,
    category: "Shoes",
    colors: ["Brown", "Black"],
    inStock: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Durable leather boots for all-weather adventures.",
  },
  {
    id: "10",
    name: "Gold Watch",
    price: 299.99,
    rating: 4.7,
    reviews: 167,
    image: product7,
    category: "Accessories",
    inStock: false,
    colors: ["Gold", "Silver"],
    sizes: ["One Size"],
    description: "A luxurious gold watch to elevate your style.",
  },
  {
    id: "11",
    name: "Casual Jeans",
    price: 69.99,
    rating: 4.6,
    reviews: 203,
    image: product5,
    category: "Men's Clothing",
    inStock: true,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Classic casual jeans for a relaxed and comfortable fit.",
  },
  {
    id: "12",
    name: "Evening Gown",
    price: 199.99,
    rating: 4.7,
    reviews: 167,
    image: product9,
    category: "Women's Clothing",
    inStock: true,
    colors: ["Black", "Red", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A stunning evening gown for special occasions.",
  },
]

const categories = ["All", "Men's Clothing", "Women's Clothing", "Accessories", "Shoes"]

function ProductCard({ product }: { product: (typeof allProducts)[0] }) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={typeof product.image === "string" ? product.image : (product.image?.src ?? "/placeholder.svg")}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SAVE ${((product.originalPrice || 0) - product.price).toFixed(0)}
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded">Out of Stock</span>
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>

          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <button className="flex-1 bg-white text-black py-2 px-4 rounded text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <button className="bg-white text-black p-2 rounded hover:bg-gray-100 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="bg-white text-black p-2 rounded hover:bg-gray-100 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <span className="text-xs font-medium text-amber-600 tracking-wide mb-2 block">{product.category}</span>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 text-gray-900 hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-600 mr-2">Colors:</span>
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border border-gray-300 ${
                color === "Black"
                  ? "bg-black"
                  : color === "White"
                    ? "bg-white"
                    : color === "Navy"
                      ? "bg-blue-900"
                      : color === "Red"
                        ? "bg-red-500"
                        : color === "Blue"
                          ? "bg-blue-500"
                          : color === "Green"
                            ? "bg-green-500"
                            : color === "Brown"
                              ? "bg-amber-800"
                              : color === "Tan"
                                ? "bg-amber-200"
                                : color === "Gold"
                                  ? "bg-yellow-400"
                                  : color === "Gray"
                                    ? "bg-gray-500"
                                    : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container-custom mx-auto mt-20 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            All <span className="text-amber-500">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium items that define contemporary style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}
