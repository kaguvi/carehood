import { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: 'Care Seekers',
    template: `%s - Care Seekers`
  },
}

export default function CareSeekersLayout({ children }: LayoutProps) {
  return (
    <>
        <div className="">
          {children}
        </div>
        <div className="flex-none w-96">
          here goes
        </div>
      </>
  )
}