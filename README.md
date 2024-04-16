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

