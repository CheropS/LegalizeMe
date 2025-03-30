"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { User, Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import useAuth from '@/hooks/useAuth'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    // Basic validation
    if (!formData.username.trim()) {
      setError('Please enter your username')
      setIsLoading(false)
      return
    }

    if (!formData.password) {
      setError('Please enter your password')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          throw new Error('Invalid username or password')
        } else if (response.status === 404) {
          throw new Error('User not found. Please check your username')
        } else if (response.status === 429) {
          throw new Error('Too many login attempts. Please try again later')
        } else {
          throw new Error(data.message || 'Login failed. Please try again')
        }
      }

      // Update auth state using the login function from useAuth
      login(data.access_token, data.user)
      
      // Show success message
      setSuccess('Login successful! Redirecting to home page...')
      
      // Delay redirect to show the success message
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-white pb-40 font-montserrat animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to LegalizeMe</h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">
                Create a free account
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {success}
                </div>
              )}
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">Username</label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="Enter username"
                      className="block w-full p-4 pl-10 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">Password</label>
                    <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Enter your password"
                      className="block w-full p-4 pl-10 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      'Sign in'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 pb-20 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <Image
              className="w-full mx-auto rounded-lg"
              src="/legal.jpg"
              alt="LegalizeMe"
              width={600}
              height={400}
              priority
            />

            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-black">
                Log in to LegalizeMe
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Sign in to your account to access all features and services. If you don't have an account yet, you can create one for free.
              </p>

              <div className="flex items-center justify-center mt-10 space-x-3">
                <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>
                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}