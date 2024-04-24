import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LearnMoreButton = ({url}: {url?: string}) => {
  if (!url) return null;

  return (
    <Button asChild className="mt-5 bg-teal-800 hover:bg-teal-700 hover:text-white absolute bottom-2">
      <Link href={url} title="Learn More">Learn More</Link>
    </Button>
  )
}

export default LearnMoreButton