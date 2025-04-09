"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { useRouter, usePathname } from "next/navigation"

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  checkAuthAndRedirect: () => {},
  isInitialized: false,
})

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [user, setUser] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  // Initialize auth state
  useEffect(() => {
    const initAuth = () => {
      console.log('Auth: Starting initialization')
      try {
        const token = localStorage.getItem("access_token")
        const userData = localStorage.getItem("userData")
        console.log('Auth: Found token:', token ? 'yes' : 'no')
        console.log('Auth: Found userData:', userData ? 'yes' : 'no')

        let authState = false
        let userState = null

        if (token && token !== "null" && token !== "undefined") {
          console.log('Auth: Valid token found')
          authState = true
          
          if (userData && userData !== "null" && userData !== "undefined") {
            try {
              const parsedUser = JSON.parse(userData)
              if (parsedUser && typeof parsedUser === "object") {
                console.log('Auth: Setting user data')
                userState = parsedUser
              } else {
                console.log('Auth: Invalid user data format, attempting to fetch user data')
                // If user data is invalid but we have a token, we should try to fetch user data
                fetchUserData(token)
              }
            } catch (error) {
              console.error("Auth: Error parsing user data:", error)
              console.log('Auth: Attempting to fetch user data after parse error')
              fetchUserData(token)
            }
          } else {
            console.log('Auth: No user data found, attempting to fetch user data')
            fetchUserData(token)
          }
        } else {
          console.log('Auth: No valid token found')
          localStorage.removeItem("access_token")
          authState = false
        }

        // Update states together to prevent race conditions
        setIsAuthenticated(authState)
        setUser(userState)
        console.log('Auth: Setting states - isAuthenticated:', authState, 'user:', userState ? 'exists' : 'null')
        
      } catch (error) {
        console.error("Auth: Initialization failed:", error)
        setIsAuthenticated(false)
        setUser(null)
        localStorage.removeItem("access_token")
        localStorage.removeItem("userData")
      } finally {
        console.log('Auth: Initialization complete')
        setIsInitialized(true)
      }
    }

    const fetchUserData = async (token) => {
      try {
        console.log('Auth: Fetching user data from API')
        const response = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          const userData = await response.json()
          console.log('Auth: Successfully fetched user data:', userData)
          localStorage.setItem("userData", JSON.stringify(userData))
          setUser(userData)
          return userData
        } else if (response.status === 401) {
          console.log('Auth: Token invalid or expired')
          localStorage.removeItem("access_token")
          localStorage.removeItem("userData")
          setIsAuthenticated(false)
          setUser(null)
          router.push('/login')
        } else {
          console.error('Auth: Failed to fetch user data:', response.status)
          throw new Error('Failed to fetch user data')
        }
      } catch (error) {
        console.error('Auth: Error fetching user data:', error)
        // Don't clear the token on network errors, only on auth errors
        if (error.message.includes('Failed to fetch')) {
          console.log('Auth: Network error, keeping existing auth state')
        } else {
          localStorage.removeItem("access_token")
          localStorage.removeItem("userData")
          setIsAuthenticated(false)
          setUser(null)
        }
      }
    }

    initAuth()
  }, [])

  // Function to check auth and handle redirects
  const checkAuthAndRedirect = (targetPath = '/profile') => {
    console.log('Auth: Checking auth and redirect, isInitialized:', isInitialized)
    if (!isInitialized) {
      console.log('Auth: Not initialized yet, returning false')
      return false
    }
    
    const token = localStorage.getItem("access_token")
    console.log('Auth: Current token status:', token ? 'exists' : 'missing')
    if (!token || token === "null" || token === "undefined") {
      console.log('Auth: No valid token, redirecting to login')
      router.push('/login')
      return false
    }
    if (pathname !== targetPath) {
      console.log('Auth: Redirecting to target path:', targetPath)
      router.push(targetPath)
    }
    return true
  }

  // Listen for storage changes
  useEffect(() => {
    const handleStorageChange = (e) => {
      console.log('Auth: Storage change detected:', e.key)
      if (e.key === 'access_token' || e.key === 'userData') {
        const token = localStorage.getItem("access_token")
        const userData = localStorage.getItem("userData")

        let authState = false
        let userState = null

        if (token && token !== "null" && token !== "undefined") {
          authState = true
          if (userData && userData !== "null" && userData !== "undefined") {
            try {
              const parsedUser = JSON.parse(userData)
              if (parsedUser && typeof parsedUser === "object") {
                userState = parsedUser
              } else {
                console.log('Auth: Invalid user data format in storage change')
                // Attempt to fetch user data if it's invalid
                fetchUserData(token)
              }
            } catch (error) {
              console.error("Auth: Error parsing user data on storage change:", error)
              localStorage.removeItem("userData")
              // Attempt to fetch user data after error
              fetchUserData(token)
            }
          } else {
            console.log('Auth: No user data in storage change, attempting to fetch')
            fetchUserData(token)
          }
        } else {
          authState = false
          localStorage.removeItem("access_token")
        }

        // Update states together
        setIsAuthenticated(authState)
        setUser(userState)
        console.log('Auth: Storage change - updating states - isAuthenticated:', authState, 'user:', userState ? 'exists' : 'null')

        if (!authState && pathname === '/profile') {
          router.push('/login')
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [pathname, router])

  const login = async (token, userData) => {
    console.log('Auth: Login attempt')
    try {
      if (!token || token === "null" || token === "undefined") {
        throw new Error("Invalid token")
      }
      
      console.log('Auth: Setting token and user data')
      localStorage.setItem("access_token", token)
      
      // If userData is not provided, fetch it from the API
      if (!userData) {
        console.log('Auth: No user data provided, fetching from API')
        const response = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          userData = await response.json()
          console.log('Auth: Successfully fetched user data during login')
        } else {
          throw new Error('Failed to fetch user data')
        }
      }
      
      // Store user data
      localStorage.setItem("userData", JSON.stringify(userData))
      
      // Update states together
      setIsAuthenticated(true)
      setUser(userData)
      console.log('Auth: Login successful, states updated')
      router.push('/')
    } catch (error) {
      console.error("Auth: Login failed:", error)
      localStorage.removeItem("access_token")
      localStorage.removeItem("userData")
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  const logout = () => {
    console.log('Auth: Logout initiated')
    try {
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("userData")
      // Update states together
      setIsAuthenticated(false)
      setUser(null)
      console.log('Auth: Logout successful, states updated')
      router.push("/login")
    } catch (error) {
      console.error("Auth: Logout failed:", error)
    }
  }

  // Check auth state on route changes
  useEffect(() => {
    if (isInitialized) {
      console.log('Auth: Route change detected:', pathname)
      const isAuthPage = pathname === '/login' || pathname === '/register'
      const token = localStorage.getItem("access_token")
      console.log('Auth: Current route auth check - isAuthPage:', isAuthPage, 'hasToken:', !!token)

      if (isAuthPage && token && token !== "null" && token !== "undefined") {
        console.log('Auth: On auth page with token, redirecting to home')
        router.push('/')
      } else if (pathname === '/profile' && (!token || token === "null" || token === "undefined")) {
        console.log('Auth: On profile page without token, redirecting to login')
        router.push('/login')
      }
    }
  }, [pathname, isInitialized, router])

  if (!isInitialized) {
    console.log('Auth: Not initialized, showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  console.log('Auth: Provider rendering, isAuthenticated:', isAuthenticated, 'user:', user ? 'exists' : 'null')
  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      setIsAuthenticated, 
      user, 
      setUser, 
      login, 
      logout,
      checkAuthAndRedirect,
      isInitialized,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export default useAuth

