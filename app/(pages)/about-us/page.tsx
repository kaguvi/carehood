import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us'
}

const Page: React.FC = () => {
  return (
    <div className="bg-gray-50 p-5 md:p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src="/logo.png" alt="A helpful guide" className="w-full object-cover md:w-48"/>
          </div>
          <div className="px-8">
            <h1 className="mb-3">About Care Hood</h1>
            <p className="text-sm text-gray-600 mb-4">
              Care Hood is your premier online resource for navigating the complexities of domiciliary care. We are dedicated
              to providing detailed, up-to-date information and support to care providers, care seekers, and their families,
              helping them make informed decisions about home care services.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Since our inception, Care Hood has focused on bridging the gap between care needs and knowledge. We facilitate
              better understanding and access to care by compiling and disseminating essential information and resources related to the domiciliary care sector.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-sm text-gray-600">
              Our mission is to empower individuals and families by providing them with the necessary tools and knowledge to navigate
              the care landscape effectively. Whether you are seeking care for a loved one or you are a care provider looking to enhance your services,
              Care Hood is here to support you every step of the way.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-5">Why Choose Us?</h2>
            <ul className="list-disc pl-5 mb-4 text-sm text-gray-600">
              <li>Comprehensive Information: From legal considerations to the latest in care technology, we cover all facets of domiciliary care.</li>
              <li>Resources for Care Decisions: We provide guides, articles, and toolkits to help you understand and manage care arrangements.</li>
            </ul>
            <h2 className="text-xl font-semibold text-gray-800">Meet Our Team</h2>
            <p className="text-sm text-gray-600 mb-4">
              Our team consists of experts in health care, elder care, and digital information systems, all committed to
              making Care Hood a reliable and trustworthy resource for all your care needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Page
