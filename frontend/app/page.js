import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Welcome from "@/components/sections/welcome"
import Features from "@/components/sections/features"
import Services from "@/components/sections/services"
import Brief from "@/components/sections/brief"
import Partners from "@/components/sections/partners"
import Banner from "@/components/sections/banner"
import CTA from "@/components/sections/cta"
import FAQs from "@/components/sections/faqs"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="bg-white">
        <Brief />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <Welcome />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <Features />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <Banner />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <Partners />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <CTA />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <Services />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        <FAQs />
        <hr className="mx-auto mt-10 max-w-7xl border-t border-gray-300" />

        

      </div>
    </main>
  )
}

