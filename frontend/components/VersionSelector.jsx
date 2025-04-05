"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const versions = [
  { version: 'v2.0', label: 'Latest', status: 'stable' },
  { version: 'v1.0', label: 'Legacy', status: 'deprecated' },
  { version: 'v1.1', label: 'Previous', status: 'stable' }
]

export default function VersionSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState(versions[0])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/30 transition-colors"
      >
        <span>{selectedVersion.version}</span>
        <span className={`px-2 py-1 text-xs rounded ${
          selectedVersion.status === 'stable' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {selectedVersion.status}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-48 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
        >
          {versions.map((version) => (
            <button
              key={version.version}
              onClick={() => {
                setSelectedVersion(version)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between ${
                selectedVersion.version === version.version
                  ? 'bg-black/30 text-white'
                  : 'text-gray-300 hover:bg-black/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{version.version}</span>
                <span className={`px-2 py-1 text-xs rounded ${
                  version.status === 'stable' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {version.status}
                </span>
              </div>
              {version.label && (
                <span className="text-xs text-gray-400">{version.label}</span>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
} 