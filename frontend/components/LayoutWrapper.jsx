'use client'

import { usePathname } from 'next/navigation'
import LayoutContent from "@/components/LayoutContent"

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  
  // Check if current path is in auth routes or counsel
  const isAuthRoute = pathname === '/login' || pathname === '/register' || pathname === '/forgot-password'
  const isCounselPage = pathname === '/counsel'

  if (isAuthRoute) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {children}
      </main>
    )
  }

  if (isCounselPage) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {children}
      </div>
    )
  }

  return (
    <LayoutContent>
      {children}
    </LayoutContent>
  )
} 