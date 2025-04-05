"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search as SearchIcon, X } from 'lucide-react'

const searchResults = [
  {
    title: 'Getting Started',
    description: 'Learn how to get started with LegalizeMe',
    url: '/docs/quick-start'
  },
  {
    title: 'Document Generation',
    description: 'Generate legal documents using templates',
    url: '/docs/features/document-generation'
  },
  {
    title: 'Legal Research',
    description: 'Access comprehensive legal research tools',
    url: '/docs/features/legal-research'
  },
  {
    title: 'Case Management',
    description: 'Manage your legal cases efficiently',
    url: '/docs/features/case-management'
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and endpoints',
    url: '/docs/api/endpoints'
  }
]

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex((prev) => Math.max(prev - 1, 0))
        }
        if (e.key === 'Enter' && results[selectedIndex]) {
          window.location.href = results[selectedIndex].url
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const filteredResults = searchResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filteredResults)
    setSelectedIndex(0)
  }, [query])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/30 transition-colors"
      >
        <SearchIcon className="w-4 h-4" />
        <span>Search</span>
        <kbd className="ml-2 px-2 py-1 text-xs text-gray-400 bg-black/20 rounded border border-white/10">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-96 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center gap-2">
                <SearchIcon className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <a
                    key={result.url}
                    href={result.url}
                    className={`block px-4 py-3 hover:bg-black/30 transition-colors ${
                      index === selectedIndex ? 'bg-black/30' : ''
                    }`}
                  >
                    <div className="text-sm font-medium text-white">{result.title}</div>
                    <div className="text-xs text-gray-400">{result.description}</div>
                  </a>
                ))}
              </div>
            ) : query ? (
              <div className="p-4 text-sm text-gray-400 text-center">
                No results found
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 