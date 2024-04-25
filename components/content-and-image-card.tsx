import { ReactNode } from 'react'
import LearnMoreButton from '@/components/learn-more-button'

interface ContentAndImageCardProps {
  children: ReactNode
  imageUrl: string
  backgroundSide: "left" | "right"
  learnMoreUrl?: string
}

const ContentAndImageCard: React.FC<ContentAndImageCardProps> = ({children, imageUrl, backgroundSide, learnMoreUrl}) => {
  const imageBg = <div className="opacity-10 mt-10 rounded-2xl w-1/4" style={{backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat", backgroundPositionX: "right"}} />
    return (
      <div className="flex gap-20 relative my-4">
        {backgroundSide == "left" && imageBg}
        <div className="py-2 border-2 border-teal-900 rounded-lg p-4 pb-8">
          {children}
          {learnMoreUrl && <LearnMoreButton url={learnMoreUrl} />}
        </div>
        {backgroundSide == "right" && imageBg}
      </div>
  )
}


export default ContentAndImageCard