import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ConsentDetails from './consent-details'

describe('ConsentDetails', () => {
  const mockOnChange = jest.fn();
  const mockOnSavePreferences = jest.fn();
  const mockOnDeclineAll = jest.fn();
  const consentOptions = {
    essential: true,
    functional: false,
    analytics: false,
    performance: false,
    targeting: false,
  };

  beforeEach(() => {
    render(
      <ConsentDetails
        consentOptions={consentOptions}
        onChange={mockOnChange}
        onSavePreferences={mockOnSavePreferences}
        onDeclineAll={mockOnDeclineAll}
      />
    );
  });

  ['Essential Cookies', 'Functional Cookies', 'Analytics Cookies', 'Performance Cookies', 'Targeting/Advertising Cookies'].forEach(name => {
    it(`renders a ConsentOption component for ${name}`, () => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  })

  it('calls onSavePreferences when the Save Preferences button is clicked', () => {
    const savePreferencesButton = screen.getByText('Save Preferences');
    fireEvent.click(savePreferencesButton);
    expect(mockOnSavePreferences).toHaveBeenCalledTimes(1);
  });

  it('calls onDeclineAll when the Decline All button is clicked', () => {
    const declineAllButton = screen.getByText('Decline All');
    fireEvent.click(declineAllButton);
    expect(mockOnDeclineAll).toHaveBeenCalledTimes(1);
  });
});
