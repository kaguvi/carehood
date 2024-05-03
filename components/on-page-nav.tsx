import React from 'react'
import Link from 'next/link'

interface OnPageNavProps {
  sectionPages: { path: string; title: string }[]
  title: string
  backGroundColor?: string
}

const OnPageNav: React.FC<OnPageNavProps> = ({ sectionPages, title, backGroundColor= 'teal-800' }) => {
  return (
    <div className="p-0 text-sm">
      <h2 className={`text-white bg-${backGroundColor} rounded-t-lg p-4 mb-0`}>{title}</h2>
      <ul className={`p-4 border-2 border-${backGroundColor} mt-0 list-none ml-0`}>
        {sectionPages.map((page) => (
          <li key={page.path} className="border-b border-gray-100 py-1">
            <Link href={page.path} title={page.title}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OnPageNav