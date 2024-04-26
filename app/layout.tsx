import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from 'next'
import PageHeader from '@/components/page-header'
import { COMPANY_NAME } from '@/lib/constants'
import PageFooter from '@/components/page-footer'
import CookieConsent from '@/components/cookie-consent/cookie-consent'
import { Suspense } from 'react'
import GoogleAnalytics from '@/components/google-analytics'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME}`,
    template: `%s | ${COMPANY_NAME}`
  },
  description: 'Care Hood - Informational resource for the domiciliary care sector',
  keywords: 'care work, domiciliary work, care regulations, software in care',
  icons: {
    icon: [{ url: '/favicon/favicon.png' }],
    shortcut: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  },
  publisher: `${COMPANY_NAME}`,
  applicationName: `${COMPANY_NAME}`,
  referrer: 'origin-when-cross-origin',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/favicon/site.webmanifest"
}
const consentExpiryDays = parseInt(process.env.CONSENT_EXPIRY_DAYS || '2', 10)
const googleAnalyticsId = process.env.GA_TAG_ID || undefined

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
    {
      googleAnalyticsId && <Suspense>
        <GoogleAnalytics GA_TAG_ID={googleAnalyticsId} />
      </Suspense>
    }
    <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
      <div className="min-w-[850px]">
        <PageHeader />
        {children}
        <PageFooter />
        <CookieConsent CONSENT_EXPIRY_DAYS={consentExpiryDays} />
      </div>
    </body>
    </html>
  )
}

