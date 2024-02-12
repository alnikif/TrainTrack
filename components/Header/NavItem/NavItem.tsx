import Link from 'next/link'
import React, { FC } from 'react'

interface NavItemProps {
  href: string
  title: string
}

const NavItem: FC<NavItemProps> = ({ href, title }) => {
  return (
    <div className="border border-gray-300 px-4 py-2">
      <Link href={href}>{title}</Link>
    </div>
  )
}

export default NavItem
