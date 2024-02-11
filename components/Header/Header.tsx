import React, { FC } from 'react'

import Button from '../Buttons/Button/Button'
import IconButton from '../Buttons/IconButton/IconButton'

import HeaderDate from './HeaderDate/HeaderDate'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'

interface HeaderPropsType {
  onClickToggle: React.MouseEventHandler<HTMLButtonElement>
}

const Header: FC<HeaderPropsType> = ({ onClickToggle }) => {
  return (
    <div className="flex flex-row justify-between border-b border-gray-300 p-2 w-full">
      <div className="flex">
        <IconButton type="burger" onClick={onClickToggle} />
        <Logo />
        <Button title="Today" />
        <IconButton type="backArrow" />
        <IconButton type="forwardArrow" />
        <HeaderDate />
      </div>
      <div>
        <NavItems />
      </div>
    </div>
  )
}

export default Header
