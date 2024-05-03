import { render } from '@testing-library/react'
import OnPageNav from './on-page-nav'

describe('OnPageNav', () => {
  it('should render the navigation menu with the correct number of items', () => {
    const careSeekerPages = [
      { path: '/care-seekers', title: 'Care Seekers' },
      { path: '/care-seekers/understanding-domiciliary-care', title: 'Understanding Domiciliary Care' },
    ]
    const { container, getByText } = render(<OnPageNav sectionPages={careSeekerPages} title="On-Page Navigation" />)
    const navigationItems = container.querySelectorAll('li')
    expect(navigationItems.length).toBe(2)
    expect(getByText('On-Page Navigation')).toBeInTheDocument()
  })

  it('should render the navigation menu with the correct links', () => {
    const careSeekerPages = [
      { path: '/care-seekers', title: 'Care Seekers' },
      { path: '/care-seekers/understanding-domiciliary-care', title: 'Understanding Domiciliary Care' },
    ]
    const { container } = render(<OnPageNav sectionPages={careSeekerPages} />)
    const navigationLinks = container.querySelectorAll('a')
    expect(navigationLinks.length).toBe(2)
    expect(navigationLinks[0].href).toContain('/care-seekers')
    expect(navigationLinks[1].href).toContain('/care-seekers/understanding-domiciliary-care')
  })

  it('should render the navigation menu with the correct titles', () => {
    const careSeekerPages = [
      { path: '/care-seekers', title: 'Care Seekers' },
      { path: '/care-seekers/understanding-domiciliary-care', title: 'Understanding Domiciliary Care' },
    ]
    const { container } = render(<OnPageNav sectionPages={careSeekerPages} />)
    const navigationTitles = container.querySelectorAll('a')
    expect(navigationTitles.length).toBe(2)
    expect(navigationTitles[0].textContent).toBe('Care Seekers')
    expect(navigationTitles[1].textContent).toBe('Understanding Domiciliary Care')
  })

  it('renders with a custom background color', () => {
    const sectionPages = [
      { path: '#section-1', title: 'Section 1' },
      { path: '#section-2', title: 'Section 2' },
    ]
    const {getByText} = render(<OnPageNav sectionPages={sectionPages} title="On-Page Navigation" backGroundColor="blue-800" />)
    expect(getByText('On-Page Navigation')).toHaveStyle('background-color: blue-800')
  })
})