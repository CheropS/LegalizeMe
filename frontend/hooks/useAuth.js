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
      try {
        const token = localStorage.getItem("access_token")
        const userData = localStorage.getItem("userData")

        if (token) {
          setIsAuthenticated(true)
          if (userData) {
            try {
              const parsedUser = JSON.parse(userData)
              setUser(parsedUser)
            } catch (error) {
              console.error("Error parsing user data:", error)
              localStorage.removeItem("userData")
            }
          }
        } else {
          setIsAuthenticated(false)
          setUser(null)
        }
      } catch (error) {
        console.error("Auth initialization failed:", error)
        setIsAuthenticated(false)
        setUser(null)
      } finally {
        setIsInitialized(true)
      }
    }

    initAuth()
  }, [])

  // Function to check auth and handle redirects
  const checkAuthAndRedirect = (targetPath = '/profile') => {
    const token = localStorage.getItem("access_token")
    if (!token) {
      router.push('/login')
      return false
    }
    if (pathname !== targetPath) {
      router.push(targetPath)
    }
    return true
  }

  // Listen for storage changes
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'access_token' || e.key === 'userData') {
        const token = localStorage.getItem("access_token")
        const userData = localStorage.getItem("userData")

        if (!token) {
          setIsAuthenticated(false)
          setUser(null)
          if (pathname === '/profile') {
            router.push('/login')
          }
        } else if (token && userData) {
          setIsAuthenticated(true)
          try {
            setUser(JSON.parse(userData))
          } catch (error) {
            console.error("Error parsing user data:", error)
          }
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [pathname, router])

  const login = (token, userData) => {
    try {
      localStorage.setItem("access_token", token)
      if (userData) {
        localStorage.setItem("userData", JSON.stringify(userData))
      }
      setIsAuthenticated(true)
      setUser(userData)
      router.push('/profile')
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const logout = () => {
    try {
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("userData")
      setIsAuthenticated(false)
      setUser(null)
      router.push("/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      setIsAuthenticated, 
      user, 
      setUser, 
      login, 
      logout,
      checkAuthAndRedirect,
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

