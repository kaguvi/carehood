import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SlidingBottomBar from './sliding-bottom-bar'

describe('SlidingBottomBar component', () => {
  it('renders the component with buttons', () => {
    render(<SlidingBottomBar onClick={() => {}} onAcceptAll={() => {}} />)

    expect(screen.getByText(/we use necessary cookies to make our site work/i)).toBeInTheDocument()
    expect(screen.getByText(/customise/i)).toBeInTheDocument()
    expect(screen.getByText(/allow all/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('calls onClick when the Customize Settings button is clicked', () => {
    const mockOnClick = jest.fn()
    render(<SlidingBottomBar onClick={mockOnClick} onAcceptAll={() => {}} />)

    fireEvent.click(screen.getByText(/customise/i))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('calls onAcceptAll when the Allow all cookies button is clicked', () => {
    const mockOnAcceptAll = jest.fn()
    render(<SlidingBottomBar onClick={() => {}} onAcceptAll={mockOnAcceptAll} />)

    fireEvent.click(screen.getByText(/allow all/i))
    expect(mockOnAcceptAll).toHaveBeenCalledTimes(1)
  })
})
