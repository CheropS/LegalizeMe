'use client'

import Link from 'next/link'

export default function ErrorPage({ statusCode = 404, title = "Page Not Found", message = "The page you are looking for doesn't exist or has been moved." }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">{statusCode}</h1>
        <h2 className="text-2xl text-gray-300 mb-8">{title}</h2>
        <p className="text-gray-400 mb-8">
          {message}
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
} 