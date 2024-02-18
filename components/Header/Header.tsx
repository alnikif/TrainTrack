import React, { FC, useContext } from 'react'

import LeftArrowIcon from '../../icons/LeftArrowIcon'
import RightArrowIcon from '../../icons/RightArrowIcon'
import BurgerMenuIcon from '../../icons/burgerMenu'
import { DateContext } from '../../providers/DateProvider'
import getFormattedDate from '../../utils/getFormattedDate'
import { getNextDay } from '../../utils/getNextDay'
import { getPrevDay } from '../../utils/getPrevDay'
import Button from '../Buttons/Button/Button'
import IconButton from '../Buttons/IconButton/IconButton'
import ChartTypesDropdown from '../Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import Dropdown from '../Dropdown/DropdownComponent/Dropdown'

import HeaderDate from './HeaderDate/HeaderDate'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'

interface HeaderPropsType {
  onToggleMenu: () => void
}

const Header: FC<HeaderPropsType> = ({ onToggleMenu }) => {
  const { selectedDate, setSelectedDate } = useContext(DateContext)

  const currentDate = new Date()
  const nextDate = getNextDay(selectedDate)
  const isNextDayAvailable = new Date(getFormattedDate(nextDate)) <= new Date(getFormattedDate(currentDate))

  const onSelectPrevDay = () => {
    const prevDate = getPrevDay(selectedDate)
    setSelectedDate(prevDate)
  }

  const onSelectNextDay = () => {
    if (!isNextDayAvailable) return
    setSelectedDate(nextDate)
  }

  return (
    <div className="flex flex-row justify-between border-b border-gray-300 p-2 w-full">
      <div className="flex">
        <IconButton onClick={onToggleMenu}>
          <BurgerMenuIcon />
        </IconButton>
        <Logo />
        <Button title="Today" />
        <IconButton className="bg-blue-500 font-bold py-2 px-4 rounded focus:outline-none" onClick={onSelectPrevDay}>
          <LeftArrowIcon />
        </IconButton>
        <IconButton
          disabled={!isNextDayAvailable}
          className="bg-blue-400 font-bold py-1 px-2 rounded focus:outline-none"
          onClick={onSelectNextDay}
        >
          <RightArrowIcon />
        </IconButton>
        <HeaderDate />
      </div>
      <div>
        <NavItems />
      </div>
    </div>
  )
}

export default Header
