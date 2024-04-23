import { render, screen } from '@testing-library/react'
import MainNav from './main-nav'
import MenuList from '@/components/navigation/menu-item-with-description'

jest.mock('./navigation/menu-item-with-description')

describe('MainNav', () => {
  beforeEach(() => {
    // Mock the MenuList component to return a placeholder text or element for each menu item
    (MenuList as jest.Mock).mockImplementation(({ menuItems }) => (
      <div>{menuItems.map((item: any) => <div key={item.href}>{item.title}</div>)}</div>
    ))
  })

  it('renders the navigation menu with expected items from care seekers and resources', () => {
    render(<MainNav />)
    expect(screen.getByText('Carer Seekers')).toBeInTheDocument()
    expect(screen.getByText('Understanding Domiciliary Care')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('passes correct props to MenuList components', () => {
    render(<MainNav />)
    // Check first call to MenuList
    expect(MenuList).toHaveBeenCalledWith({
      menuItems: expect.arrayContaining([
        expect.objectContaining({ title: 'Carer Seekers' }),
        expect.objectContaining({ title: 'Understanding Domiciliary Care' })
      ]),
    }, expect.anything())
    // Check second call to MenuList
    expect(MenuList).toHaveBeenNthCalledWith(2, {
      menuItems: expect.arrayContaining([
        expect.objectContaining({ title: 'Resources' })
      ]),
    }, expect.anything())
  })
})
