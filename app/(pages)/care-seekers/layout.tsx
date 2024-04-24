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
  }
]



export default function CareSeekersLayout({ children }: LayoutProps) {
  return (
    <>
        <div className="flex">{children}</div>
        <div className="flex-none w-72">
          <CareSeekersOnPageNav careSeekerPages={careSeekerPages} />
        </div>
      </>
  )
}