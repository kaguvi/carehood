import { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: {
    default: 'Resources',
    template: `%s - Resources`
  },
}

export default function ResourcesLayout({ children }: LayoutProps) {
  return (
        <div>
          {children}
        </div>
  )
}