"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { LogOut, User, Settings } from 'lucide-react'
import Image from 'next/image'

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout, isAuthenticated, isInitialized, setUser, setIsAuthenticated } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  console.log('Profile: Component render - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated, 'isLoading:', isLoading)
  console.log('Profile: User data:', user)

  useEffect(() => {
    console.log('Profile: Effect running - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated)
    
    // Only proceed if auth is initialized
    if (!isInitialized) {
      console.log('Profile: Auth not initialized yet, waiting...')
      return;
    }
    
    // Check token directly
    const token = localStorage.getItem("access_token");
    const tokenIsValid = token && token !== "null" && token !== "undefined";
    console.log('Profile: Token valid:', tokenIsValid);
    
    // If we have a token but not authenticated, update auth state
    if (tokenIsValid && !isAuthenticated) {
      console.log('Profile: Valid token but not authenticated, updating auth state')
      setIsAuthenticated(true)
      
      // Get user data from localStorage
      const userData = localStorage.getItem("userData");
      if (userData && userData !== "null" && userData !== "undefined") {
        try {
          const parsedUser = JSON.parse(userData);
          console.log('Profile: Setting user data from localStorage:', parsedUser)
          setUser(parsedUser);
        } catch (error) {
          console.error("Profile: Error parsing user data:", error);
        }
      }
    }
    
    // Always set loading to false to show the profile
    console.log('Profile: Showing profile')
    setIsLoading(false);
  }, [isAuthenticated, isInitialized, setUser, setIsAuthenticated])

  // Show loading state while initializing
  if (!isInitialized) {
    console.log('Profile: Auth not initialized, showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-500">Initializing...</p>
      </div>
    )
  }
  
  // Show loading state while checking auth
  if (isLoading) {
    console.log('Profile: Still loading, showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-500">Loading profile...</p>
      </div>
    )
  }

  // We have a valid token at this point, so always render the profile
  // Determine if we should show the user's profile picture or a default avatar
  const hasProfilePicture = user?.picture || user?.profile_picture

  console.log('Profile: Rendering profile content')
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {hasProfilePicture ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image 
                        src={user.picture || user.profile_picture}
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
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user?.name || user?.username || 'User'}</h1>
                  <p className="text-gray-400">{user?.email}</p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  console.log('Profile: Logout button clicked')
                  logout()
                }}
                className="text-white border-white/20 hover:bg-white/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400">Name</label>
                      <p className="text-white">{user?.name || user?.username || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Email</label>
                      <p className="text-white">{user?.email || 'Not set'}</p>
                    </div>
                    {user?.id && (
                      <div>
                        <label className="text-sm text-gray-400">User ID</label>
                        <p className="text-white">{user.id}</p>
                      </div>
                    )}
                    {user?.last_login && (
                      <div>
                        <label className="text-sm text-gray-400">Last Login</label>
                        <p className="text-white">{new Date(user.last_login).toLocaleString()}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h2 className="text-lg font-semibold mb-4">Authentication</h2>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}