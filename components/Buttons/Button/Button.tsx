import React, { FC, useContext } from 'react'

import { DateContext } from '../../../providers/DateProvider'

interface ButtonPropsType {
  title: string
  onClick: () => void
}
const Button: FC<ButtonPropsType> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:border-blue-500"
    >
      {title}
    </button>
  )
}

export default Button
