import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import AnimatedSection from './components/AnimatedSection'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Truck, Shield, RotateCcw, Headphones, Star, Sparkles } from 'lucide-react'
import Hero from './hero/page'
import mensCollection from "./assets/images/men-fashion.jpg";
import femaleCollection from "./assets/images/female-fashion.jpg";
import accessories from "./assets/images/accessories.jpg";
import mensCloth from "./assets/images/men-style.jpg";
import femaleCloth from "./assets/images/female-clothes.jpg";
import jackets from "./assets/images/jacket.jpg";
import luxeryHangbag from "./assets/images/lather-bag-luxery.jpg";
import luxerySunglass from "./assets/images/glasses-luxery.jpg";
import luxeryShoes from "./assets/images/shoes-luxery.jpg";

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: mensCloth,
    category: "Men's Clothing",
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Elegant Summer Dress',
    price: 79.99,
    image: femaleCloth,
    category: "Women's Clothing",
    colors: ['Red', 'Blue', 'Green'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    price: 89.99,
    image: jackets,
    category: "Unisex",
    colors: ['Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'Luxury Leather Handbag',
    price: 149.99,
    image: luxeryHangbag,
    category: "Accessories",
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size']
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 199.99,
    image: luxerySunglass,
    category: "Accessories",
    colors: ['Black', 'Brown', 'Gold'],
    sizes: ['One Size']
  },
  {
    id: '6',
    name: 'Casual Sneakers',
    price: 129.99,
    image: luxeryShoes,
    category: "Shoes",
    colors: ['White', 'Black', 'Gray'],
    sizes: ['7', '8', '9', '10', '11']
  }
]

const collections = [
  {
    title: "Men's Collection",
    description: "Sophisticated styles for the modern gentleman",
    image: mensCollection,
    link: '/products?category=men',
    badge: 'New Arrivals'
  },
  {
    title: "Women's Collection",
    description: "Elegant designs for the contemporary woman",
    image: femaleCollection,
    link: '/products?category=women',
    badge: 'Trending'
  },
  {
    title: "Accessories",
    description: "Perfect finishing touches for any outfit",
    image: accessories,
    link: '/products?category=accessories',
    badge: 'Limited Edition'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Why Choose <span className="gradient-text">StyleHub</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We're committed to delivering exceptional quality and service in every aspect of your shopping experience
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="feature-card text-center group min-h-[300px]">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Truck className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Free Shipping</h3>
                <p className="text-gray-600 leading-relaxed">Complimentary shipping on all orders over $100 worldwide with express delivery options</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="feature-card text-center group min-h-[300px]">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Shield className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Secure Payment</h3>
                <p className="text-gray-600 leading-relaxed">Your transactions are protected with bank-level security and encrypted payment processing</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="feature-card text-center group min-h-[340px]">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <RotateCcw className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Easy Returns</h3>
                <p className="text-gray-600 leading-relaxed">Hassle-free 30-day return policy for your peace of mind with free return shipping</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={400}>
              <div className="feature-card text-center group min-h-[300px]">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Headphones className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">Our dedicated team is always here to assist you with personalized customer service</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Shop by <span className="gradient-text">Collection</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated collections designed for every style and occasion
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {collections.map((collection, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
                <Link href={collection.link} className="group block">
                  <div className="product-card overflow-hidden">
                    <div className="relative h-96 lg:h-[500px] overflow-hidden">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="image-overlay"></div>

                      {/* Badge */}
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {collection.badge}
                      </div>

                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-display text-3xl font-bold mb-3">
                          {collection.title}
                        </h3>
                        <p className="text-amber-100 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {collection.description}
                        </p>
                        <span className="inline-flex items-center text-amber-300 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          Explore Collection <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked selection of premium items that define contemporary style
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredProducts.map((product, index) => (
                <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                  <ProductCard
                  product={{
                    ...product,
                    image: typeof product.image === "string" ? product.image : product.image.src
                  }}
                  />
                </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" className="text-center">
            <Link href="/products" className="btn-dark text-lg">
              <Star className="mr-3 w-5 h-5" />
              VIEW ALL PRODUCTS
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/20 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-5xl lg:text-6xl font-bold mb-3 gradient-text">50K+</div>
              <p className="text-amber-100 text-lg">Happy Customers</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-5xl lg:text-6xl font-bold mb-3 gradient-text">1000+</div>
              <p className="text-amber-100 text-lg">Premium Products</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-5xl lg:text-6xl font-bold mb-3 gradient-text">50+</div>
              <p className="text-amber-100 text-lg">Countries Served</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="text-5xl lg:text-6xl font-bold mb-3 gradient-text">5★</div>
              <p className="text-amber-100 text-lg">Average Rating</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-amber-100">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Stay in <span className="gradient-text">Style</span>
              </h2>
              <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter and be the first to know about new collections,
                exclusive offers, and style inspiration.
              </p>

              <div className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors text-lg"
                  />
                  <button className="btn-primary text-lg whitespace-nowrap">
                    SUBSCRIBE
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Join 50,000+ fashion enthusiasts. No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}