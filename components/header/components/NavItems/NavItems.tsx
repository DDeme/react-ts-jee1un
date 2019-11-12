import React from 'react'

import { NavItem} from './NavItem'

export const NavItems = ({items}) => {

  return <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    {
      items.map(items => <NavItem {...items}/>)
    }
    </div>
    </div> 
}