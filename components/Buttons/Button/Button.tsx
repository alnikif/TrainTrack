import React, { FC } from 'react'

interface ButtonPropsType {
  title: string
}
const Button: FC<ButtonPropsType> = ({ title }) => {
  return (
    <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:border-blue-500">
      {title}
    </button>
  )
}

export default Button
