import { render } from '@testing-library/react'
import PageHeader from './page-header'

describe('PageHeader', () => {
  it('should render the header with the correct elements', () => {
    const { container } = render(<PageHeader />)
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
    const logo = container.querySelector('a')
    expect(logo).toBeInTheDocument()
    const mainNav = container.querySelector('nav')
    expect(mainNav).toBeInTheDocument()
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  it('should render the logo with the correct image and alt text', () => {
    const { container } = render(<PageHeader />)
    const logo = container.querySelector('a')
    const image = logo?.querySelector('img')
    expect(image).toBeInTheDocument()
    expect(image?.src).toContain('logo-word.png')
    expect(image?.alt).toBe('Care Hood')
  })

  it('should render the main navigation with the correct links', () => {
    const { container } = render(<PageHeader />)
    const mainNav = container.querySelector('nav')
    expect(mainNav).toBeInTheDocument()
  })

  it('should render the button with the correct text and link', () => {
    const { container, queryByText } = render(<PageHeader />)
    const button = container.querySelector('a')
    const link = queryByText('Find Care', {selector: 'a'})
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/find-care')
  })
})