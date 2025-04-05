"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Search from '@/components/Search'
import VersionSelector from '@/components/VersionSelector'
import Feedback from '@/components/Feedback'
import '@/app/docs/globals.css'

export default function DocsLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 1024 && isSidebarOpen) {
        const sidebar = document.querySelector('.sidebar')
        if (sidebar && !sidebar.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
          setIsSidebarOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSidebarOpen])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="flex">
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="h-full overflow-y-auto">
            <div className="p-4 border-b border-gray-800">
              <Link href="/" className="text-xl font-bold">
                LegalizeMe
              </Link>
            </div>
            <nav className="nav-section">
              <div>
                <h3 className="nav-heading">Getting Started</h3>
                <div className="space-y-1">
                  <Link 
                    href="/docs/quick-start" 
                    className={`nav-link ${pathname === '/docs/quick-start' ? 'active' : ''}`}
                  >
                    Quick Start
                  </Link>
                  <Link 
                    href="/docs/installation" 
                    className={`nav-link ${pathname === '/docs/installation' ? 'active' : ''}`}
                  >
                    Installation
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="nav-heading">Features</h3>
                <div className="space-y-1">
                  <Link 
                    href="/docs/features/document-generation" 
                    className={`nav-link ${pathname === '/docs/features/document-generation' ? 'active' : ''}`}
                  >
                    Document Generation
                  </Link>
                  <Link 
                    href="/docs/features/legal-research" 
                    className={`nav-link ${pathname === '/docs/features/legal-research' ? 'active' : ''}`}
                  >
                    Legal Research
                  </Link>
                  <Link 
                    href="/docs/features/case-management" 
                    className={`nav-link ${pathname === '/docs/features/case-management' ? 'active' : ''}`}
                  >
                    Case Management
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="nav-heading">API Reference</h3>
                <div className="space-y-1">
                  <Link 
                    href="/docs/api/authentication" 
                    className={`nav-link ${pathname === '/docs/api/authentication' ? 'active' : ''}`}
                  >
                    Authentication
                  </Link>
                  <Link 
                    href="/docs/api/endpoints" 
                    className={`nav-link ${pathname === '/docs/api/endpoints' ? 'active' : ''}`}
                  >
                    Endpoints
                  </Link>
                  <Link 
                    href="/docs/api/rate-limits" 
                    className={`nav-link ${pathname === '/docs/api/rate-limits' ? 'active' : ''}`}
                  >
                    Rate Limits
                  </Link>
                  <Link 
                    href="/docs/api/playground" 
                    className={`nav-link ${pathname === '/docs/api/playground' ? 'active' : ''}`}
                  >
                    API Playground
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="nav-heading">Guides</h3>
                <div className="space-y-1">
                  <Link 
                    href="/docs/guides/best-practices" 
                    className={`nav-link ${pathname === '/docs/guides/best-practices' ? 'active' : ''}`}
                  >
                    Best Practices
                  </Link>
                  <Link 
                    href="/docs/guides/security" 
                    className={`nav-link ${pathname === '/docs/guides/security' ? 'active' : ''}`}
                  >
                    Security
                  </Link>
                  <Link 
                    href="/docs/guides/integration" 
                    className={`nav-link ${pathname === '/docs/guides/integration' ? 'active' : ''}`}
                  >
                    Integration
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="content">
          <div className="header">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mobile-menu-button"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="search-bar">
            <div className="search-container">
              <Search />
              <VersionSelector />
            </div>
          </div>
          <main className="main-content">{children}</main>
        </div>
      </div>

      <Feedback />
    </div>
  )
} 