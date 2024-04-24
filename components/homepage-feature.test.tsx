import { render } from '@testing-library/react'
import HomepageFeature from './homepage-feature'

describe('HomepageFeature', () => {
  it('should render the feature with the correct title and description', () => {
    const title = 'Care Seekers'
    const description = 'Find the best care for your loved ones.'
    const { container } = render(<HomepageFeature title={title} description={description} />)
    const feature = container.querySelector('.homepage-feature')
    expect(feature).toBeInTheDocument()
    const titleElement = feature?.querySelector('h3')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement?.textContent).toBe(title)
    const descriptionElement = feature?.querySelector('p')
    expect(descriptionElement).toBeInTheDocument()
    expect(descriptionElement?.textContent).toBe(description)
  })

  it('should render the learn more button with the correct url', () => {
    const learnMoreUrl = '/care-seekers'
    const { container } = render(<HomepageFeature title="Care Seekers" description="Find the best care for your loved ones." learnMoreUrl={learnMoreUrl} />)
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link?.href).toContain(learnMoreUrl)
  })

  it('should not render the learn more button if no url is provided', () => {
    const { container } = render(<HomepageFeature title="Care Seekers" description="Find the best care for your loved ones." />)
    const button = container.querySelector('button')
    expect(button).toBeNull()
  })
})