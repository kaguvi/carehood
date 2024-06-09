# Carehood Website

This is an informational website about the domiciliary care industry.


## Components
The site uses [Next.js](https://nextjs.org/) for the front-end, with [Tailwind CSS](https://tailwindcss.com/) for styling, and [Shadcn UI (https://ui.shadcn.com/docs) components.

### Installation
Install next.js and then install shadcn
```bash
npx create-next-app@latest
npx shadcn-ui@latest init

npm install @tailwindcss/typography
```

Then to add shadcn components:
```bash
npx shadcn-ui@latest add <component-name>
# e.g.
npx shadcn-ui@latest add button
```


## Setup husky
```bash
npm install --save-dev husky
npx husky init
```
[Husky](https://typicode.github.io/husky/) is used for pre-commit linting and type checking, and [Jest](https://jestjs.com/) for unit testing.


## Reference sites
- [Age UK](https://www.ageuk.org.uk/information-advice/care/arranging-care/)
- [CQC](https://www.cqc.org.uk/about-us/transparency/using-cqc-data)
- [Homecare Association](https://www.homecareassociation.org.uk/support/content-library-search.html)
- [NHS - Help at home from a paid carer](https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/homecare/)
- [HSE - Domiciliary care provided in people's own homes](https://www.hse.gov.uk/healthservices/domiciliary-care.htm)
- [NICE - Home care: delivering personal care and practical support to older people living in their own homes](https://www.nice.org.uk/guidance/ng21/chapter/Recommendations#ensuring-safety-and-safeguarding-people-using-home-care-services)
- [NICE - Effective record keeping and ordering of medicines](https://www.nice.org.uk/about/nice-communities/social-care/quick-guides/effective-record-keeping-ordering-medicines)
- [NICE - Managing medicines for adults receiving social care in the community](https://www.nice.org.uk/guidance/NG67)
- [CQC - Regulation 12: Safe care and treatment](https://www.cqc.org.uk/guidance-providers/regulations/regulation-12-safe-care-treatment)
- [CQC - Related Regulations](https://www.cqc.org.uk/guidance-providers/regulations-enforcement/regulations-service-providers-managers-related-guidance)
- [CQC - Medicines management](https://www.cqc.org.uk/guidance-providers/adult-social-care/medicines-management)
- [CQC - Medicines information for adult social care services](https://www.cqc.org.uk/guidance-providers/adult-social-care/medicines-information-adult-social-care-services)

- [CQC Syndication API](https://api-portal.service.cqc.org.uk/api-details#api=syndication&operation=get-changes-within-timeframe)
- ![User manual for API](./docs/cqc/UserInstruction_SydnicationAuthentication.odt)


## Site ideas
- [LeadQual](https://lqdigital.com/). See lead-qual image in docs
- [Xivic](https://www.xivic.com/). See the background colour, the nav fixed at top, the lead section with default background, and the rest of the text with white background

Youtube videos:
- [Caregiving is real work](https://www.youtube.com/watch?v=XezfOVE9RFM)
