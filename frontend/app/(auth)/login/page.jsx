"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const router = useRouter()
  const { login, loginWithGoogle, isAuthenticated, checkAuthAndRedirect } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
          document.getElementById('google-signin-button'),
          { 
            theme: 'outline', 
            size: 'large',
            width: 280,
            text: 'signin_with',
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
        setSuccess('Logged in successfully with Google. Redirecting...');
      } else {
        setError('Google login failed. Please try again.');
      }
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google login failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleTogglePassword = () => setShowPassword((prev) => !prev)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsLoading(true)

    if (!username || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        if (data.access) {
          setSuccess('Logged in successfully. Redirecting...')
          
          // Create a basic user object from the username
          const userData = {
            username: username,
            email: username.includes('@') ? username : `${username}@example.com`,
            name: username
          }
          
          // Use the login function from useAuth to update the global state
          login(data.access, userData)
        } else {
          setError('Invalid login response. Please try again.')
          console.error('Invalid login response:', data)
        }
      } else {
        setError(data.detail || 'Login failed. Please try again.')
        console.error('Login error:', data)
      }
    } catch (error) {
      setError('Login failed. Please try again.')
      console.error('Network or Server Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold leading-tight text-white">Sign in to LegalizeMe</h2>
            <p className="mt-2 text-base text-gray-300">
              Don't have an account?{' '}
              <Link href="/register" className="font-medium text-indigo-400 transition-all duration-200 hover:text-indigo-300 hover:underline focus:text-indigo-300">
                Create a free account
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-900/50 border-l-4 border-red-500 rounded-md">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-200">{error}</p>
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
                <label className="text-base font-medium text-gray-300">Email or Username</label>
                <div className="mt-2.5 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your email or username"
                    className="block w-full p-4 pl-10 text-white placeholder-gray-500 transition-all duration-200 border border-gray-700 rounded-md bg-gray-800/50 focus:outline-none focus:border-indigo-500 caret-indigo-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-300">Password</label>
                  <Link href="/forgot-password" className="text-sm font-medium text-indigo-400 hover:underline hover:text-indigo-300 focus:text-indigo-300">
                    Forgot password?
                  </Link>
                </div>
                <div className="mt-2.5 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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
                      Signing in...
                    </span>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>
              
              <div>
                {googleLoading ? (
                  <div className="flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-300 transition-all duration-200 bg-transparent border border-gray-700 rounded-md">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" />
                    Signing in with Google...
                  </div>
                ) : (
                  <div id="google-signin-button" className="flex justify-center"></div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}