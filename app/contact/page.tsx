'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Fashion Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      Mon-Fri: 9AM-6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@stylehub.com<br />
                      support@stylehub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">What is your return policy?</h4>
                    <p className="text-gray-600 text-sm">We offer a 30-day return policy for all unworn items with original tags.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">How long does shipping take?</h4>
                    <p className="text-gray-600 text-sm">Standard shipping takes 3-5 business days, express shipping takes 1-2 business days.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Do you ship internationally?</h4>
                    <p className="text-gray-600 text-sm">Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-gray-600">Come see our latest collection in person</p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center" data-aos="fade-up">
            <p className="text-gray-600">Interactive Map Would Go Here</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}