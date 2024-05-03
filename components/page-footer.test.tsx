import { render } from '@testing-library/react'
import PageFooter from './page-footer'

describe('PageFooter', () => {
  it('should render the footer with the correct elements', () => {
    const { container } = render(<PageFooter />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
    const logo = container.querySelector('a')
    expect(logo).toBeInTheDocument()
    const quickLinks = container.querySelector('h3')
    expect(quickLinks).toBeInTheDocument()
    const links = container.querySelectorAll('a')
    expect(links.length).toBe(6)
    const copyright = container.querySelector('p')
    expect(copyright).toBeInTheDocument()
    const privacyPolicyLink = container.querySelector('a[href="/privacy-policy"]')
    expect(privacyPolicyLink).toBeInTheDocument()
    const termsOfUseLink = container.querySelector('a[href="/terms-of-use"]')
    expect(termsOfUseLink).toBeInTheDocument()
  })

  it('should render the logo with the correct image and alt text', () => {
    const { container } = render(<PageFooter />)
    const logo = container.querySelector('a')
    const image = logo?.querySelector('img')
    expect(image).toBeInTheDocument()
    expect(image?.src).toContain('logo.png')
    expect(image?.alt).toBe('Care Hood')
  })

  it('should render the quick links with the correct links', () => {
    const { container } = render(<PageFooter />)
    const quickLinks = container.querySelector('h3')
    // @ts-ignore
    const links = quickLinks.parentElement.querySelectorAll('a')
    expect(links.length).toBe(3)
    expect(links[0].textContent).toBe('Care Seekers')
    expect(links[0].href).toContain('/care-seekers')
    expect(links[1].textContent).toBe('Regulations in Care')
    expect(links[1].href).toContain('/regulations-in-care')
    expect(links[2].textContent).toBe('Resources')
    expect(links[2].href).toContain('/resources')
  })

  it('should render the copyright notice with the correct year', () => {
    const { container } = render(<PageFooter />)
    const copyright = container.querySelector('p')
    expect(copyright).toBeInTheDocument()
    expect(copyright?.textContent).toContain('2024 Care Hood')
  })

  it('should render the privacy policy and terms of use links with the correct hrefs', () => {
    const { container } = render(<PageFooter />)
    const privacyPolicyLink = container.querySelector('a[href="/privacy-policy"]')
    expect(privacyPolicyLink).toBeInTheDocument()
    const termsOfUseLink = container.querySelector('a[href="/terms-of-use"]')
    expect(termsOfUseLink).toBeInTheDocument()
  })
})