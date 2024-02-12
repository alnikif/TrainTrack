import React from 'react'

import { navItemsConfig } from '../../../constants/navItemsConfig'
import NavItem from '../NavItem/NavItem'

export const NavItems = () => {
  return (
    <div className="flex justify-center gap-2">
      {navItemsConfig.map((el) => {
        return <NavItem href={el.url} title={el.label} key={el.url} />
      })}
    </div>
  )
}

export default NavItems
