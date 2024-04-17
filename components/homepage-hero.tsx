import React from 'react'
import Link from 'next/link'

const HomepageHero: React.FC = () => {
  return (
    <section className="py-4 max-w-6xl">
      <div className="container flex mx-auto px-4 justify-between space-x-8">
        <div className="px-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Empowering Care, Connecting Communities
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Discover the right care for your loved ones and access resources to navigate the world of domiciliary care.
        </p>
        <div className="flex">
          <Link href="/find-care" className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 mr-4 hover:text-white">
              Find Care
          </Link>
          <Link href="/become-a-provider" className="bg-white text-teal-500 px-6 py-3 rounded hover:bg-gray-100 hover:text-teal-500">
              Become a Provider
          </Link>
        </div>
      </div>
        <div className="flex-none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XezfOVE9RFM?si=RYJA-jAxl6Q-qbrV"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}

export default HomepageHero