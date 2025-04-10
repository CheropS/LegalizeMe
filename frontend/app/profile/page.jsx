"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { LogOut, User, Settings, Edit, Lock, Camera, Save, X } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'react-toastify'

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout, isAuthenticated, isInitialized, setUser, setIsAuthenticated } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [profilePicture, setProfilePicture] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  // console.log('Profile: Component render - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated, 'isLoading:', isLoading)
  // console.log('Profile: User data:', user)

  useEffect(() => {
    // console.log('Profile: Effect running - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated)
    
    // Only proceed if auth is initialized
    if (!isInitialized) {
      // console.log('Profile: Auth not initialized yet, waiting...')
      return;
    }
    
    // Check token directly
    const token = localStorage.getItem("access_token");
    const tokenIsValid = token && token !== "null" && token !== "undefined";
    // console.log('Profile: Token valid:', tokenIsValid);
    
    // If we have a token but not authenticated, update auth state
    if (tokenIsValid && !isAuthenticated) {
      // console.log('Profile: Valid token but not authenticated, updating auth state')
      setIsAuthenticated(true)
      
      // Get user data from localStorage
      const userData = localStorage.getItem("userData");
      if (userData && userData !== "null" && userData !== "undefined") {
        try {
          const parsedUser = JSON.parse(userData);
          // console.log('Profile: Setting user data from localStorage:', parsedUser)
          setUser(parsedUser);
          setFormData({
            name: parsedUser.name || '',
            email: parsedUser.email || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          })
        } catch (error) {
          console.error("Profile: Error parsing user data:", error);
        }
      }
    }
    
    // Always set loading to false to show the profile
    // console.log('Profile: Showing profile')
    setIsLoading(false);
  }, [isAuthenticated, isInitialized, setUser, setIsAuthenticated])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfilePicture(file)
      setPreviewUrl(URL.createObjectURL(file))
      
      // Convert image to base64 and store in localStorage
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result
        const updatedUser = {
          ...user,
          profile_picture: base64String
        }
        localStorage.setItem("userData", JSON.stringify(updatedUser))
        setUser(updatedUser)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfile = async () => {
    try {
      // Here you would typically make an API call to update the profile
      const updatedUser = {
        ...user,
        name: formData.name,
        email: formData.email,
        profile_picture: user.profile_picture // Preserve the profile picture
      }
      
      // Update local storage and state
      localStorage.setItem("userData", JSON.stringify(updatedUser))
      setUser(updatedUser)
      
      toast.success('Profile updated successfully')
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error('Failed to update profile')
    }
  }

  const handleChangePassword = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('New passwords do not match')
      return
    }

    try {
      // Here you would typically make an API call to change the password
      toast.success('Password changed successfully')
      setIsChangingPassword(false)
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }))
    } catch (error) {
      console.error('Error changing password:', error)
      toast.error('Failed to change password')
    }
  }

  // Show loading state while initializing
  if (!isInitialized) {
    // console.log('Profile: Auth not initialized, showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-500">Initializing...</p>
      </div>
    )
  }
  
  // Show loading state while checking auth
  if (isLoading) {
    // console.log('Profile: Still loading, showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-500">Loading profile...</p>
      </div>
    )
  }

  // We have a valid token at this point, so always render the profile
  // Determine if we should show the user's profile picture or a default avatar
  const hasProfilePicture = user?.picture || user?.profile_picture || previewUrl

  // console.log('Profile: Rendering profile content')
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  {hasProfilePicture ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image 
                        src={previewUrl || user.picture || user.profile_picture}
                        alt={user.name || 'User profile'}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                  )}
                  {isEditing && (
                    <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <Camera className="w-6 h-6 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border border-white/20 rounded px-3 py-1 text-xl font-bold focus:outline-none focus:border-blue-500"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold">{user?.name || user?.username || 'User'}</h1>
                  )}
                  <p className="text-gray-400">{user?.email}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {isEditing ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={handleSaveProfile}
                      className="text-white border-white/20 hover:bg-white/10"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="text-white border-white/20 hover:bg-white/10"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(true)}
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
                <Button
                  variant="destructive"
                  onClick={logout}
                  className="text-white hover:bg-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400">Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        <p className="text-white">{user?.name || user?.username || 'Not set'}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        <p className="text-white">{user?.email || 'Not set'}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Security</h2>
                    {!isChangingPassword && (
                      <Button
                        variant="outline"
                        onClick={() => setIsChangingPassword(true)}
                        className="text-white border-white/20 hover:bg-white/10"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Change Password
                      </Button>
                    )}
                  </div>
                  {isChangingPassword ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400">Current Password</label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">New Password</label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Confirm New Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={handleChangePassword}
                          className="text-white border-white/20 hover:bg-white/10"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Password
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setIsChangingPassword(false)}
                          className="text-white border-white/20 hover:bg-white/10"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400">Authentication Method</label>
                        <p className="text-white">
                          {user?.google_id ? 'Google Account' : 'Email & Password'}
                        </p>
                      </div>
                      {user?.date_joined && (
                        <div>
                          <label className="text-sm text-gray-400">Account Created</label>
                          <p className="text-white">{new Date(user.date_joined).toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}