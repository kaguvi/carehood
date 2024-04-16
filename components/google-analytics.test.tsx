import React from 'react'
import { render } from '@testing-library/react'
import GoogleAnalytics from './google-analytics'
import * as NextNavigation from 'next/navigation'
import '../__mocks__/localStorageMock'

jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ children }: any) => <>{children}</>,
}))

// @ts-ignore
window.gtag = jest.fn()

// Mock the entire next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}))

describe('GoogleAnalytics Component', () => {
  beforeEach(() => {
    // Provide mock implementations for the hooks
    // @ts-ignore
    NextNavigation.usePathname.mockReturnValue('/test')
    // @ts-ignore
    NextNavigation.useSearchParams.mockReturnValue('?param=1')
    window.localStorage.setItem('cookieConsent', '{"date": "2022-01-01T00:00:00.000Z", "options": {"analytics":true,"essential":false,"functional":false,"performance":false,"targeting":false}}')
  })

  it('sends pageview when analytics consent is given', () => {
    render(<GoogleAnalytics GA_TAG_ID="GA_MEASUREMENT_ID" />)
    // @ts-ignore
    expect(window.gtag).toHaveBeenCalledWith('config', 'GA_MEASUREMENT_ID', expect.anything())
  })
})

