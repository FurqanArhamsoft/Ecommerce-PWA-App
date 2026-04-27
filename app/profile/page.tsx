'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X, Package, Heart, Settings, LogOut } from 'lucide-react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Fashion Street, New York, NY 10001',
    joinDate: 'January 2023',
    avatar: '/placeholder.svg?height=150&width=150&text=Profile+Avatar'
  })

  const [editData, setEditData] = useState(profileData)

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
  }

  const orderHistory = [
    {
      id: '#ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 129.99,
      items: 3
    },
    {
      id: '#ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 89.99,
      items: 2
    },
    {
      id: '#ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 199.99,
      items: 1
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 text-white py-24 mt-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
            My <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-amber-100 text-xl max-w-3xl mx-auto fade-in-up">
            Manage your account settings and view your order history
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <div className="text-center mb-8">
                  <Image
                    src={profileData.avatar || "/placeholder.svg"}
                    alt="Profile Avatar"
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-amber-200"
                  />
                  <h3 className="font-display text-xl font-bold text-gray-900">{profileData.name}</h3>
                  <p className="text-gray-600">{profileData.email}</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'profile' 
                        ? 'bg-amber-100 text-amber-700 font-semibold' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span>Profile Info</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'orders' 
                        ? 'bg-amber-100 text-amber-700 font-semibold' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    <span>Order History</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'wishlist' 
                        ? 'bg-amber-100 text-amber-700 font-semibold' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Wishlist</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'settings' 
                        ? 'bg-amber-100 text-amber-700 font-semibold' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="font-display text-3xl font-bold text-gray-900">Profile Information</h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="btn-primary flex items-center"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </button>
                    ) : (
                      <div className="flex space-x-3">
                        <button
                          onClick={handleSave}
                          className="btn-primary flex items-center"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="btn-outline flex items-center"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editData.name}
                          onChange={(e) => setEditData({...editData, name: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <User className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-900">{profileData.name}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({...editData, email: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Mail className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-900">{profileData.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editData.phone}
                          onChange={(e) => setEditData({...editData, phone: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Phone className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-900">{profileData.phone}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Member Since
                      </label>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{profileData.joinDate}</span>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address
                      </label>
                      {isEditing ? (
                        <textarea
                          value={editData.address}
                          onChange={(e) => setEditData({...editData, address: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        />
                      ) : (
                        <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                          <span className="text-gray-900">{profileData.address}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Order History</h2>
                  
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <h3 className="font-semibold text-lg text-gray-900">{order.id}</h3>
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-gray-600">Order Date: {order.date}</p>
                            <p className="text-gray-600">{order.items} items</p>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <p className="text-2xl font-bold text-gray-900">${order.total}</p>
                            <button className="btn-outline mt-2">View Details</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">My Wishlist</h2>
                  <p className="text-gray-600 text-center py-12">
                    Your wishlist is empty. Start adding items you love!
                  </p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>Email notifications for new products</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>SMS notifications for order updates</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span>Marketing emails and promotions</span>
                        </label>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>Make my profile public</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span>Allow data collection for personalization</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h3>
                      <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}