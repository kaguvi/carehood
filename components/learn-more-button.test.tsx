import { render } from '@testing-library/react'
import LearnMoreButton from './learn-more-button'

describe('LearnMoreButton', () => {
  it('should render a button with the correct text and link', () => {
    const url = '/care-seekers'
    const { container } = render(<LearnMoreButton url={url} />)
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link?.textContent).toBe('Learn More')
    expect(link?.href).toContain(url)
  })

  it('should not render a button if no url is provided', () => {
    const { container } = render(<LearnMoreButton />)
    const button = container.querySelector('a')
    expect(button).toBeNull()
  })
})