import Link from 'next/link'
import React from 'react'

const MainNav = () => {
  return (
    <nav>
      <ul className="main-menu flex md:space-x-16 space-x-10">
        <li><Link href="/care-seekers">Care Seekers</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/about">About Us</Link></li>
      </ul>
    </nav>
  )
}

export default MainNav