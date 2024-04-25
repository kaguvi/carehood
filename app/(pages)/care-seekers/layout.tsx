import { Metadata } from 'next'
import CareSeekersOnPageNav from '@/components/care-seekers-on-page-nav'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: 'Care Seekers',
    template: `%s - Care Seekers`
  },
}

const careSeekerPages = [
  {
    title: 'Care Seekers',
    path: '/care-seekers'
  },
  {
    title: 'Understanding Domiciliary Care',
    path: '/care-seekers/understanding-domiciliary-care'
  },
  {
    title: 'Types of Domiciliary Care Services',
    path: '/care-seekers/types-of-domiciliary-care-services'
  },
  {
    title: 'Choosing a Domiciliary Care Provider',
    path: '/care-seekers/choosing-a-domiciliary-care-provider'
  },
]



export default function CareSeekersLayout({ children }: LayoutProps) {
  return (
    <>
        <div className="flex leading-7">{children}</div>
        <div className="flex-none w-72 leading-7">
          <CareSeekersOnPageNav careSeekerPages={careSeekerPages} />
        </div>
      </>
  )
}