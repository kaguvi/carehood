import { COMPANY_NAME, CONTACT_EMAIL } from '@/lib/constants'
import Link from 'next/link'

const RightTitle = ({ children }: any) => (
  <span style={{ fontWeight: 'bold' }}>{children}</span>
)

export default function Page() {
  return (
    <div className="leading-7 text-gray-800">
    <h1 className="text-3xl font-bold tracking-wider mb-2">Privacy Policy</h1>
    <section>
      <p>
        This Privacy Policy document contains types of information that is collected and recorded
        by {COMPANY_NAME} and how we use it.
      </p>
    </section>
      <section>
        <h2 className="text-lg font-semibold tracking-wide my-2 uppercase">THE TYPE OF PERSONAL INFORMATION WE COLLECT</h2>
        <p>
          We currently collect and process the following information:</p>
          <ul className="list-disc list-inside mb-3">
            <li>personal identifiers such as name, email. phone number or other factual information you give us by filling in forms on our site</li>
            <li>internet protocol (IP) addresses</li>
            <li>browser type, Internet Service Provider (ISP)</li>
            <li>date and time stamp, referring/exit pages</li>
            <li>possibly the number of clicks</li>
          </ul>
      </section>
      <section>
          <h2 className="text-lg font-semibold tracking-wide my-2 uppercase">HOW WE GET THE PERSONAL INFORMATION AND WHY WE HAVE IT</h2>
        <p>Most of the personal information we process is provided to us directly by you for one of the following reasons:</p>
        <ul className="list-disc list-inside mb-3">
          <li>when you make service enquiries on our website</li>
          <li>when you make complaints on our website</li>
        </ul>
        <p>We may also receive personal information indirectly from our partner Google Analytics. We use the information that you have given us in order to:</p>
        <ul className="list-disc list-inside mb-3">
          <li>carry out our obligations arising from your contacting us to provide you with the information that you requested from us</li>
          <li>provide you with information about other services we offer that are similar to those you enquired about or purchased from us</li>
          <li>ensure our site provides a good user experience to you</li>
        </ul>
        <p>Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for processing this information are:</p>
        <ul className="list-disc list-inside mb-3">
          <li>Your consent. You are able to remove your consent at any time. You can do this by contacting us as detailed on our <Link href="/contact-us">Contact Us</Link> page.</li>
          <li>We have a contractual obligation.</li>
          <li>We have a legitimate interest.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold tracking-wide my-2 uppercase">HOW WE STORE YOUR PERSONAL INFORMATION</h2>
        <p>Your information is securely stored. We will hold this information for the processing of any request required for any contract we have with you and for a reasonable period thereafter, not exceeding 6 years.</p>
        <p>We will review the information held on a periodic basis and delete information which we assess will no longer be required for any future dealings between you and us.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold tracking-wide my-2 uppercase">YOUR DATA PROTECTION RIGHTS</h2>
        <p>Under the UK General Data Protection Regulation (UK GDPR), you have the rights including:</p>
        <p><RightTitle>Your right of access </RightTitle> – You have the right to ask us for copies of your personal information.</p>
        <p><RightTitle>Your right to rectification</RightTitle> – You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</p>
        <p><RightTitle>Your right to erasure</RightTitle> – You have the right to ask us to erase your personal information in certain circumstances.</p>
        <p><RightTitle>Your right to restriction of processing</RightTitle> – You have the right to ask us to restrict the processing of your personal information in certain circumstances.</p>
        <p><RightTitle>Your right to object to processing</RightTitle> – You have the the right to object to the processing of your personal information in certain</p>
        <p><RightTitle>Your right to data portability</RightTitle> – You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</p>
        <p>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>
        <p>Please contact us as detailed at <Link href="/contact-us">Contact Us</Link> if you wish to make a request.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold tracking-wide my-2 uppercase">HOW TO COMPLAIN</h2>
        <p>If you have any concerns about our use of your personal information, you can make a complaint to us at {CONTACT_EMAIL}.</p>

        <p>You can also complain to the ICO if you are unhappy with how we have used your data.
          Information Commissioner’s Office
          Address: Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AFHelpline number: Phone: 0303 123 1113
          Website: https://www.ico.org.uk</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold tracking-wide my-2 uppercase">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
        <p>The legal basis for the processing of personal data in this context are Art. 6 (1) lit. c GDPR and Art. 6 (1) lit. f GDPR. Our legitimate interest is the management of the cookies and similar technologies used and the related consents.</p>
        <p>The provision of personal data is neither contractually required nor necessary for the conclusion of a contract. You are not obliged to provide the personal data. If you do not provide the personal data, we will not be able to manage your consents.</p>
      </section>
    </div>
  )
}