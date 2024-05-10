import { MetadataRoute } from 'next'

const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://www.carehood.co.uk'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_BASE_URL}/care-seekers`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_BASE_URL}/care-seekers/understanding-domiciliary-care`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${SITE_BASE_URL}/care-seekers/types-of-domiciliary-care-services`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${SITE_BASE_URL}/care-seekers/care-needs-assessment`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${SITE_BASE_URL}/care-seekers/developing-a-personalised-care-plan`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${SITE_BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/cqc-regulations`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/regulations-for-rest-of-uk`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/health-and-social-care-regulations`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/safeguarding-and-pova`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/management-of-medication`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/data-protection-and-information-governance`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${SITE_BASE_URL}/regulations-in-care/employment-law`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
  ]
}