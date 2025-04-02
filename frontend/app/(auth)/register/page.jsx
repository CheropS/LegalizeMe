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
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleTogglePassword = () => setShowPassword((prev) => !prev)

  const validatePassword = (password) => {
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    return password.length >= minLength && hasUppercase && hasLowercase && hasSpecialChar
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsLoading(true)

    if (!username || !email || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    if (!validatePassword(password)) {
      setError('Password does not meet the requirements')
      setIsLoading(false)
      return
    }

    if (!agreed) {
      setError('Please agree to the Terms of Service and Data Governance Policy')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        setSuccess('Account created successfully! Redirecting to login...')
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      } else {
        setError(data.message || 'Signup failed. Please try again.')
        console.error('Error data:', data)
      }
    } catch (error) {
      setError('Signup failed. Please try again.')
      console.error('Network or Server Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign up to LegalizeMe</h2>
            <p className="mt-2 text-base text-gray-300">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-indigo-400 transition-all duration-200 hover:text-indigo-300 hover:underline focus:text-indigo-300">
                Login
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-md text-sm flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="whitespace-pre-line">{error}</div>
                </div>
              )}
              {success && (
                <div className="bg-green-900/50 border border-green-700 text-green-200 px-4 py-3 rounded-md text-sm flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {success}
                </div>
              )}
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-200">Username</label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your preferred username"
                      className="block w-full p-4 pl-10 text-white placeholder-gray-400 transition-all duration-200 border border-gray-600 rounded-md bg-gray-700/50 focus:outline-none focus:border-indigo-500 focus:bg-gray-700/70 caret-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-200">Email address</label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email to get started"
                      className="block w-full p-4 pl-10 text-white placeholder-gray-400 transition-all duration-200 border border-gray-600 rounded-md bg-gray-700/50 focus:outline-none focus:border-indigo-500 focus:bg-gray-700/70 caret-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-200">Password</label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="block w-full p-4 pl-10 text-white placeholder-gray-400 transition-all duration-200 border border-gray-600 rounded-md bg-gray-700/50 focus:outline-none focus:border-indigo-500 focus:bg-gray-700/70 caret-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
                    <li>Minimum 8 characters</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one special character</li>
                  </ul>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-600 text-indigo-500 focus:ring-indigo-500 bg-gray-700/50"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                    I agree to the{' '}
                    <Link href="/terms" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Data Governance Policy
                    </Link>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 border border-transparent rounded-md focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      'Create account'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <Image
              className="relative w-full mx-auto rounded-2xl shadow-2xl"
              src="/legal.jpg"
              alt="LegalizeMe"
              width={600}
              height={400}
              priority
            />
          </div>

          <div className="w-full max-w-md mx-auto mt-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Join LegalizeMe Today
            </h3>
            <p className="leading-relaxed text-gray-300 mt-2.5">
              Create your account to access our comprehensive legal services and resources. Join thousands of satisfied users who trust LegalizeMe for their legal needs.
            </p>

            <div className="flex items-center justify-center mt-10 space-x-3">
              <div className="bg-indigo-500 rounded-full w-20 h-1.5"></div>
              <div className="bg-gray-600 rounded-full w-12 h-1.5"></div>
              <div className="bg-gray-600 rounded-full w-12 h-1.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}