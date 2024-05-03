import { render, screen } from '@testing-library/react'
import CustomBreadcrumb from './site-breadcrumbs'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('CustomBreadcrumb', () => {
  it('renders without crashing', () => {
    (usePathname as jest.Mock).mockReturnValue('/user/documents')
    render(<CustomBreadcrumb />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('formats breadcrumb names correctly', () => {
    (usePathname as jest.Mock).mockReturnValue('/user-profile/edit')
    render(<CustomBreadcrumb />)
    expect(screen.getByText('User Profile')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

  it('displays ellipsis for paths with more than three segments', () => {
    (usePathname as jest.Mock).mockReturnValue('/user/customer/documents/files')
    render(<CustomBreadcrumb />)
    expect(screen.getByText('...')).toBeInTheDocument()
    expect(screen.getByText('Documents')).toBeInTheDocument()
    expect(screen.getByText('Files')).toBeInTheDocument()
  })

  it('renders all segments as breadcrumbs for three or fewer segments', () => {
    (usePathname as jest.Mock).mockReturnValue('/user')
    render(<CustomBreadcrumb />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('User')).toBeInTheDocument()
  })

  it('formats uppercase names correctly', () => {
    (usePathname as jest.Mock).mockReturnValue('/cqc-regulations/edit')
    render(<CustomBreadcrumb />)
    expect(screen.getByText('CQC Regulations')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

})
