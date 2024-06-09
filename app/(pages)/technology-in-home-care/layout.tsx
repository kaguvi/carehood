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
  },
  {
    title: 'Mobile Apps And Wearables',
    path: '/technology-in-home-care/mobile-apps-and-wearables'
  },
  {
    title: 'Electronic Care Planning',
    path: '/technology-in-home-care/electronic-care-planning'
  },
  {
    title: 'Assistive Technology And Smart Home Solutions',
    path: '/technology-in-home-care/assistive-technology-and-smart-homes'
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