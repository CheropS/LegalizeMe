import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'LegalizeMe',
  description: 'Your AI-powered legal assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Legalizeme.svg" />
      </head>
      <body className={montserrat.className}>
        {children}
        <Toaster />
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
} 