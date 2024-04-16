'use client'

import clsx from 'clsx'
import { CMS_NAME } from '@/app/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavProps = {
  sections: {
    name: string
    href: string
  }[]
}

const MainNav = ({sections}:  NavProps) => {
  const pathname = usePathname()
  const isActive = (path: string): boolean => path === pathname && path === '/' || path !== '/' && pathname.startsWith(path)
  return (
    <div className="border-b-4 border-blue-900 mt-1 pb-1">
      <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-[700px] max-w-3.5xl lg:max-w-7xl md:max-w-5xl mx-auto">
        <div className="row-span-2">
          <Link href="/" title={CMS_NAME}>
            <Image
              className="h-16 w-auto"
              src="/logo.png"
              alt={CMS_NAME}
              width={300}
              height={174}
            />
          </Link>
        </div>
        <div className="col-span-2">
          <div className="text-start">
            <p className="text-sm md:text-base font-light italic">
              The only way to discover the limits of the possible is to go beyond them into the impossible. -
              <span className="font-semibold"> Arthur C. Clarke</span>
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="navigation text-center md:text-right mt-4 md:mt-0">
            <nav>
              <ul className="space-y-2 md:space-y-0 md:space-x-4 md:inline-flex">
                {sections.map((item) => (
                  <Link
                    key={item.name}
                    title={item.name}
                    href={item.href}
                    className={clsx(isActive(item.href) ? 'text-cyan-400' : 'text-blue-900 hover:bg-blue-900 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav