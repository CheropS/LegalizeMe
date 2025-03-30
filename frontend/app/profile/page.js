"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import {
  User,
  Upload,
  Settings,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Linkedin,
  Shield,
  Bell,
  Camera,
  X,
} from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const { isAuthenticated, user: authUser, checkAuthAndRedirect } = useAuth()
  const [user, setUser] = useState(() => ({
    email: authUser?.email || "",
    fullname: authUser?.fullname || "",
    profileImage: authUser?.profileImage || null,
    bio: authUser?.bio || "Passionate about legal technology and innovation",
    phone: authUser?.phone || "",
    notificationPreference: authUser?.notificationPreference || false,
  }))

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(user)
  const [activeTab, setActiveTab] = useState("contact")
  const [errors, setErrors] = useState({})

  // Check authentication on mount
  useEffect(() => {
    checkAuthAndRedirect()
  }, [checkAuthAndRedirect])

  // Update user data when authUser changes
  useEffect(() => {
    if (authUser) {
      setUser(prev => ({
        ...prev,
        ...authUser,
      }))
    }
  }, [authUser])

  useEffect(() => {
    // Update formData when user changes
    setFormData(user)
  }, [user])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, image: "Image size should be less than 5MB" }))
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }))
        setErrors((prev) => ({ ...prev, image: null }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!formData.fullname) {
      newErrors.fullname = "Full name is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setUser(formData)
    localStorage.setItem("userData", JSON.stringify(formData))
    setIsEditing(false)
    setErrors({})
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return re.test(phone)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-1/3 bg-gray-800/50 p-8 flex flex-col items-center border-r border-gray-700/50">
              <div className="text-center">
                <div className="relative inline-block">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center border-4 border-indigo-500">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  {isEditing && (
                    <label
                      htmlFor="profile-upload"
                      className="absolute bottom-0 right-0 bg-indigo-500 p-2 rounded-full cursor-pointer hover:bg-indigo-600 transition-colors"
                    >
                      <Camera className="w-4 h-4" />
                    </label>
                  )}
                </div>
                <h2 className="text-2xl font-bold mt-4">{user.fullname || "Your Name"}</h2>
                <p className="mt-2 text-gray-400">{user.email || "your.email@example.com"}</p>
                <p className="mt-4 text-sm text-gray-400">{user.bio}</p>
              </div>

              <div className="mt-8 w-full space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>{user.email || "Not set"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>{user.phone || "Not set"}</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Profile Settings</h1>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex border-b border-gray-700">
                  <button
                    className={`py-2 px-4 ${
                      activeTab === "contact"
                        ? "border-b-2 border-indigo-500 text-indigo-500"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    Contact Info
                  </button>
                  <button
                    className={`py-2 px-4 ${
                      activeTab === "settings"
                        ? "border-b-2 border-indigo-500 text-indigo-500"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("settings")}
                  >
                    Settings
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "contact" && (
                <div className="space-y-6">
                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={formData.fullname}
                          onChange={(e) => setFormData((prev) => ({ ...prev, fullname: e.target.value }))}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                          placeholder="Enter your full name"
                        />
                        {errors.fullname && <p className="mt-1 text-sm text-red-500">{errors.fullname}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                          placeholder="Enter your email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                        <textarea
                          value={formData.bio}
                          onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                          rows={3}
                          placeholder="Tell us about yourself"
                        />
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center space-x-2"
                        >
                          <span>Save Changes</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditing(false)
                            setFormData(user)
                            setErrors({})
                          }}
                          className="bg-gray-700 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
                        >
                          <X className="w-4 h-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                          <span>Twitter</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                          <span>Facebook</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-8">
                  <div className="border-b border-gray-700 pb-6">
                    <h3 className="text-lg font-medium mb-4 flex items-center space-x-2">
                      <Bell className="w-5 h-5 text-indigo-500" />
                      <span>Notification Preferences</span>
                    </h3>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.notificationPreference}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            notificationPreference: !prev.notificationPreference,
                          }))
                        }
                        className="form-checkbox h-5 w-5 text-indigo-500 rounded border-gray-600 bg-gray-700 focus:ring-indigo-500"
                      />
                      <span className="text-gray-300">Receive email notifications</span>
                    </label>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-indigo-500" />
                      <span>Account Security</span>
                    </h3>
                    <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Change Password</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="profile-upload"
      />
    </div>
  )
} 