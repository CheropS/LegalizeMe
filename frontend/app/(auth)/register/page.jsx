"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import useAuth from '@/hooks/useAuth'

export default function RegisterPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [success, setSuccess] = useState('')

  const validatePassword = (password) => {
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    const errors = []
    if (password.length < minLength) errors.push('Password must be at least 8 characters long')
    if (!hasUppercase) errors.push('Password must contain at least one uppercase letter')
    if (!hasLowercase) errors.push('Password must contain at least one lowercase letter')
    if (!hasSpecialChar) errors.push('Password must contain at least one special character')
    
    return {
      isValid: password.length >= minLength && hasUppercase && hasLowercase && hasSpecialChar,
      errors
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    // Basic validation
    if (!formData.username.trim()) {
      setError('Please enter a username')
      setIsLoading(false)
      return
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address')
      setIsLoading(false)
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    const passwordValidation = validatePassword(formData.password)
    if (!passwordValidation.isValid) {
      setError(passwordValidation.errors.join('\n'))
      setIsLoading(false)
      return
    }

    if (!agreed) {
      setError('Please agree to the Terms of Service and Privacy Policy to continue')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      })

      let data
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        // If response is not JSON, handle it differently
        const text = await response.text()
        if (response.status === 500) {
          throw new Error('Server error. Please try again later.')
        } else {
          throw new Error('Unable to connect to server. Please try again.')
        }
      }

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) {
          if (data.message?.includes('username')) {
            throw new Error('Username is already taken. Please choose a different username')
          } else if (data.message?.includes('email')) {
            throw new Error('Email address is already registered. Please use a different email or login')
          } else {
            throw new Error('This account already exists. Please try logging in instead')
          }
        } else if (response.status === 400) {
          throw new Error(data.message || 'Invalid registration details. Please check your information and try again')
        } else if (response.status === 500) {
          throw new Error('Server error. Please try again later')
        } else {
          throw new Error(data.message || 'Registration failed. Please try again')
        }
      }
      
      // If registration is successful and returns a token, log the user in
      if (data.access_token) {
        login(data.access_token, data.user)
      }
      
      // Show success message
      setSuccess('Account created successfully! Redirecting to login...')
      
      // Delay redirect to show the success message
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    } catch (err) {
      // Handle network errors
      if (!navigator.onLine) {
        setError('No internet connection. Please check your network and try again.')
      } else if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
        setError('Unable to connect to server. Please try again later.')
      } else {
        setError(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <section className="bg-white font-montserrat animate-fadeIn">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to LegalizeMe</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">
                Login
              </Link>
            </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="whitespace-pre-line">{error}</div>
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
                        placeholder="Enter your preferred username"
                      className="block w-full p-4 pl-10 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                  <label className="text-base font-medium text-gray-900">Email address</label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                      <input
                        type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email to get started"
                      className="block w-full p-4 pl-10 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                  <label className="text-base font-medium text-gray-900">Password</label>
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
                    <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
                      <li>Minimum 8 characters</li>
                      <li>At least one uppercase letter</li>
                      <li>At least one lowercase letter</li>
                      <li>At least one special character</li>
                    </ul>
                  </div>

                  <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                    <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-500">
                    I agree to LegalizeMe's{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/data-governance" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Privacy Policy
                    </Link>
                    </label>
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
                        Creating account...
                      </span>
                    ) : (
                      'Create free account'
                    )}
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
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
                  LegalizeMe is the best platform for all your legal needs
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Get access to a wide range of legal services and resources to help you succeed.
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