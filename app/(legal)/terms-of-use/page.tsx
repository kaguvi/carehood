import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use'
}

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-gray-100 p-5 md:p-10">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-4">Terms of Use</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-5">
        <h2 className="text-lg font-semibold">1. Use of the Website</h2>
        <p className="text-sm mt-2">
          This website is intended for personal, non-commercial use. You may not use this site for any illegal or unauthorized purpose. You must not misuse the site by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.
        </p>

        <h2 className="text-lg font-semibold mt-5">2. Intellectual Property</h2>
        <p className="text-sm mt-2">
          All content published and made available on our site is the property of Care Hood and is protected by copyright and other intellectual property laws.
        </p>

        <h2 className="text-lg font-semibold mt-5">3. Account and Security</h2>
        <p className="text-sm mt-2">
          If you choose to register for personalization features or other services, you must provide accurate and complete information and update such information when necessary.
        </p>

        <h2 className="text-lg font-semibold mt-5">4. Modifications to the Service and Prices</h2>
        <p className="text-sm mt-2">
          Prices for our services are subject to change without notice.
        </p>

        <h2 className="text-lg font-semibold mt-5">5. Links to Other Websites</h2>
        <p className="text-sm mt-2">
          Our website may contain links to third-party websites or services that are not owned or controlled by Care Hood.
        </p>

        <h2 className="text-lg font-semibold mt-5">6. Limitation of Liability</h2>
        <p className="text-sm mt-2">
          Care Hood will not be liable for any indirect, special, incidental, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2 className="text-lg font-semibold mt-5">7. Governing Law</h2>
        <p className="text-sm mt-2">
          These Terms shall be governed by and defined following the laws of the United Kingdom.
        </p>

        <h2 className="text-lg font-semibold mt-5">8. Dispute Resolution</h2>
        <p className="text-sm mt-2">
          In the event of a dispute, users agree to attempt to resolve the dispute by contacting Care Hood directly first before pursuing any other legal action.
        </p>
      </div>
    </div>
  )
}

export default TermsOfUse
