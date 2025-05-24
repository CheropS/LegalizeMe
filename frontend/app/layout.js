import { Montserrat } from 'next/font/google'
import './globals.css'
import { AuthProvider } from "@/hooks/useAuth"
import GlobalBackground from "@/components/global-background"
import CookieBanner from '@/components/cookie-banner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Toaster } from '@/components/ui/toaster'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'LegalizeMe - Your Legal Assistant',
  description: 'AI-powered legal document generation and consultation platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/Legalizeme.svg" />
      </head>
      <body className={`${montserrat.variable} font-sans min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden relative`}>
        <GlobalBackground />
        <AuthProvider>
          <LayoutWrapper>
            {children}
            <Analytics />
          </LayoutWrapper>
        </AuthProvider>
        <CookieBanner />
        <Toaster />
        {/* <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} /> */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-3KG2ZH3Y5F" />
      </body>
    </html>
  )
}
