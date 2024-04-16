'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ConsentOptions } from '@/lib/types/ConsentOptions'
import { getCookieConsent } from '@/lib/get-cookie-consent'

const pageview = (GA_MEASUREMENT_ID : string, url : string) => {
  // @ts-ignore
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

const toConsentString = (consent: boolean) => consent ? 'granted' : 'denied'

// @ts-ignore
export const updateGAConsentOptions = (consentOptions: ConsentOptions) => {
  // @ts-ignore
  window.gtag("consent", "update", {
    ad_storage: `${toConsentString(consentOptions.targeting)}`,
    ad_user_data: `${toConsentString(consentOptions.targeting)}`,
    ad_personalization: `${toConsentString(consentOptions.targeting)}`,
    analytics_storage: `${toConsentString(consentOptions.analytics)}`,
  })
}

export default function GoogleAnalytics({GA_TAG_ID} : {GA_TAG_ID : string}){
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    const constOptions = getCookieConsent()

    if(constOptions.analytics) {
      // @ts-ignore)
      pageview(GA_TAG_ID, url);
    }

  }, [pathname, searchParams, GA_TAG_ID])

  return (
    <>
      <Script id='google-analytics' strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'analytics_storage': 'denied',
                  'wait_for_update': 5000,
                });
                `,
              }}
      />
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}/>

      <Script id='google-analytics-2' strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', '${GA_TAG_ID}', {
                    page_path: window.location.pathname,
                });
                `,
              }}
      />
    </>
  )}


