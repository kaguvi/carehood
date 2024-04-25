import React from 'react'

const CareNeedsAssessmentPage: React.FC = async () => {
  return (
    <div className="container mx-auto px-0">
      <h1>How Care Needs Are Assessed</h1>
      <p>
        A care needs assessment is a crucial step in determining the level and type of support you or your loved one may
        require
        from domiciliary care services. This assessment helps ensure that the care provided is tailored to your specific
        needs and circumstances.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2>Purpose and Importance</h2>
          <p>
            The primary purpose of a care needs assessment is to identify:
          </p>
          <ul>
            <li>The level of assistance required with daily activities</li>
            <li>The specific care needs arising from health conditions or disabilities</li>
            <li>The most appropriate type of care and support services</li>
            <li>The individual&apos;s preferences and goals for their care</li>
          </ul>
        </div>

        <div>
          <h2>Who Conducts the Assessment?</h2>
          <p>
            Care needs assessments can be conducted by various organizations, depending on your situation:
          </p>
          <ul>
            <li>Local authorities (for those seeking local authority-funded care)</li>
            <li>National Health Service (NHS) for those with complex health needs</li>
            <li>Private care providers (for self-funded care)</li>
          </ul>
        </div>

        <div>
          <h2>Eligibility Criteria for Local Authority-Funded Care</h2>
          <p>
            To qualify for local authority-funded care, you must meet the following criteria:
          </p>
          <ul>
            <li>Have a need arising from a physical or mental impairment or illness</li>
            <li>Be unable to achieve two or more specified outcomes</li>
            <li>Have needs that significantly impact your well-being</li>
          </ul>
        </div>

        <div>
          <h2>The Assessment Process</h2>
          <p>
            During the assessment, a trained professional will:
          </p>
          <ul>
            <li>Discuss your care needs and preferences</li>
            <li>Assess your ability to perform daily activities</li>
            <li>Consider your physical, mental, and emotional well-being</li>
            <li>Evaluate your living environment and support network</li>
          </ul>
          <p>
            The assessor will then document their findings and recommendations in a care plan, which outlines the
            proposed care and support services.
          </p>
        </div>

        <div>
          <h2>Appealing the Outcome</h2>
          <p>
            If you disagree with the outcome of your care needs assessment, you have the right to appeal the decision.
            The appeals process varies depending on the organisation that conducted the assessment, but typically
            involves:
          </p>
          <ul>
            <li>Requesting a review of the decision</li>
            <li>Providing additional evidence to support your case</li>
            <li>Escalating the appeal to an independent body if necessary</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CareNeedsAssessmentPage