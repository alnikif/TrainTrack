import React, { FC, useContext } from 'react'

import { DateContext } from '../../../providers/DateProvider'

interface ButtonPropsType {
  title: string
}
const Button: FC<ButtonPropsType> = ({ title }) => {
  const { todayDate, setDate } = useContext(DateContext)
  const handleTodayDate = () => {
    setDate(new Date())
  }
  return (
    <button
      onClick={title == 'Today' ? handleTodayDate : undefined}
      className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:border-blue-500"
    >
      {title}
    </button>
  )
}

export default Button
