"use client"

import { usePathname } from 'next/navigation'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LayoutContent({ children }) {
  const pathname = usePathname()
  const isCounselPage = pathname === '/counsel'

  if (isCounselPage) {
    return children
  }

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