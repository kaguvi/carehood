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