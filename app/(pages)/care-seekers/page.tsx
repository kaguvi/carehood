import WhatIsSocialCareVideo from '@/components/what-is-social-care-video'
import ContentAndImageCard from '@/components/content-and-image-card'

const CareSeekersHome = async () => {
  return (
    <div>
      <WhatIsSocialCareVideo/>
      <div className="container mx-auto px-4 py-8">
        <h1>Care Seekers</h1>
        <p>
          Explore our resources to understand domiciliary care, find the right provider, and navigate the care needs
          assessment process.
        </p>


          <ContentAndImageCard
            imageUrl="/images/heart-in-hand-150.png"
            backgroundSide='right'
            learnMoreUrl="/care-seekers/understanding-domiciliary-care"
            >
              <h2>Understanding Domiciliary Care</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Definition and scope of domiciliary care</li>
                <li>Benefits of receiving care at home</li>
                <li>Differences between domiciliary care and residential care</li>
                <li>Situations where domiciliary care is appropriate</li>
                <li>How domiciliary care supports independent living</li>
              </ul>
          </ContentAndImageCard>

          <ContentAndImageCard
            imageUrl="/images/heart-in-palms-150.png"
            backgroundSide='left'
            learnMoreUrl="/care-seekers/types-of-domiciliary-care"
            >
            <h2>Types of Domiciliary Care Services</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Personal care (bathing, dressing, toileting, etc.)</li>
              <li>Medication management and administration</li>
              <li>Meal preparation and nutrition support</li>
              <li>Housekeeping and domestic tasks</li>
              <li>Companionship and social support</li>
              <li>Specialized care for conditions like dementia, Parkinson&apos;s, or stroke</li>
            </ul>
          </ContentAndImageCard>

          <ContentAndImageCard
          imageUrl="images/heart-in-hand-150.png"
          backgroundSide="right"
          learnMoreUrl="/care-seekers/choosing-a-provider"
          >
            <h2>Choosing a Domiciliary Care Provider</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Factors to consider when selecting a provider</li>
              <li>Researching and comparing providers in your area</li>
              <li>Understanding Care Quality Commission (CQC) ratings and inspection reports</li>
              <li>Questions to ask potential providers</li>
              <li>Arranging an assessment of care needs</li>
              <li>Transitioning to domiciliary care services</li>
            </ul>
          </ContentAndImageCard>

          <ContentAndImageCard
          imageUrl="images/heart-in-palms-150.png"
          backgroundSide="left"
          learnMoreUrl="/care-seekers/care-needs-assessment"
          >
            <h2>Care Needs Assessment Process</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Purpose and importance of a care needs assessment</li>
              <li>Who conducts the assessment (local authorities, NHS, or private providers)</li>
              <li>Eligibility criteria for local authority-funded care</li>
              <li>What to expect during the assessment process</li>
              <li>How care needs are determined and documented</li>
              <li>Appealing the outcome of an assessment</li>
            </ul>
          </ContentAndImageCard>

          <ContentAndImageCard
          imageUrl="/images/heart-in-hand-150.png"
          backgroundSide="right"
          learnMoreUrl="/care-seekers/care-planning"
          >
            <h2>Developing a Personalised Care Plan</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>What is a care plan and why is it important?</li>
              <li>Elements of a comprehensive care plan</li>
              <li>Involving the care recipient and family in care planning</li>
              <li>Setting goals and objectives for care</li>
              <li>Reviewing and updating the care plan regularly</li>
              <li>Ensuring the care plan is person-centered and promotes independence</li>
            </ul>
          </ContentAndImageCard>
        </div>
    </div>
  )
}

export default CareSeekersHome