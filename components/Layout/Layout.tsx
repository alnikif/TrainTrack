import React, { ReactNode, useContext, useState } from 'react'

import { StepsCounterContext } from '../../providers/StepsCounterDataProvider'
import Calendar from '../Calendar/Calendar'
import Header from '../Header/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  const counterSteps = useContext(StepsCounterContext)
  console.log(counterSteps)
  return (
    <>
      <Header onClickToggle={handleToggle} />
      <div className="flex flex-row justify-items-start w-full h-full">
        <div
          className={`transform transition-transform overflow-hidden duration-500 ease-in-out ${isOpen ? 'translate-x-0 w-1/4' : '-translate-x-full w-0'}`}
        >
          <Calendar />
        </div>
        <div
          className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0 w-3/4' : '-translate-x-0 w-full'}`}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
