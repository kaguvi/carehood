import LearnMoreButton from '@/components/learn-more-button'

interface SectionpageFeatureProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
  backgroundColor?: string;
  textColor?: string;
}

const SectionpageFeature: React.FC<SectionpageFeatureProps> = ({title, description, learnMoreUrl, backgroundColor = 'bg-teal-600', textColor = 'text-white'}) => {
  return (
    <div className={`sectionpage-feature rounded-lg ${backgroundColor} p-3 pb-14 ${textColor}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <LearnMoreButton url={learnMoreUrl} />
    </div>
  )
}

export default SectionpageFeature