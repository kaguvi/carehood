import Link from 'next/link'
import React from 'react'

interface PrivacyLinkProps {
  className?: string
}
const PrivacyLink = ({ className = 'text-blue-900 hover:text-blue-500' }: PrivacyLinkProps) => <Link className={className} href="/privacy-policy" title="Privacy Policy">Privacy Policy</Link>

export default PrivacyLink