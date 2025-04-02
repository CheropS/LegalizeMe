import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";
import { Montserrat } from 'next/font/google'
import LayoutContent from "@/components/LayoutContent";
import GlobalBackground from "@/components/global-background";

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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
      <body className={`${montserrat.variable} font-sans min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden relative`}>
        <GlobalBackground />
        <AuthProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </AuthProvider>
      </body>
    </html>
  );
}
