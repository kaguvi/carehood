import { ConsentOptions } from '@/lib/types/ConsentOptions'

export const getCookieConsent = (): ConsentOptions => {
  const consentStr = localStorage.getItem('cookieConsent')
  const consent = consentStr ? JSON.parse(consentStr) : undefined
  return consent ? consent.options : {
    essential: true,
    functional: false,
    analytics: false,
    performance: false,
    targeting: false
  }
};