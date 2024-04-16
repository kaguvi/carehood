import React from 'react'
import Link from 'next/link'
import { COMPANY_NAME } from '@/lib/constants'
import Image from 'next/image'

const PageFooter: React.FC = () => {
  return (
    <footer className="footer bg-teal-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="flex-none w-72 mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <Image src="/logo.png" alt={COMPANY_NAME} width={150} height={200}/>
            </Link>
          </div>

          <div className="mb-8 md:mb-0"/>
          <div className="flex-none w-72 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/care-seekers" className="hover:text-gray-300">Care Seekers</Link>
              </li>
              <li>
                <Link href="/care-providers" className="hover:text-gray-300">Care Providers</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gray-300">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-400"/>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter