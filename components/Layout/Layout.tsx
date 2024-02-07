import React, { ReactNode, useEffect, useState } from 'react'

import Calendar from '../Calendar/Calendar'
import HeartRateChart from '../Charts/HeartRateChart'
import Header from '../Header/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const containerClassName = `fixed top-16 left-0 transform transition-transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`
  const [chartWidth, setChartWidth] = useState('full')

  useEffect(() => {
    setChartWidth(isOpen ? '4/6' : 'full')
  }, [isOpen])
  return (
    <div className="flex flex-col">
      <Header onClickToggle={handleToggle} />
      <div className="flex flex-row justify-around">
        <div>
          <div className={containerClassName}>
            <Calendar />
          </div>
        </div>
        <div className={`chart-container w-${chartWidth} h-400px transition-width duration-500 ease-in-out`}>
          <HeartRateChart />
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Layout
