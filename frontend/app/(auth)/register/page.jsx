"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import useAuth from '@/hooks/useAuth'

export default function RegisterPage() {
  const router = useRouter()
  const { login, loginWithGoogle } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  // Load Google API script
  useEffect(() => {
    const loadGoogleScript = () => {
      // Check if the script is already loaded
      if (document.querySelector('script#google-client')) {
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.id = 'google-client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        initializeGoogleButton();
      };
    };
    
    const initializeGoogleButton = () => {
      if (window.google && !document.getElementById('g_id_onload')) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button-register'),
          { 
            theme: 'outline', 
            size: 'large',
            width: 280,
            text: 'signup_with',
            shape: 'rectangular',
            logo_alignment: 'center'
          }
        );
      }
    };
    
    loadGoogleScript();
    
    // Clean up
    return () => {
      const script = document.querySelector('script#google-client');
      if (script) {
        script.remove();
      }
    };
  }, []);

  // Handle Google sign-in response
  const handleGoogleResponse = async (response) => {
    if (!response.credential) {
      setError('Google sign-in failed. Please try again.');
      return;
    }
    
    setGoogleLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const success = await loginWithGoogle(response.credential);
      
      if (success) {
        setSuccess('Signed up successfully with Google. Redirecting...');
      } else {
        setError('Google sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Google sign-up error:', error);
      setError('Google sign-up failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold leading-tight text-white">Sign up to LegalizeMe</h2>
            <p className="mt-2 text-base text-gray-300">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-indigo-400 transition-all duration-200 hover:text-indigo-300 hover:underline focus:text-indigo-300">
                Login
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-900/50 border-l-4 border-red-500 rounded-md">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-200 whitespace-pre-line">{error}</p>
                </div>
              </div>
            )}
            {success && (
              <div className="p-4 bg-green-900/50 border-l-4 border-green-500 rounded-md">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <p className="text-sm text-green-200">{success}</p>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-300">Username</label>
                <div className="mt-2.5 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    className="block w-full p-4 pl-10 text-white placeholder-gray-500 transition-all duration-200 border border-gray-700 rounded-md bg-gray-800/50 focus:outline-none focus:border-indigo-500 caret-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-300">Email address</label>
                <div className="mt-2.5 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="block w-full p-4 pl-10 text-white placeholder-gray-500 transition-all duration-200 border border-gray-700 rounded-md bg-gray-800/50 focus:outline-none focus:border-indigo-500 caret-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-300">Password</label>
                <div className="mt-2.5 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="block w-full p-4 pl-10 text-white placeholder-gray-500 transition-all duration-200 border border-gray-700 rounded-md bg-gray-800/50 focus:outline-none focus:border-indigo-500 caret-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
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
                  className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none hover:bg-indigo-700 focus:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                      Creating account...
                    </span>
                  ) : (
                    'Create account'
                  )}
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Or sign up with</span>
                </div>
              </div>
              
              <div>
                {googleLoading ? (
                  <div className="flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-300 transition-all duration-200 bg-transparent border border-gray-700 rounded-md">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" />
                    Signing up with Google...
                  </div>
                ) : (
                  <div id="google-signin-button-register" className="flex justify-center"></div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}