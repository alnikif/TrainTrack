import React, { useState } from 'react'

import Calendar from '../Calendar/Calendar'
import Header from '../Header/Header'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">
      <div className="w-full">
        <Header onClickToggle={handleToggle} />
        <Calendar isOpen={isOpen} />
      </div>
    </div>
  )
}

export default Layout
