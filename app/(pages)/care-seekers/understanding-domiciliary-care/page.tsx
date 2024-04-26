import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Domiciliary Care'
}

const Page = async () => {
  return (
    <div className="container mx-auto px-0 leading-7">
      <h1>Understanding Domiciliary Care</h1>

      <h2>What is Domiciliary Care?</h2>
      <p>
        Domiciliary care, also known as home care, is a type of care provided to individuals in their own homes.
        It involves a wide range of services designed to support people who require assistance with daily tasks and
        personal care due to illness, disability, or old age. The primary aim of domiciliary care is to help people
        maintain their independence and quality of life while living in the comfort of their own homes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2>Benefits of Receiving Care at Home</h2>
          <p>
            Receiving care at home offers several advantages over residential care:
          </p>
          <ul className="list-disc list-outside ml-4">
            <li>Familiarity and comfort of one&apos;s own home</li>
            <li>Personalized one-to-one care</li>
            <li>Maintaining independence and control over daily routines</li>
            <li>Continuity of care with consistent caregivers</li>
            <li>Reduced risk of infection compared to care homes</li>
          </ul>
        </div>

        <div>
          <h2>Domiciliary Care vs. Residential Care</h2>
          <p>
            While both domiciliary care and residential care provide support for individuals with care needs, there are
            key differences:
          </p>
          <ul className="list-disc list-outside ml-4">
            <li>Domiciliary care is provided in the individual&apos;s own home, while residential care is provided in a
              care home setting.
            </li>
            <li>Domiciliary care allows for more personalized and flexible care plans tailored to individual needs and
              preferences.
            </li>
            <li>Residential care offers 24/7 support and may be more suitable for individuals with complex care needs or
              advanced dementia.
            </li>
          </ul>
        </div>

        <div>
          <h2>When is Domiciliary Care Appropriate?</h2>
          <p>
            Domiciliary care can be beneficial in various situations, such as:
          </p>
          <ul className="list-disc list-outside ml-4">
            <li>Elderly individuals who require assistance with daily tasks and personal care</li>
            <li>People with physical disabilities or chronic health conditions</li>
            <li>Individuals recovering from surgery or illness</li>
            <li>People with early to moderate stage dementia</li>
            <li>End-of-life care and palliative support</li>
          </ul>
        </div>

        <div>
          <h2>Supporting Independent Living</h2>
          <p>
            Domiciliary care plays a crucial role in supporting independent living by:
          </p>
          <ul className="list-disc list-outside ml-4">
            <li>Assisting with activities of daily living (ADLs) such as bathing, dressing, and meal preparation</li>
            <li>Providing companionship and social interaction</li>
            <li>Monitoring health and well-being, and liaising with healthcare professionals</li>
            <li>Enabling individuals to remain in their own homes and communities</li>
            <li>Reducing the need for hospital admissions or premature moves to residential care</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page