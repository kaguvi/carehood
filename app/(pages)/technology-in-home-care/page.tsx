import SectionpageFeature from '@/components/sectionpage-feature'
import Link from 'next/link'

const TechnologyInCare = () => {
  return (
    <div className="container mx-auto px-0 py-8">
      <h1>Technology in Domiciliary Care</h1>

      <p>
        Technology plays an increasingly important role in the delivery of domiciliary care, helping to improve the quality of care, enhance communication, and support independent living for care recipients. 
        By 2050, the global population aged 60 and above is expected to reach 2 billion. As our aging population grows, so does the demand for domiciliary care.
      </p>
      <p>
        This section explores the various types of technology used in home care and their benefits for care recipients, caregivers, and providers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectionpageFeature
            title='Mobile Apps and Wearables'
            description='Wearable devices include fitness trackers, smartwatches, and medical alert systems that monitor health metrics like heart rate, activity levels, and emergency situations.'
            learnMoreUrl='/technology-in-home-care/mobile-apps-and-wearables'
            backgroundColor='bg-teal-50'
            textColor='text-gray-800'
        />

        <SectionpageFeature
            title='Assistive Technology and Smart Home Solutions'
            description='Smart home technologies like automated lighting, temperature control, and security systems enhance the living environment for patients. Devices such as smart pill dispensers and voice-activated assistants help patients manage their daily routines and medication schedules.'
            learnMoreUrl='/technology-in-home-care/assistive-technology-and-smart-homes'
            backgroundColor='bg-teal-50'
            textColor='text-gray-800'
        />

        <SectionpageFeature
            title='Electronic Care Planning and Record Keeping'
            description='Learn about the benefits of electronic care planning and record keeping software in improving the efficiency, accuracy, and security of care delivery.'
            learnMoreUrl='/technology-in-home-care/electronic-care-planning'
            backgroundColor='bg-teal-50'
            textColor='text-gray-800'
        />

        <SectionpageFeature
            title='Artificial Intelligence and Machine Learning'
            description='AI can analyse health data to predict potential health issues and suggest preventive measures, while 
             AI-driven personalised care plans and virtual companions offer tailored support and companionship to patients.'
            backgroundColor='bg-teal-50'
            textColor='text-gray-800'
        />
      </div>

    </div>
  )
}

export default TechnologyInCare