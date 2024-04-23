import { Metadata } from 'next'
import SiteBreadcrumbs from '@/components/site-breadcrumbs'
import { COMPANY_NAME } from '@/lib/constants'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME}`,
    template: `%s | ${COMPANY_NAME}`
  },
}

export default function PagesLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen flex-col w-full items-start">
      <div className="max-w-6xl mx-auto pt-36">
        <SiteBreadcrumbs />
        <div className="flex justify-between space-x-8 mt-5">
          {children}
        </div>
      </div>
    </main>
  )
}