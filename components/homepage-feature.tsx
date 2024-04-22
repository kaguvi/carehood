import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HomepageFeatureProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
}

const LearnMoreButton = ({url}: {url?: string}) => {
  if (!url) return null;

  return (
    <Button asChild className="mt-5 bg-teal-800 hover:bg-teal-700 hover:text-white absolute bottom-2">
      <Link href={url} title="Learn More">Learn More</Link>
    </Button>
  )
}
const HomepageFeature: React.FC<HomepageFeatureProps> = ({title, description, learnMoreUrl}) => {
  return (
    <div className="homepage-feature rounded-lg bg-teal-600 p-8 text-white w-1/2 relative pb-16">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p>{description}</p>
        <LearnMoreButton url={learnMoreUrl} />
    </div>
  )
}

export default HomepageFeature