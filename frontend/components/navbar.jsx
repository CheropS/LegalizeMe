"use client"

import { useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"
import {
  User,
  LogOut,
  Menu,
  ChevronRight,
  Scale,
  BookOpen,
  FileText,
  Briefcase,
  Library,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "react-toastify"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setIsLoggingOut(true)
      try {
        logout()
        toast.success("You have successfully logged out.")
      } catch (error) {
        console.error("Logout failed", error)
        toast.error("Logout failed. Please try again.")
      } finally {
        setIsLoggingOut(false)
      }
    }
  }

  const navItems = [
    { name: "About Us", href: "/about", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: "Solutions", href: "/solutions", icon: <Scale className="w-4 h-4 mr-2" /> },
    { name: "Counsel", href: "/counsel", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { name: "Cases", href: "/cases", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Resources", href: "/resources", icon: <Library className="w-4 h-4 mr-2" /> },
    { name: "Pricing", href: "/pricing", icon: <CreditCard className="w-4 h-4 mr-2" /> },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group transition-transform duration-300 hover:scale-105">
            <img src="/logo.svg" alt="LegalizeMe" className="h-8 w-auto sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:text-[#2A538D] group rounded-lg hover:bg-white/5"
              >
                <div className="flex items-center space-x-1">
                  <span className="text-primary/80 group-hover:text-[#2A538D] transition-colors">
                    {item.icon}
                  </span>
                  <span className="group: hover:text-[#2A538D]">{item.name}</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link href="/profile" className="flex items-center space-x-2 group">
                  <Avatar className="h-9 w-9 ring-2 ring-primary/20 transition-all duration-300 group-hover:scale-110 hover:bg-[#243363] group-hover:ring-primary">
                    <AvatarImage src={user?.profileImage} alt={user?.name || "User"} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {user?.name?.charAt(0) || <User className="h-5 w-5" />}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <Button
                  variant="destructive"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="transition-all duration-300 hover:scale-105 hover:bg-red-500 text-sm"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                asChild
                className="bg-[#2A538D] hover:bg-[#243363] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium px-6"
              >
                <Link href="/login">Get started now</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900/95 backdrop-blur-lg border-gray-800">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-gray-800">
                  <Link href="/" className="flex items-center">
                    <img src="/logo.svg" alt="LegalizeMe" className="h-7 w-auto" />
                  </Link>
                </div>

                <nav className="flex flex-col space-y-1 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-sm font-medium text-white/90 hover:text-[#2A538D] hover:bg-white/10 rounded-lg transition-all duration-300 group"
                    >
                      <span className="text-primary/80 group-hover:text-[#2A538D] transition-colors">
                        {item.icon}
                      </span>
                      <span className="ml-3">{item.name}</span>
                      <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t border-gray-800 py-4">
                  {isAuthenticated ? (
                    <div className="space-y-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                          <AvatarImage src={user?.profileImage} alt={user?.name || "User"} />
                          <AvatarFallback className="bg-primary/10 text-primary hover:bg-[#243363]">
                            {user?.name?.charAt(0) || <User className="h-5 w-5" />}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium hover:text-[#2A538D] text-white">{user?.name || "User"}</p>
                          <Link href="/profile" className="text-xs text-gray-400 hover:text-[#2A538D] transition-colors">
                            View Profile
                          </Link>
                        </div>
                      </div>
                      <Button 
                        variant="destructive" 
                        onClick={handleLogout} 
                        disabled={isLoggingOut} 
                        className="w-full transition-all duration-300 hover:bg-red-500 hover:scale-[1.02] text-sm"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        {isLoggingOut ? "Logging out..." : "Logout"}
                      </Button>
                    </div>
                  ) : (
                    <div className="px-4">
                      <Button 
                        variant="outline"
                        asChild 
                        className="w-full bg-primary hover:bg-purple-500 text-white transition-all duration-300 hover:scale-[1.02] text-sm font-medium"
                      >
                        <Link href="/login">Get started now</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

