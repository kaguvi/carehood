import { Metadata } from 'next'
import OnPageNav from '@/components/on-page-nav'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: 'Technology In Home Care',
    template: `%s - Technology In Home Care`
  },
}

const technologyInHomeCarePages = [
  {
    title: 'Technology In Home Care',
    path: '/technology-in-home-care'
  }
]



export default function TechnologyInHomeCareLayout({ children }: LayoutProps) {
  return (
    <>
        <div className="flex leading-7">{children}</div>
        <div className="flex-none w-72 leading-7">
          <OnPageNav sectionPages={technologyInHomeCarePages} title="Technology In Home Care" backGroundColor='teal-50' textColor='text-gray-800' />
        </div>
      </>
  )
}