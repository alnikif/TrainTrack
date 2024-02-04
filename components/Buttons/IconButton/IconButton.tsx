import React, { FC } from 'react'

import LeftArrowIcon from '../../../icons/LeftArrowIcon'
import RightArrowIcon from '../../../icons/RightArrowIcon'
import BurgerMenuIcon from '../../../icons/burgerMenu'

interface IconButtonPropsType {
  type: string
}

const IconButton: FC<IconButtonPropsType> = ({ type }) => {
  switch (type) {
    case 'burger': {
      return (
        <button>
          <BurgerMenuIcon />
        </button>
      )
    }
    case 'backArrow': {
      return (
        <button className="bg-blue-500 font-bold py-2 px-4 rounded focus:outline-none">
          <LeftArrowIcon />
        </button>
      )
    }
    case 'forwardArrow': {
      return (
        <button className="bg-blue-400 font-bold py-1 px-2 rounded focus:outline-none">
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
