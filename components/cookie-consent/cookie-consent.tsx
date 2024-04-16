'use client'

import React, { useEffect, useState } from 'react'
import { updateGAConsentOptions } from '@/components/google-analytics'
import SlidingBottomBar from './partials/sliding-bottom-bar'
import ConsentDetails from './partials/consent-details'


const CookieConsent = ({CONSENT_EXPIRY_DAYS}: {CONSENT_EXPIRY_DAYS: number}) => {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const [consentOptions, setConsentOptions] = useState({
    essential: true,
    functional: false,
    analytics: false,
    performance: false,
    targeting: false
  })

  useEffect(() => {
    const savedDataStr = localStorage.getItem('cookieConsent')
    const savedData = savedDataStr && JSON.parse(savedDataStr)
    if (savedData) {
      const consentDate = new Date(savedData.date)
      const currentDate = new Date()
      // @ts-ignore
      const differenceInDays = (currentDate - consentDate) / (1000 * 3600 * 24)

      if (differenceInDays < CONSENT_EXPIRY_DAYS) {
        setConsentOptions(savedData.options)
      } else {
        setVisible(true)
      }
    } else {
      setVisible(true)
    }
  }, [CONSENT_EXPIRY_DAYS])

  const handleAcceptAll = () => {
    const allConsentOptions = { essential: true, functional: true, analytics: true, performance: true, targeting: true }
    const consentData = {
      date: new Date().toISOString(),
      options: allConsentOptions
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    setVisible(false)
    updateGAConsentOptions(consentData.options)
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsentOptions({
      ...consentOptions,
      [e.target.name]: e.target.checked
    })
  }

  const handleSaveConsent = () => {
    const consentData = {
      date: new Date().toISOString(),
      options: consentOptions
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    setVisible(false)
    updateGAConsentOptions(consentData.options)
  }

  const handleDeclineAll = () => {
    const essentialOnlyConsent = {
      essential: true,
      functional: false,
      analytics: false,
      performance: false,
      targeting: false
    }
    const consentData = {
      date: new Date().toISOString(),
      options: essentialOnlyConsent
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    setVisible(false)
    updateGAConsentOptions(essentialOnlyConsent)
  }

  if (!visible) return null

  return (
    <>
      <SlidingBottomBar
        onClick={() => setShowDetails(true)}
        onAcceptAll={handleAcceptAll} />

      {showDetails && (
        <ConsentDetails
          consentOptions={consentOptions}
          onChange={handleConsentChange}
          onSavePreferences={handleSaveConsent}
          onDeclineAll={handleDeclineAll}/>
      )}
    </>
  )
}

export default CookieConsent
