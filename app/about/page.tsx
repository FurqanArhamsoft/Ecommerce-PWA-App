import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { Users, Award, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">About StyleHub</h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We're passionate about creating premium clothing that empowers individuals to express their unique style with confidence and authenticity.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, StyleHub began as a vision to bridge the gap between high-quality craftsmanship and accessible fashion. Our founders, passionate about sustainable fashion and timeless design, set out to create a brand that would redefine what it means to dress well.
              </p>
              <p className="text-gray-600 mb-4">
                From our humble beginnings in a small studio, we've grown into a global brand that serves customers in over 50 countries. Every piece in our collection is thoughtfully designed and ethically produced, ensuring that style never comes at the expense of quality or conscience.
              </p>
              <p className="text-gray-600">
                Today, StyleHub continues to push boundaries in fashion, combining innovative design with sustainable practices to create clothing that not only looks good but feels good to wear.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Story+Image"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every piece is crafted with attention to detail and built to last.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical production and sustainable practices that protect our planet.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in building a community of style-conscious individuals who support each other.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">
                We strive to make a positive impact on communities around the world through our business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind StyleHub who make it all possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="/placeholder.svg?height=300&width=300&text=CEO+Portrait"
                alt="Sarah Johnson"
                width={300}
                height={300}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                Former fashion executive with 15 years of experience in sustainable fashion and brand development.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Designer+Portrait"
                alt="Michael Chen"
                width={300}
                height={300}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-2">Creative Director</p>
              <p className="text-sm text-gray-500">
                Award-winning designer who brings innovative concepts to life while maintaining timeless appeal.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Operations+Portrait"
                alt="Emily Rodriguez"
                width={300}
                height={300}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-gray-600 mb-2">Head of Operations</p>
              <p className="text-sm text-gray-500">
                Operations expert focused on ethical sourcing and sustainable supply chain management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a community that values quality, sustainability, and authentic style. Discover what makes StyleHub different.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Shop Our Collection
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
                Follow Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}