import LearnMoreButton from '@/components/learn-more-button'

interface HomepageFeatureProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
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