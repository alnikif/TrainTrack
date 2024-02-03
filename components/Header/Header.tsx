import React from 'react'

import Button from '../Buttons/Button/Button'
import IconButton from '../Buttons/IconButton/IconButton'

import HeaderDate from './HeaderDate/HeaderDate'
import Logo from './Logo/Logo'

const Header = () => {
  return (
    <div>
      <IconButton type="burger" />
      <Logo />
      <Button title="Today" />
      <IconButton type="backArrow" />
      <IconButton type="forwardArrow" />
      <HeaderDate />
    </div>
  )
}

export default Header
