"use client"

import { usePathname } from 'next/navigation'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LayoutContent({ children }) {
  const pathname = usePathname()
  
  // Check if current path is in auth routes or counsel
  const isAuthRoute = pathname === '/login' || pathname === '/register' || pathname === '/forgot-password'
  const isCounselPage = pathname === '/counsel'

  // Return only children for auth routes and counsel page
  if (isAuthRoute || isCounselPage) {
    return children
  }

  // Return full layout for other routes
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
} 