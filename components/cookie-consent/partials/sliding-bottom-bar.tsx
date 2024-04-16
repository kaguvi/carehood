import PrivacyLink from './privacy-link'
import React  from 'react'
import Link from 'next/link'

const SlidingBottomBar = (props: { onClick: () => void, onAcceptAll: () => void }) => {
  return (
    <div
      className="fixed flex justify-between left-0 bottom-0 fixed mx-8 p-2 rounded-lg bg-gray-950 text-white shadow-2xl animate-[slideInFromBottom_0.5s_ease-out_0s_1_forwards]">
      <div className="mb-4">
        <p>We use necessary cookies to make our site work. We&apos;d also like to set analytics cookies that help us
          make improvements by measuring how you use the site. These will be set only if you accept. For more
          detailed information about the cookies we use, see our <PrivacyLink className="text-white hover:text-gray-300 font-extrabold"/> page.</p>
      </div>
      <div className="text-end p-1">
        <Link
          className="mx-3 text-white hover:text-gray-300 font-extrabold" onClick={props.onClick}
          href='#'>Customise
        </Link>
      </div>
      <div>
        <button
          className="flex-grow-0 bg-blue-600 rounded hover:bg-blue-700 text-white font-bold py-1 px-2 mx-3 min-w-[160px]"
          onClick={props.onAcceptAll}>
          Allow all
        </button>
      </div>
    </div>
  )
}

export default SlidingBottomBar