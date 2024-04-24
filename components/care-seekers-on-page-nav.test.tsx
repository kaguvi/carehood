import { render } from '@testing-library/react'
import CareSeekersOnPageNav from './care-seekers-on-page-nav'

describe('CareSeekersOnPageNav', () => {
  it('should render the navigation menu with the correct number of items', () => {
    const careSeekerPages = [
      { path: '/care-seekers', title: 'Care Seekers' },
      { path: '/care-seekers/understanding-domiciliary-care', title: 'Understanding Domiciliary Care' },
    ]
    const { container } = render(<CareSeekersOnPageNav careSeekerPages={careSeekerPages} />)
    const navigationItems = container.querySelectorAll('li')
    expect(navigationItems.length).toBe(2)
  })

  it('should render the navigation menu with the correct links', () => {
    const careSeekerPages = [
      { path: '/care-seekers', title: 'Care Seekers' },
      { path: '/care-seekers/understanding-domiciliary-care', title: 'Understanding Domiciliary Care' },
    ]
    const { container } = render(<CareSeekersOnPageNav careSeekerPages={careSeekerPages} />)
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
    const { container } = render(<CareSeekersOnPageNav careSeekerPages={careSeekerPages} />)
    const navigationTitles = container.querySelectorAll('a')
    expect(navigationTitles.length).toBe(2)
    expect(navigationTitles[0].textContent).toBe('Care Seekers')
    expect(navigationTitles[1].textContent).toBe('Understanding Domiciliary Care')
  })
})