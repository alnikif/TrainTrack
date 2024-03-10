import React, { ReactNode, useContext, useState } from 'react'

import Calendar from '../Calendar/Calendar'
import Header from '../Header/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onToggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <>
      <Header onToggleMenu={onToggleMenu} />
      <div className="flex flex-row justify-items-start w-full h-full">
        <div
          className={`transform transition-transform  duration-500 ease-in-out ${isOpen ? 'translate-x-0 w-1/6 p-3' : '-translate-x-full w-0'}`}
        >
          <Calendar />
        </div>
        <div
          className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0 w-5/6 p-3' : '-translate-x-0 w-full'}`}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
