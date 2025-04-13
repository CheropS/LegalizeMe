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
import UseCases from "@/components/sections/use-cases"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <hr className="mx-auto mt-0 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />
      <div>
        <UseCases />
        <hr className="mx-auto mt-6 sm:mt-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <Brief />
        <hr className="mx-auto mt-6 sm:mt-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <Welcome />
        <hr className="mx-auto mt-6 sm:mt-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <Features />
        <hr className="mx-auto mt-6 sm:mt-10 mb-6 sm:mb-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <Banner />
        <hr className="mx-auto mt-6 sm:mt-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <Partners />
        <hr className="mx-auto mt-0 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <CTA />
        <hr className="mx-auto mt-6 sm:mt-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <Services />
        <hr className="mx-auto mt-6 sm:mt-10 max-w-[200px] sm:max-w-md border-t border-gray-300/50" />

        <FAQs />
      </div>
    </main>
  )
}

