import { Metadata } from 'next'
import SiteBreadcrumbs from '@/components/site-breadcrumbs'
import { COMPANY_NAME } from '@/lib/constants'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: 'Legal',
    template: `%s - Legal | ${COMPANY_NAME}`
  },
}

export default function LegalLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen flex-col w-full items-start mb-2">
      <div className="max-w-6xl mx-auto pt-36">
        <SiteBreadcrumbs />
        <div className="flex justify-between space-x-8 mt-5">
          {children}
        </div>
      </div>
    </main>
  )
}