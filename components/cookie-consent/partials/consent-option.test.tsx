import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConsentOption from './consent-option'

describe('ConsentOption', () => {
  test('renders with correct label and description', () => {
    const mockOnChange = jest.fn()
    render(
      <ConsentOption
        name="analytics"
        elementTitle="Analytics Cookies"
        elementDescription="These cookies help us improve our website."
        checked={false}
        onChange={mockOnChange}
      />
    )

    expect(screen.getByText("Analytics Cookies")).toBeInTheDocument()
    expect(screen.getByText("These cookies help us improve our website.")).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  test('checkbox is checked when checked prop is true', () => {
    const mockOnChange = jest.fn()
    render(
      <ConsentOption
        name="analytics"
        elementTitle="Analytics Cookies"
        elementDescription="These cookies help us improve our website."
        checked={true}
        onChange={mockOnChange}
      />
    )

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  test('onChange is called when checkbox is clicked', async () => {
    const mockOnChange = jest.fn()
    render(
      <ConsentOption
        name="analytics"
        elementTitle="Analytics Cookies"
        elementDescription="These cookies help us improve our website."
        checked={false}
        onChange={mockOnChange}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    await userEvent.click(checkbox)
    expect(mockOnChange).toHaveBeenCalled()
  })
})
