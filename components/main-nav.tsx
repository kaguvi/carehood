"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MenuItemData from '@/lib/types/MenuItemProps'
import MenuList from '@/components/navigation/menu-item-with-description'

const careSeekerComponents: MenuItemData[] = [
  {
    title: 'Carer Seekers',
    href: '/care-seekers',
    description: 'Information and guides for care seekers and their families.'
  },
  {
    title: 'Understanding Domiciliary Care',
    href: '/care-seekers/understanding-domiciliary-care',
    description: ''
  },
  {
    title: 'Types of Domiciliary Care Services',
    href: '/care-seekers/types-of-domiciliary-care-services',
    description: ''
  },
  {
    title: 'Choosing a Domiciliary Care Provider',
    href: '/care-seekers/choosing-a-domiciliary-care-provider',
    description: ''
  },
  {
    title: 'Care Needs Assessment',
    href: '/care-seekers/care-needs-assessment',
    description: ''
  },
  {
    title: 'Developing A Personalised Care Plan',
    href: '/care-seekers/developing-a-personalised-care-plan',
    description: ''
  }
]
const resourceComponents: MenuItemData[] = [
  {
    title: "Resources",
    href: "/resources",
    description: "Resources for carers and care providers.",
  }
]
const regulationsComponents: MenuItemData[] = [
  {
    title: "Regulations in Care",
    href: "/regulations-in-care",
    description: "Regulations on and around quality and safety of domiciliary care services in the United Kingdom",
  },
  {
    title: 'CQC Regulations For England',
    href: '/regulations-in-care/cqc-regulations',
    description: ''
  },
  {
    title: 'Regulations For Rest Of The UK',
    href: '/regulations-in-care/regulations-for-rest-of-uk',
    description: ''
  },
  {
    title: 'Health and Social Care Act 2008 (Regulated Activities) Regulations 2014',
    href: '/regulations-in-care/health-and-social-care-regulations',
    description: ''
  },
  {
    title: 'Safeguarding and Protection of Vulnerable Adults (POVA)',
    href: '/regulations-in-care/safeguarding-and-pova',
    description: ''
  },
  {
    title: 'Regulations for the Management of Medication',
    href: '/regulations-in-care/management-of-medication',
    description: ''
  },
  {
    title: 'Data Protection and Information Governance',
    href: '/regulations-in-care/data-protection-and-information-governance',
    description: ''
  },
  {
    title: 'Employment Law and Regulations',
    href: '/regulations-in-care/employment-law',
    description: ''
  }
]

const technologyInCareComponents: MenuItemData[] = [
  {
    title: "Technology",
    href: "/technology-in-home-care",
    description: "Technology in home care",
  },
  {
    title: 'Mobile Apps And Wearables',
    href: '/technology-in-home-care/mobile-apps-and-wearables',
    description: 'Mobile Apps And Wearables'
  },
  {
    title: 'Electronic Care Planning',
    href: '/technology-in-home-care/electronic-care-planning',
    description: 'Electronic Care Planning And Record Keeping'
  },
  {
    title: 'Assistive Technology And Smart Home Solutions',
    href: '/technology-in-home-care/assistive-technology-and-smart-homes',
    description: 'Assistive Technology And Smart Home Solutions'
  }
]

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <MenuList menuItems={careSeekerComponents} />
        <MenuList menuItems={resourceComponents} />
        <MenuList menuItems={regulationsComponents} />
        <MenuList menuItems={technologyInCareComponents} />
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref title="About Us">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
