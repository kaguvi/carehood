import { Metadata } from 'next'
import MenuItemData from '@/lib/types/MenuItemProps'
import OnPageNav from '@/components/on-page-nav'

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

const regulationsComponents: MenuItemData[] = [
  {
    title: "Regulations in Care",
    path: "/regulations-in-care",
  },
  {
    title: 'CQC Regulations For England',
    path: '/regulations-in-care/cqc-regulations',
  },
  {
    title: 'Regulations for Rest of the UK',
    path: '/regulations-in-care/regulations-for-rest-of-uk',
  },
  {
    title: 'Health and Social Care Act 2008 (Regulated Activities) Regulations 2014',
    path: '/regulations-in-care/health-and-social-care-regulations'
  },
]


export default function CareSeekersLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex leading-7">{children}</div>
      <div className="flex-none w-72 leading-7">
        <OnPageNav sectionPages={regulationsComponents} title="Regulations in Care" backGroundColor='teal-600'/>
      </div>
    </>
  )
}