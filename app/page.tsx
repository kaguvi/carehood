import Image from "next/image";
import HomepageHero from '@/components/homepage-hero'
import HomepageFeature from '@/components/homepage-feature'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-6xl mx-auto pt-28">
      <HomepageHero />
      <div className="flex justify-between space-x-4 my-4">
        <HomepageFeature
          title="Comprehensive Care Guides"
          description="Access detailed guides to understand domiciliary care and make informed decisions."
        />
        <HomepageFeature
          description="Stay informed about the importance of compliance in domiciliary care and ensure your provider meets all necessary standards."
          title="Navigating the Regulatory Landscape"
          learnMoreUrl="/compliance"
        />
      </div>
      <div className="flex justify-between space-x-4 my-4">
        <HomepageFeature
          title="Caring for Carers"
          description="If you're caring for a loved one without pay, your well-being matters too. In our 'Caring for Carers' section, find essential resources to support you. Learn about respite care options for necessary breaks, discover support groups to connect with peers, and access mental health resources to help manage your stress and well-being. Explore these tools designed to take care of you as you care for others."
          learnMoreUrl="/resources/carers"
        />
        <HomepageFeature
          title="Technology in Home Care"
          description="Technology can significantly enhance the quality and safety of domiciliary care. In our 'Technology in Home Care' section, discover how telecare systems, personal alarms, and health monitoring devices can help maintain independence and ensure safety at home. We provide practical examples of how these technologies are used to support daily living, offering peace of mind to both care recipients and their families. Explore how integrating smart solutions into home care can transform the caregiving experience."
          learnMoreUrl="/technology-in-home-care"
        />
      </div>
    </main>
  );
}
