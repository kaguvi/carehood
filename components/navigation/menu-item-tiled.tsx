import { MenuItemProps } from '@/lib/types/MenuItemProps'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import * as React from 'react'
import ListItem from '@/components/navigation/list-item'

const MenuItem: React.FC<MenuItemProps> = ({ menuItems }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.title}
              title={menuItem.title}
              href={menuItem.href}
            >
              {menuItem.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default MenuItem