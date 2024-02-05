import React, { FC, useContext } from 'react'

import LeftArrowIcon from '../../../icons/LeftArrowIcon'
import RightArrowIcon from '../../../icons/RightArrowIcon'
import BurgerMenuIcon from '../../../icons/burgerMenu'
import { DateContext } from '../../../providers/DateProvider'

interface IconButtonPropsType {
  type: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton: FC<IconButtonPropsType> = ({ type, onClick }) => {
  const { todayDate, setDate } = useContext(DateContext)

  const handleNextDay = () => {
    const nextDay = new Date(todayDate)
    nextDay.setDate(nextDay.getDate() + 1)
    setDate(nextDay)
  }

  const handlePrevDay = () => {
    const prevDay = new Date(todayDate)
    prevDay.setDate(prevDay.getDate() - 1)
    setDate(prevDay)
  }

  switch (type) {
    case 'burger': {
      return (
        <button onClick={onClick}>
          <BurgerMenuIcon />
        </button>
      )
    }
    case 'backArrow': {
      return (
        <button onClick={handlePrevDay} className="bg-blue-500 font-bold py-2 px-4 rounded focus:outline-none">
          <LeftArrowIcon />
        </button>
      )
    }
    case 'forwardArrow': {
      return (
        <button onClick={handleNextDay} className="bg-blue-400 font-bold py-1 px-2 rounded focus:outline-none">
          <RightArrowIcon />
        </button>
      )
    }
    default: {
      return null
    }
  }
}

export default IconButton
