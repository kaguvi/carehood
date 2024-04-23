import { render } from '@testing-library/react'
import WhatIsSocialCareVideo from './what-is-social-care-video'

describe('WhatIsSocialCareVideo', () => {
  it('should render an iframe with the correct src', () => {
    const { container } = render(<WhatIsSocialCareVideo />)
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe?.src).toBe('https://www.youtube.com/embed/sdg8AVbqSN8?si=2KwEv_Qi3Z5Hqafs')
  })
})