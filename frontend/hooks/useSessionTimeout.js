"use client"

import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'

/**
 * Hook to handle session timeout after a period of inactivity
 * @param {number} timeoutInMinutes - Timeout duration in minutes (default: 30)
 * @returns {Object} - Session timeout state and reset function
 */
export const useSessionTimeout = (timeoutInMinutes = 30) => {
  const { logout, isAuthenticated } = useAuth()
  const [lastActivity, setLastActivity] = useState(Date.now())
  const [timeoutId, setTimeoutId] = useState(null)

  const resetTimeout = () => {
    setLastActivity(Date.now())
  }

  useEffect(() => {
    if (!isAuthenticated) return

    // Convert minutes to milliseconds
    const timeoutDuration = timeoutInMinutes * 60 * 1000

    // Function to handle user activity
    const handleActivity = () => {
      resetTimeout()
    }

    // Add event listeners for user activity
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    activityEvents.forEach(event => {
      window.addEventListener(event, handleActivity)
    })

    // Clear previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Set new timeout
    const id = setTimeout(() => {
      const currentTime = Date.now()
      const inactiveTime = currentTime - lastActivity

      if (inactiveTime >= timeoutDuration && isAuthenticated) {
        console.log('Session timeout due to inactivity')
        logout()
      }
    }, timeoutDuration)

    setTimeoutId(id)

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      activityEvents.forEach(event => {
        window.removeEventListener(event, handleActivity)
      })
    }
  }, [lastActivity, timeoutInMinutes, logout, isAuthenticated, timeoutId])

  // Store last activity timestamp in localStorage to persist across page refreshes
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('lastActivityTime', lastActivity.toString())
    }
  }, [lastActivity, isAuthenticated])

  // Check localStorage on mount to handle page refreshes
  useEffect(() => {
    if (isAuthenticated) {
      const storedLastActivity = localStorage.getItem('lastActivityTime')
      if (storedLastActivity) {
        const lastActivityTime = parseInt(storedLastActivity, 10)
        const currentTime = Date.now()
        const inactiveTime = currentTime - lastActivityTime
        const timeoutDuration = timeoutInMinutes * 60 * 1000

        if (inactiveTime >= timeoutDuration) {
          console.log('Session timeout on page load due to inactivity')
          logout()
        } else {
          setLastActivity(lastActivityTime)
        }
      }
    }
  }, [isAuthenticated, timeoutInMinutes, logout])

  return { resetTimeout }
}
