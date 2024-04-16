import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CookieConsent from './cookie-consent'
import '../../__mocks__/localStorageMock'

const updateGAConsentOptionsMock = jest.fn()
jest.mock('../google-analytics', () => ({
  updateGAConsentOptions: (args: any) => updateGAConsentOptionsMock(args),
}))

describe('CookieConsent', () => {
  const CONSENT_EXPIRY_DAYS = 30

  beforeEach(() => {
    window.localStorage.clear()
    jest.clearAllMocks()
  })

  it('renders SlidingBottomBar initially', () => {
    const { queryByText } = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    expect(queryByText('We use necessary cookies to make our site work.', {exact: false})).toBeInTheDocument()
    const customiseLink = queryByText('Customise', {exact: false, selector: 'a'})
    expect(customiseLink).toBeInTheDocument()
    const acceptAllButton = queryByText('Allow all', {exact: false, selector: 'button'})
    expect(acceptAllButton).toBeInTheDocument()
  })

  it('renders ConsentDetails when Customize Settings is clicked', () => {
    const { getByText, queryByText } = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    const customiseButton = getByText('Customise', {exact: false, selector: 'a'})

    fireEvent.click(customiseButton)
    expect(queryByText('Functional Cookies')).toBeInTheDocument()
    expect(queryByText('Analytics Cookies')).toBeInTheDocument()
    expect(queryByText('Performance Cookies')).toBeInTheDocument()
    expect(queryByText('Essential Cookies')).toBeInTheDocument()
    expect(queryByText('Targeting/Advertising Cookies')).toBeInTheDocument()
    expect(
      queryByText('Save Preferences', {exact: false, selector: 'button'})
    ).toBeInTheDocument()
    expect(
      queryByText('Decline All', {exact: false, selector: 'button'})
    ).toBeInTheDocument()
  })

  it('does not show the consent modal if consent is not expired', () => {
    const consentData = {
      date: new Date().toISOString(),
      options: {
        essential: true,
        functional: true,
        analytics: true,
        performance: true,
        targeting: true,
      },
    }
    window.localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    const { queryByText } = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    expect(queryByText('We use necessary cookies to make our site work.', {exact: false})).not.toBeInTheDocument()
    expect(queryByText('Customise', {exact: false})).not.toBeInTheDocument()
  })

  it('shows the consent modal if consent is expired', () => {
    const consentData = {
      date: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * CONSENT_EXPIRY_DAYS).toISOString(),
      options: {
        essential: true,
        functional: true,
        analytics: true,
        performance: true,
        targeting: true
      }
    }
    const { queryByText } = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    expect(queryByText('We use necessary cookies to make our site work.', {exact: false})).toBeInTheDocument()
    expect(queryByText('Customise', {exact: false})).toBeInTheDocument()
  })

  it('saves the consent data when Save Preferences is clicked and calls updateGAConsentOptions', async () => {
    const {getByText, queryByText} = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    const customiseButton = getByText('Customise', {exact: false, selector: 'a'})

    fireEvent.click(customiseButton)
    expect(queryByText('Functional Cookies')).toBeInTheDocument()
    // @ts-ignore
    const functionalInput = getByText('Functional Cookies')
      // @ts-ignore
      ?.closest('label')?.nextElementSibling
    // @ts-ignore
    fireEvent.click(functionalInput)
    fireEvent.click(getByText('Save Preferences', {exact: false, selector: 'button'}))

    const consentStr = window.localStorage.getItem('cookieConsent')
    expect(consentStr).toBeTruthy()
    const parsedConsent = JSON.parse(consentStr || '{}')
    const expectedConsentOptions = {
      essential: true,
      functional: true,
      analytics: false,
      performance: false,
      targeting: false
    }
    expect(parsedConsent.options)
      .toEqual(expect.objectContaining(expectedConsentOptions))
    expect(updateGAConsentOptionsMock)
      .toHaveBeenCalledWith(expect.objectContaining(expectedConsentOptions))
  })

  it('accepts all cookies when Allow all cookies is clicked', async () => {
    const {getByText, queryByText} = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    const customiseButton = getByText('Allow all', {exact: false, selector: 'button'})

    fireEvent.click(customiseButton)

    const consentStr = window.localStorage.getItem('cookieConsent')
    expect(consentStr).toBeTruthy()
    const expectedConsentOptions = {
      essential: true,
      functional: true,
      analytics: true,
      performance: true,
      targeting: true
    }
    const parsedConsent = JSON.parse(consentStr || '{}')
    expect(parsedConsent.options).toEqual(expectedConsentOptions)
    expect(updateGAConsentOptionsMock).toHaveBeenCalledWith(expect.objectContaining(expectedConsentOptions))
  })

  it('declines all cookies when Decline all cookies is clicked and calls updateGAConsentOptions', async () => {
    const {getByText, queryByText} = render(<CookieConsent CONSENT_EXPIRY_DAYS={CONSENT_EXPIRY_DAYS} />)
    const customiseButton = getByText('Customise', {exact: false, selector: 'a'})

    fireEvent.click(customiseButton)
    fireEvent.click(getByText('Decline All', {exact: false, selector: 'button'}))

    const consentStr = window.localStorage.getItem('cookieConsent')
    expect(consentStr).toBeTruthy()
    const parsedConsent = JSON.parse(consentStr || '{}')
    const expectedConsentOptions = {
      essential: true,
      functional: false,
      analytics: false,
      performance: false,
      targeting: false
    }
    expect(parsedConsent.options)
      .toEqual(expect.objectContaining(expectedConsentOptions))
    expect(updateGAConsentOptionsMock)
      .toHaveBeenCalledWith(expect.objectContaining(expectedConsentOptions))
  })
})
