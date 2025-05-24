"use client"

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'react-toastify'

const SessionTimeoutSettings = () => {
  const { sessionTimeoutMinutes, setSessionTimeoutMinutes } = useAuth()
  const [timeoutValue, setTimeoutValue] = useState(sessionTimeoutMinutes || 43200)

  const handleSave = () => {
    // Validate input
    const timeout = parseInt(timeoutValue, 10)
    if (isNaN(timeout) || timeout < 1) {
      toast.error('Please enter a valid timeout value (minimum 1 minute)')
      return
    }

    // Save to context
    setSessionTimeoutMinutes(timeout)
    
    // Save to localStorage for persistence
    localStorage.setItem('sessionTimeoutMinutes', timeout.toString())
    localStorage.setItem('lastActivityTime', Date.now().toString())
    
    toast.success(`Session timeout updated to ${timeout} minutes`)
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="timeout" className="block text-sm text-gray-400 mb-1">
          Automatically log out after inactivity (minutes)
        </label>
        <div className="flex items-center">
          <input
            id="timeout"
            type="number"
            min="1"
            className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-white"
            value={timeoutValue}
            onChange={(e) => setTimeoutValue(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSave}
            className="ml-3 inline-flex items-center px-4 py-2 border border-white/20 text-sm font-medium rounded text-white hover:bg-white/10 focus:outline-none"
          >
            Save
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Your session will automatically end after this period of inactivity
        </p>
      </div>
    </div>
  )
}

export default SessionTimeoutSettings
