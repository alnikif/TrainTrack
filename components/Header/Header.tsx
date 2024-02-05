import React, { FC } from 'react'

import Button from '../Buttons/Button/Button'
import IconButton from '../Buttons/IconButton/IconButton'

import HeaderDate from './HeaderDate/HeaderDate'
import Logo from './Logo/Logo'

interface HeaderPropsType {
  onClickToggle: React.MouseEventHandler<HTMLButtonElement>
}

const Header: FC<HeaderPropsType> = ({ onClickToggle }) => {
  return (
    <div className="flex border-b border-gray-300 p-2 w-full">
      <IconButton type="burger" onClick={onClickToggle} />
      <Logo />
      <Button title="Today" />
      <IconButton type="backArrow" />
      <IconButton type="forwardArrow" />
      <HeaderDate />
    </div>
  )
}

export default Header
