import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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


  // Check if the current path is an auth page
  const isAuthPage = typeof window !== 'undefined' && 
  (window.location.pathname.startsWith('/login') || 
   window.location.pathname.startsWith('/register'))

return (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
    <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </body>
  </html>
);
}
