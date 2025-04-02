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
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  // Check authentication and initialize user data
  useEffect(() => {
    const initProfile = async () => {
      try {
        const isAuthenticated = checkAuthAndRedirect()
        if (!isAuthenticated) {
          return
        }

        // Initialize user data from authUser
        if (authUser) {
          setUser({
            email: authUser.email || "",
            fullname: authUser.fullname || "",
            profileImage: authUser.profileImage || null,
            bio: authUser.bio || "Passionate about legal technology and innovation",
            phone: authUser.phone || "",
            notificationPreference: authUser.notificationPreference || false,
          })
        }
      } catch (error) {
        console.error("Error initializing profile:", error)
        router.push('/login')
      } finally {
        setIsLoading(false)
      }
    }

    initProfile()
  }, [authUser, checkAuthAndRedirect, router])

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(null)
  const [activeTab, setActiveTab] = useState("contact")
  const [errors, setErrors] = useState({})

  // Update formData when user changes
  useEffect(() => {
    if (user) {
      setFormData(user)
    }
  }, [user])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-1/3 bg-gray-800/70 p-8 flex flex-col items-center border-r border-gray-700/50">
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
                          placeholder="Tell us about yourself"
                          rows={4}
                        />
                      </div>

                      <div className="flex justify-end space-x-4">
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditing(false)
                            setFormData(user)
                            setErrors({})
                          }}
                          className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-300">Full Name</h3>
                        <p className="mt-1">{user.fullname || "Not set"}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-300">Email</h3>
                        <p className="mt-1">{user.email || "Not set"}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                        <p className="mt-1">{user.phone || "Not set"}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-300">Bio</h3>
                        <p className="mt-1">{user.bio || "Not set"}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-300">Email Notifications</h3>
                      <p className="text-sm text-gray-400">Receive email notifications about your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={user.notificationPreference}
                        onChange={(e) => {
                          setUser((prev) => ({
                            ...prev,
                            notificationPreference: e.target.checked,
                          }))
                          localStorage.setItem(
                            "userData",
                            JSON.stringify({
                              ...user,
                              notificationPreference: e.target.checked,
                            })
                          )
                        }}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                    </label>
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