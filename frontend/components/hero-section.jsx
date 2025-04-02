"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import useAuth from "@/hooks/useAuth"

export default function HeroSection() {
  const { isAuthenticated } = useAuth()

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-20 md:py-28">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="relative inline-block text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="relative z-10">Lubricating the wheels of justice</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 transform -rotate-1"></span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              LegalizeMe is redefining access to justice with cutting-edge tools that make legal services faster,
              smarter, and accessible for all. Every minute saved, every document generated, and every user empowered
              brings us closer to a world where justice moves swiftly for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="outline"
                size="default"
                className="bg-[#2A538D] hover:bg-[#243363] text-white text-base px-6 py-2.5 h-auto transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href={isAuthenticated ? "/counsel" : "/register"}>
                  {isAuthenticated ? "Chat with Counsel" : "Get Started"}
                </Link>
              </Button>

              <Button
                variant="outline"
                size="default"
                className="text-base px-6 py-2.5 h-auto group hover:bg-[#243363] transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/about">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

