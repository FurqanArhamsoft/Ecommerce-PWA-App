import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, ShoppingCart, ArrowLeft, Heart, Share2, Truck, Shield, RotateCcw, Search, User } from "lucide-react"
import Header from "../../components/Header"

const products = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 128,
    images: [
      "/premium-cotton-t-shirt-front.png",
      "/premium-cotton-t-shirt-back.png",
      "/premium-cotton-t-shirt-detail.png",
    ],
    category: "MEN'S CLOTHING",
    inStock: true,
    stockCount: 15,
    description:
      "A premium quality cotton t-shirt for everyday comfort and style. Crafted from 100% premium cotton, this t-shirt offers unparalleled comfort and style.",
    features: [
      "100% Premium Cotton",
      "Pre-shrunk fabric",
      "Reinforced seams",
      "Tagless design for comfort",
      "Machine washable",
      "Available in multiple colors",
    ],
    specifications: {
      Material: "100% Cotton",
      Fit: "Regular",
      Care: "Machine wash cold",
      Origin: "Made in USA",
      Sizes: "S - XL",
      Weight: "180 GSM",
    },
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Elegant Summer Dress",
    price: 79.99,
    rating: 4.8,
    reviews: 89,
    images: ["/elegant-summer-dress-front.png", "/elegant-summer-dress-back.png", "/elegant-summer-dress-detail.png"],
    category: "WOMEN'S CLOTHING",
    inStock: true,
    stockCount: 8,
    description:
      "Stay cool and stylish with this elegant summer dress. This elegant summer dress combines comfort with sophistication.",
    features: [
      "Flowing A-line silhouette",
      "Breathable fabric blend",
      "Adjustable straps",
      "Midi length",
      "Side pockets",
      "Wrinkle resistant",
    ],
    specifications: {
      Material: "Cotton-Poly blend",
      Length: "Midi",
      Care: "Hand wash recommended",
      Lining: "Fully lined",
      Sizes: "XS - L",
      Season: "Spring/Summer",
    },
    colors: ["Red", "Blue", "Green"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "3",
    name: "Classic Denim Jacket",
    price: 89.99,
    rating: 4.3,
    reviews: 156,
    images: ["/classic-denim-jacket.png", "/classic-denim-jacket-back.png", "/classic-denim-jacket-detail.png"],
    category: "MEN'S CLOTHING",
    inStock: true,
    stockCount: 12,
    description: "A timeless denim jacket that pairs well with any outfit. Classic styling with modern comfort.",
    features: [
      "Premium denim fabric",
      "Classic button closure",
      "Multiple pockets",
      "Adjustable cuffs",
      "Vintage wash finish",
      "Durable construction",
    ],
    specifications: {
      Material: "100% Cotton Denim",
      Fit: "Regular",
      Care: "Machine wash cold",
      Origin: "Made in USA",
      Sizes: "S - XXL",
      Weight: "14 oz denim",
    },
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "4",
    name: "Luxury Leather Handbag",
    price: 149.99,
    rating: 4.6,
    reviews: 203,
    images: ["/luxury-leather-handbag-front.png", "/placeholder-r6ltm.png", "/placeholder-407ti.png"],
    category: "ACCESSORIES",
    inStock: false,
    stockCount: 0,
    description:
      "A luxury leather handbag for a sophisticated look. Crafted from genuine leather with attention to detail.",
    features: [
      "Genuine leather construction",
      "Multiple compartments",
      "Adjustable strap",
      "Gold-tone hardware",
      "Dust bag included",
      "Handcrafted details",
    ],
    specifications: {
      Material: "Genuine Leather",
      Dimensions: '12" x 8" x 4"',
      Care: "Leather conditioner recommended",
      Hardware: "Gold-tone",
      Lining: "Fabric lined",
      Origin: "Made in Italy",
    },
    colors: ["Brown", "Black", "Tan"],
    sizes: ["One Size"],
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 199.99,
    rating: 4.2,
    reviews: 94,
    images: ["/designer-sunglasses-front.png", "/designer-sunglasses.png", "/designer-sunglasses.png"],
    category: "ACCESSORIES",
    inStock: false,
    stockCount: 0,
    description:
      "Protect your eyes in style with these designer sunglasses. Premium UV protection with luxury styling.",
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Lightweight frame",
      "Scratch resistant",
      "Case included",
      "Designer styling",
    ],
    specifications: {
      "Lens Material": "Polarized",
      "Frame Material": "Acetate",
      "UV Protection": "100%",
      "Lens Width": "55mm",
      "Bridge Width": "18mm",
      "Temple Length": "140mm",
    },
    colors: ["Black", "Brown", "Gold"],
    sizes: ["One Size"],
  },
  {
    id: "6",
    name: "Casual Sneakers",
    price: 129.99,
    rating: 4.6,
    reviews: 203,
    images: ["/casual-sneakers.png", "/casual-sneakers.png", "/casual-sneakers.png"],
    category: "SHOES",
    inStock: true,
    stockCount: 25,
    description: "Comfortable and versatile sneakers for everyday wear. Perfect blend of style and comfort.",
    features: [
      "Cushioned sole",
      "Breathable upper",
      "Durable construction",
      "Versatile styling",
      "All-day comfort",
      "Easy to clean",
    ],
    specifications: {
      "Upper Material": "Canvas/Synthetic",
      "Sole Material": "Rubber",
      Closure: "Lace-up",
      "Heel Height": "1 inch",
      Width: "Medium",
      Care: "Spot clean",
    },
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10", "11"],
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="mt-24 p-4 bg-white border-b">
        <div className="container-custom mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <main className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden bg-white cursor-pointer hover:opacity-80 transition-opacity border"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-white p-8 rounded-lg">
            <div>
              <span className="text-xs font-medium text-amber-600 tracking-wide mb-3 block">{product.category}</span>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      SAVE ${(product.originalPrice - product.price).toFixed(0)}
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium">In Stock ({product.stockCount} available)</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {product.colors && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Color:</h4>
                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 border-gray-300 hover:border-amber-500 transition-colors ${color === "Black"
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
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {product.sizes && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Size:</h4>
                    <div className="flex gap-2">
                      {product.sizes.map((size, index) => (
                        <button
                          key={index}
                          className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded transition-colors ${product.inStock
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded hover:border-amber-500 hover:text-amber-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded hover:border-amber-500 hover:text-amber-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {product.inStock && (
                <button className="w-full px-6 py-3 text-base font-medium bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors">
                  Buy Now
                </button>
              )}
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">30-day return policy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">2-year warranty included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{key}</span>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}