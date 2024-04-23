import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import MainNav from '@/components/main-nav'

const PageHeader: React.FC = () => {
  return (
    <header className="bg-transparent fixed top-0 w-full z-10">
      <div className="bg-white opacity-95 container bg-transparent mx-auto px-4 py-2 flex items-center justify-between shadow-lg rounded-lg max-w-6xl min-w-[850px]">
        <Link href="/" className="text-2xl font-bold text-gray-800" title="Care Hood">
          <Image src="/logo-word.png" width={300} height={75} alt="Care Hood" />
        </Link>
        <MainNav />
        <Button asChild className="bg-teal-800 hover:bg-teal-700 hover:text-white">
          <Link href="/find-care" title="Find Care">Find Care</Link>
        </Button>
      </div>
    </header>
  )
}

export default PageHeader