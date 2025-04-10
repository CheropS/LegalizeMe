'use client'

import ErrorPage from '@/components/ErrorPage'

export default function Error({ error, reset }) {
  return (
    <ErrorPage
      statusCode={500}
      title="Something went wrong!"
      message="An unexpected error occurred. Please try again later."
    />
  )
} 