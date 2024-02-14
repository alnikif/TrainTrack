import React, { FC, ReactNode } from 'react'

interface IconButtonPropsType {
  disabled?: boolean
  className?: string
  children?: ReactNode
  onClick: () => void
}

const IconButton: FC<IconButtonPropsType> = (props) => {
  const { disabled, className, children, onClick } = props

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }

  return (
    <button className={className} disabled={disabled} onClick={onButtonClick}>
      {children}
    </button>
  )
}

export default IconButton
