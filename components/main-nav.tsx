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
]
const resourceComponents: MenuItemData[] = [
  {
    title: "Resources",
    href: "/resources",
    description: "Resources for carers and care providers.",
  }
]

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <MenuList menuItems={careSeekerComponents} />
        <MenuList menuItems={resourceComponents} />
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
