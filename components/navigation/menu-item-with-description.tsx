import { MenuItemProps } from '@/lib/types/MenuItemProps'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import ListItem from '@/components/navigation/list-item'
import * as React from 'react'

const MenuItem: React.FC<MenuItemProps> = ({ menuItems }) => {
  const [headerItem, ...childItems] = menuItems
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{headerItem.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
    <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-8">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href={headerItem.href}
            title={headerItem.title}
          >
            <div className="mb-2 mt-4 text-lg font-medium">{headerItem.title}</div>
            <p className="text-sm leading-tight text-muted-foreground">{headerItem.description}</p>
          </a>
        </NavigationMenuLink>
      </li>
      {
        childItems.map((component, index) => (
          <ListItem key={`${headerItem.href.replace('/', '')}-${index}`} href={component.href} title={component.title}>
            {component.description}
          </ListItem>
        ))
      }
    </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default MenuItem
