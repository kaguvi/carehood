import { render } from '@testing-library/react'
import ContentAndImageCard from './content-and-image-card'
const renderCard = (imageUrl:string, children: any = null, learnMoreUrl: string | undefined = undefined, backgroundSide: 'left' | 'right' = 'right') => {
  return render(<ContentAndImageCard imageUrl={imageUrl} backgroundSide={backgroundSide} learnMoreUrl={learnMoreUrl}>{children}</ContentAndImageCard>)
}

describe('ContentAndImageCard', () => {
  it('should render the card with the correct elements', () => {
    const imageUrl = '/image.jpg'
    const { container } = renderCard(imageUrl)
    const card = container.querySelector('.flex')
    expect(card).toBeInTheDocument()
    const image = container.querySelector('.rounded-2xl')
    expect(image).toBeInTheDocument()
    const content = container.querySelector('.border-2')
    expect(content).toBeInTheDocument()
  })

  it('should render the image with the correct background image', () => {
    const imageUrl = '/image.jpg'
    const { container } = renderCard(imageUrl)
    const image = container.querySelector('.rounded-2xl') as HTMLElement
    expect(image?.style.backgroundImage).toBe(`url(${imageUrl})`)
  })

  it('should render the content with the correct children', () => {
    const children = <p>This is the content</p>
    const { container } = renderCard("/image", children)
    const content = container.querySelector('.border-2')
    expect(content).toHaveTextContent('This is the content')
  })

  it('should render the learn more button with the correct url', () => {
    const learnMoreUrl = '/learn-more'
    const { container } = renderCard("/image", null, learnMoreUrl)
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link?.href).toContain(learnMoreUrl)
  })

  it('should render the card with the correct background side', () => {
    const imageUrl = '/image.jpg'
    const { container } = renderCard(imageUrl, null, undefined, 'left')
    const image = container.querySelector('.rounded-2xl')
    expect(image).toBeInTheDocument()
    expect((image as HTMLElement).style.backgroundPositionX).toBe('right')
  })
})