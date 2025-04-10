'use client'

import { Toaster as HotToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        className: 'bg-gray-800 text-white border border-gray-700',
        duration: 5000,
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151',
        },
        success: {
          className: 'bg-green-900 text-white border-green-800',
          style: {
            background: '#064e3b',
            color: '#fff',
            border: '1px solid #065f46',
          },
        },
        error: {
          className: 'bg-red-900 text-white border-red-800',
          style: {
            background: '#7f1d1d',
            color: '#fff',
            border: '1px solid #991b1b',
          },
        },
      }}
    />
  )
} 