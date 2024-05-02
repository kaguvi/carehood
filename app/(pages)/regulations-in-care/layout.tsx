import { Metadata } from 'next'
import CareSeekersOnPageNav from '@/components/care-seekers-on-page-nav'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: 'Regulations in Care',
    template: `%s - Regulations in Care`
  },
  description: 'Regulations play a crucial role in ensuring the quality and safety of domiciliary care services in the United Kingdom. These regulations are designed to protect the well-being of service users and to maintain high standards of care delivery.',
}



export default function CareSeekersLayout({ children }: LayoutProps) {
  return (
    <>
        <div className="flex leading-7">{children}</div>
      </>
  )
}