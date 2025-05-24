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
  loginWithGoogle: () => {},
  sessionTimeoutMinutes: 30,
  setSessionTimeoutMinutes: () => {},
})

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [user, setUser] = useState(null)
  const [sessionTimeoutMinutes, setSessionTimeoutMinutes] = useState(30)
  const [lastActivity, setLastActivity] = useState(Date.now())
  const router = useRouter()
  const pathname = usePathname()

  // Track user activity to reset timeout
  useEffect(() => {
    if (!isAuthenticated) return

    // Function to handle user activity
    const handleActivity = () => {
      setLastActivity(Date.now())
      localStorage.setItem('lastActivityTime', Date.now().toString())
    }

    // Add event listeners for user activity
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    activityEvents.forEach(event => {
      window.addEventListener(event, handleActivity)
    })

    return () => {
      activityEvents.forEach(event => {
        window.removeEventListener(event, handleActivity)
      })
    }
  }, [isAuthenticated])

  // Check for session timeout
  useEffect(() => {
    if (!isAuthenticated) return

    const checkSessionTimeout = () => {
      const storedLastActivity = localStorage.getItem('lastActivityTime')
      if (!storedLastActivity) return

      const lastActivityTime = parseInt(storedLastActivity, 10)
      const currentTime = Date.now()
      const inactiveTime = currentTime - lastActivityTime
      const timeoutDuration = sessionTimeoutMinutes * 60 * 1000

      if (inactiveTime >= timeoutDuration) {
        console.log('Session timeout due to inactivity')
        logout()
      }
    }

    // Check every minute
    const intervalId = setInterval(checkSessionTimeout, 60000)
    
    // Also check on component mount
    checkSessionTimeout()

    return () => clearInterval(intervalId)
  }, [isAuthenticated, sessionTimeoutMinutes])

  // Initialize auth state
  useEffect(() => {
    const initAuth = () => {
      // console.log('Auth: Starting initialization')
      try {
        const token = localStorage.getItem("access_token")
        const userData = localStorage.getItem("userData")
        // console.log('Auth: Found token:', token ? 'yes' : 'no')
        // console.log('Auth: Found userData:', userData ? 'yes' : 'no')

        let authState = false
        let userState = null

        if (token && token !== "null" && token !== "undefined") {
          // console.log('Auth: Valid token found, setting authState to true')
          authState = true
          
          if (userData && userData !== "null" && userData !== "undefined") {
            try {
              const parsedUser = JSON.parse(userData)
              if (parsedUser && typeof parsedUser === "object") {
                // console.log('Auth: Setting user data')
                userState = parsedUser
              } else {
                // console.log('Auth: Invalid user data format')
                // If we have a token but invalid user data, we can't fetch user data
                // since there's no endpoint for that. Just set auth state.
                authState = true
              }
            } catch (error) {
              console.error("Auth: Error parsing user data:", error)
              // If we can't parse user data, we still have a token, so we're authenticated
              authState = true
            }
          } else {
            // console.log('Auth: No user data found, but token exists')
            // We have a token but no user data, and no endpoint to fetch user data
            // Just set auth state
            authState = true
          }
        } else {
          // console.log('Auth: No valid token found')
          localStorage.removeItem("access_token")
          authState = false
        }

        // Update states together to prevent race conditions
        setIsAuthenticated(authState)
        setUser(userState)
        // console.log('Auth: Setting states - isAuthenticated:', authState, 'user:', userState ? 'exists' : 'null')
        
      } catch (error) {
        console.error("Auth: Initialization failed:", error)
        setIsAuthenticated(false)
        setUser(null)
        localStorage.removeItem("access_token")
        localStorage.removeItem("userData")
      } finally {
        // console.log('Auth: Initialization complete')
        setIsInitialized(true)
      }
    }

    initAuth()
  }, [])

  // Function to check auth and handle redirects
  const checkAuthAndRedirect = (targetPath = '/profile') => {
    // console.log('Auth: Checking auth for redirect to', targetPath, 'current path:', pathname)
    const token = localStorage.getItem("access_token")
    const isValid = token && token !== "null" && token !== "undefined"
    // console.log('Auth: Token is valid:', isValid)
    
    // If we have a valid token and want to go to profile, just go there
    if (isValid && targetPath === '/profile') {
      // console.log('Auth: Valid token, redirecting to profile page')
      router.push('/profile')
      return true
    }
    
    // Always update authentication state if we have a valid token
    if (isValid && !isAuthenticated) {
      // console.log('Auth: Valid token but not authenticated, updating state')
      setIsAuthenticated(true)
      
      // Try to get user data from localStorage
      const userData = localStorage.getItem("userData")
      if (userData && userData !== "null" && userData !== "undefined") {
        try {
          const parsedUser = JSON.parse(userData)
          if (parsedUser && typeof parsedUser === "object") {
            setUser(parsedUser)
          }
        } catch (error) {
          console.error("Auth: Error parsing user data:", error)
        }
      }
    }
    
    // console.log('Auth: Auth check complete, token valid:', isValid, 'isAuthenticated:', isAuthenticated)
    return isValid
  }

  // Listen for storage events (for multi-tab support)
  useEffect(() => {
    const handleStorageChange = (e) => {
      // console.log('Auth: Storage change detected:', e.key)
      if (e.key === "access_token" || e.key === "userData") {
        // console.log('Auth: Relevant storage change, updating state')
        
        const token = localStorage.getItem("access_token")
        const userData = localStorage.getItem("userData")
        
        let authState = false
        let userState = null
        
        if (token && token !== "null" && token !== "undefined") {
          // console.log('Auth: Valid token in storage')
          authState = true
          
          if (userData && userData !== "null" && userData !== "undefined") {
            try {
              const parsedUser = JSON.parse(userData)
              if (parsedUser && typeof parsedUser === "object") {
                // console.log('Auth: Valid user data in storage')
                userState = parsedUser
              }
            } catch (error) {
              console.error("Auth: Error parsing user data from storage:", error)
            }
          }
        } else {
          // console.log('Auth: No valid token in storage')
        }
        
        setIsAuthenticated(authState)
        setUser(userState)
        // console.log('Auth: Storage change - updating states - isAuthenticated:', authState, 'user:', userState ? 'exists' : 'null')

        if (!authState && pathname === '/profile') {
          router.push('/login')
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [pathname, router])

  const login = async (token, userData) => {
    // console.log('Auth: Login attempt')
    try {
      if (!token || token === "null" || token === "undefined") {
        throw new Error("Invalid token")
      }
      
      // console.log('Auth: Setting token and user data')
      localStorage.setItem("access_token", token)
      
      // Store user data if provided
      if (userData) {
        // console.log('Auth: User data provided, storing it')
        localStorage.setItem("userData", JSON.stringify(userData))
      }
      
      // Update states together
      setIsAuthenticated(true)
      setUser(userData)
      // console.log('Auth: Login successful, states updated')
      router.push('/')
    } catch (error) {
      console.error("Auth: Login failed:", error)
      localStorage.removeItem("access_token")
      localStorage.removeItem("userData")
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  const loginWithGoogle = async (googleToken) => {
    // console.log('Auth: Google login attempt')
    try {
      if (!googleToken) {
        throw new Error("Invalid Google token")
      }
      
      // console.log('Auth: Processing Google token')
      
      // Verify the Google token client-side
      const response = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + googleToken);
      
      if (!response.ok) {
        throw new Error('Failed to verify Google token');
      }
      
      const googleData = await response.json();
      
      // Create user data from Google response
      const userData = {
        email: googleData.email,
        name: googleData.name,
        picture: googleData.picture,
        google_id: googleData.sub,
        is_google_user: true
      };
      
      // Store the Google token as our access token (simplified approach)
      localStorage.setItem("access_token", googleToken);
      localStorage.setItem("userData", JSON.stringify(userData));
      
      // Update states together
      setIsAuthenticated(true);
      setUser(userData);
      // console.log('Auth: Google login successful, states updated');
      router.push('/');
      
      return true;
    } catch (error) {
      console.error("Auth: Google login failed:", error)
      localStorage.removeItem("access_token")
      localStorage.removeItem("userData")
      setIsAuthenticated(false)
      setUser(null)
      return false
    }
  }

  const logout = () => {
    // console.log('Auth: Logout initiated')
    try {
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("userData")
      // Update states together
      setIsAuthenticated(false)
      setUser(null)
      // console.log('Auth: Logout successful, states updated')
      router.push("/")
    } catch (error) {
      console.error("Auth: Logout failed:", error)
    }
  }

  // Check auth state on route changes
  useEffect(() => {
    if (isInitialized) {
      // console.log('Auth: Route change detected:', pathname)
      
      // If we have a token but not authenticated, update the state
      const token = localStorage.getItem("access_token")
      const tokenIsValid = token && token !== "null" && token !== "undefined"
      
      if (tokenIsValid && !isAuthenticated) {
        // console.log('Auth: Valid token but not authenticated, updating state')
        setIsAuthenticated(true)
        
        // Try to get user data from localStorage
        const userData = localStorage.getItem("userData")
        if (userData && userData !== "null" && userData !== "undefined") {
          try {
            const parsedUser = JSON.parse(userData)
            if (parsedUser && typeof parsedUser === "object") {
              setUser(parsedUser)
            }
          } catch (error) {
            console.error("Auth: Error parsing user data:", error)
          }
        }
      }
    }
  }, [pathname, isInitialized, isAuthenticated])

  if (!isInitialized) {
    // console.log('Auth: Not initialized, showing loading state')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // console.log('Auth: Provider rendering, isAuthenticated:', isAuthenticated, 'user:', user ? 'exists' : 'null')
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
      loginWithGoogle,
      sessionTimeoutMinutes,
      setSessionTimeoutMinutes,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { useAuth }
