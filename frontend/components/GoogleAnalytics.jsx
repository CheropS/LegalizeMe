'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { Suspense } from 'react'

function GoogleAnalyticsContent({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    
    // Update page view
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsContent GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
    </Suspense>
  )
} 