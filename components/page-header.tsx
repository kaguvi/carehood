import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const PageHeader: React.FC = () => {
  return (
    <header className="bg-white fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between shadow-lg rounded-lg max-w-6xl min-w-[850px]">
        <Link href="/" className="text-2xl font-bold text-gray-800" title="Care Hood">
          <Image src="/logo-word.png" width={300} height={75} alt="Care Hood" />
        </Link>
        <nav>
          <ul className="main-menu flex md:space-x-16 space-x-10">
            <li>
              <Link href="/care-seekers">Care Seekers</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <Button asChild className="bg-teal-800 hover:bg-teal-700 hover:text-white">
          <Link href="/find-care" title="Find Care">Find Care</Link>
        </Button>
      </div>
    </header>
  )
}

export default PageHeader