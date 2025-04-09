"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { LogOut, User, Settings } from 'lucide-react'

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout, isAuthenticated, isInitialized } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  console.log('Profile: Component render - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated, 'isLoading:', isLoading)

  useEffect(() => {
    console.log('Profile: Effect running - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated)
    if (isInitialized) {
      if (!isAuthenticated) {
        console.log('Profile: Not authenticated, redirecting to login')
        router.push('/login')
      } else {
        console.log('Profile: Authenticated, setting loading to false')
        setIsLoading(false)
      }
    } else {
      console.log('Profile: Not initialized yet')
    }
  }, [isAuthenticated, isInitialized, router])

  if (!isInitialized || isLoading) {
    console.log('Profile: Showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    console.log('Profile: Not authenticated, returning null')
    return null
  }

  console.log('Profile: Rendering profile content')
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user?.name || 'User'}</h1>
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
                      <p className="text-white">{user?.name || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Email</label>
                      <p className="text-white">{user?.email}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h2 className="text-lg font-semibold mb-4">Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400">Theme</label>
                      <p className="text-white">Dark</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Language</label>
                      <p className="text-white">English</p>
                    </div>
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