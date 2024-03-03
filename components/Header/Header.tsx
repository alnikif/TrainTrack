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

import HeaderDate from './HeaderDate/HeaderDate'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'

interface HeaderPropsType {
  onToggleMenu: () => void
}

const Header: FC<HeaderPropsType> = ({ onToggleMenu }) => {
  const { dateRange, setDateRange } = useContext(DateContext)
  const { startDate, endDate } = dateRange

  const currentDate = new Date()
  const nextDate = getNextDay(startDate)
  const isNextDayAvailable = new Date(getFormattedDate(nextDate)) <= new Date(getFormattedDate(currentDate))

  const onSelectPrevDay = () => {
    const prevDate = getPrevDay(startDate)
    setDateRange({ startDate: prevDate, endDate: null })
  }

  const onSelectNextDay = () => {
    if (!isNextDayAvailable) return
    setDateRange({ startDate: nextDate, endDate: null })
  }

  const handleTodayDate = () => setDateRange({ startDate: new Date(), endDate: null })

  return (
    <div className="flex flex-row justify-between border-b border-gray-300 p-2 w-full">
      <div className="flex">
        <IconButton onClick={onToggleMenu}>
          <BurgerMenuIcon />
        </IconButton>
        <Logo />
        <Button title="Today" onClick={handleTodayDate} />
        {!endDate && (
          <IconButton className="font-bold py-2 px-4 rounded focus:outline-none" onClick={onSelectPrevDay}>
            <LeftArrowIcon />
          </IconButton>
        )}
        {!endDate && (
          <IconButton
            disabled={!isNextDayAvailable}
            className={`${isNextDayAvailable ? 'text-lightGray' : ''} font-bold py-1 px-2 rounded focus:outline-none`}
            onClick={onSelectNextDay}
          >
            <RightArrowIcon />
          </IconButton>
        )}
        <HeaderDate />
      </div>
      <div>
        <NavItems />
      </div>
    </div>
  )
}

export default Header
