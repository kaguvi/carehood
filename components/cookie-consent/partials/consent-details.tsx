import React from 'react'
import ConsentOption from './consent-option'
import { ConsentOptions } from '@/lib/types/ConsentOptions'
import PrivacyLink from './privacy-link'

function ConsentDetails(props: {
  consentOptions: ConsentOptions,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSavePreferences: () => void,
  onDeclineAll: () => void
}) {
  return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4 z-50">
    <div className="rounded-2xl p-4 bg-gray-50 w-[800px] leading-7 border-2 border-gray-200 shadow-lg">
      <h2 className="font-bold text-lg mb-4 tracking-wide">Our use of cookies</h2>
      <p>We use necessary cookies to make our site work. For cookies that are not strictly necessary for the operation of this site we need your consent. For more detailed information about the cookies we use, see our <PrivacyLink /> page.</p>

      <ConsentOption
        name="essential"
        elementTitle="Essential Cookies"
        elementDescription="Essential cookies enable core functionality such as security, network management, and
          accessibility. You may disable these by changing your browser settings, but this may affect how the website
          functions."
        checked={props.consentOptions.essential}
        onChange={props.onChange}
      />

      <ConsentOption
        name="functional"
        elementTitle="Functional Cookies"
        elementDescription="Functional cookies enable certain features and services on our website. For example, we use functional
          cookies to remember your preferences and provide enhanced, personal features."
        checked={props.consentOptions.functional}
        onChange={props.onChange}
      />
      <ConsentOption
        name="analytics"
        elementTitle="Analytics Cookies"
        elementDescription="We'd like to collect website analytics information using Google Analytics to help us improve our website. We
          collect this data by running Google Analytics javascript on your device, which collects data about how you
          have interacted with our site. The data is collected in a way that does not directly identify anyone. For more
          information please see our Cookies page."
        checked={props.consentOptions.analytics}
        onChange={props.onChange}
      />
      <ConsentOption
        name="performance"
        elementTitle="Performance Cookies"
        elementDescription="Performance cookies help us understand how visitors use our website."
        checked={props.consentOptions.performance}
        onChange={props.onChange}
      />
      <ConsentOption
        name="targeting"
        elementTitle="Targeting/Advertising Cookies"
        elementDescription="We use third-party advertising companies to serve ads when you visit our website. These companies may use
          information about your visits to this and other websites in order to provide advertisements about goods and
          services of interest to you."
        checked={props.consentOptions.targeting}
        onChange={props.onChange}
      />

      <div className="flex gap-2 mt-4 flex-row-reverse">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={props.onSavePreferences}>Save
          Preferences
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={props.onDeclineAll}>
          Decline All
        </button>
      </div>
    </div>
  </div>
}

export default ConsentDetails