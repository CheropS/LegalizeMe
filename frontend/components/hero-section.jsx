"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"

export default function HeroSection() {
  const { isAuthenticated } = useAuth()

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-20 md:py-28">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Legal Solutions
              </span>
              <br />
              <span className="text-white">Made Simple & Accessible</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-center">
              Transform your legal experience with our AI-powered platform. From document automation to 
              smart legal assistance, we're making legal services more efficient and accessible for everyone.
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="outline"
                size="default"
                className="relative group"
                asChild
              >
                <Link href={isAuthenticated ? "/counsel" : "/register"} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <div className="relative text-white transition-all duration-300 hover:scale-105 hover:text-blue-400 text-base px-6 py-2.5">
                    {isAuthenticated ? "Chat with Counsel" : "Get Started"}
                  </div>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="default"
                className="relative group"
                asChild
              >
                <Link href="/about" className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <div className="relative text-white transition-all duration-300 hover:scale-105 hover:text-blue-400 text-base px-6 py-2.5 flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 inline-flex" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

