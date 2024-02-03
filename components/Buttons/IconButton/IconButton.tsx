import React, { FC } from 'react'

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
        <button className="ui grey basic button">
          <i className="angle left icon"></i>
        </button>
      )
    }
    case 'forwardArrow': {
      return (
        <button className="ui grey basic button">
          <i className="angle right icon"></i>
        </button>
      )
    }
    default: {
      return null
    }
  }
}

export default IconButton
