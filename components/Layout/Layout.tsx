import React, { ReactNode, useContext, useState } from 'react'

import { FilterDataContext } from '../../providers/FilterDataProvider'
import Calendar from '../Calendar/Calendar'
import Header from '../Header/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const containerClassName = `fixed top-16 left-0 transform transition-transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`

  const filterData = useContext(FilterDataContext)
  console.log(filterData)

  return (
    <div className="flex">
      <Header onClickToggle={handleToggle} />
      <div>
        <div className={containerClassName}>
          <Calendar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
