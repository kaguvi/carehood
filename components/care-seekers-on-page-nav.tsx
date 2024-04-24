import React from 'react'

interface CareSeekersOnPageNavProps {
  careSeekerPages: { path: string; title: string }[]
}
const CareSeekersOnPageNav: React.FC<CareSeekersOnPageNavProps> = ({ careSeekerPages }) => {
  return (
    <div className="p-0">
      <h2 className="text-2xl font-bold mb-4 text-white bg-teal-800 rounded-t-lg p-4 mb-0">Care Seekers</h2>
      <ul className="p-4 border-2 border-teal-800">
        {careSeekerPages.map((page) => (
          <li key={page.path}>
            <a href={page.path} title={page.title}>{page.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CareSeekersOnPageNav