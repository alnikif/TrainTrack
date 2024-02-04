import React, { FC, useContext } from 'react'
import DatePicker from 'react-datepicker'

import { DateContext } from '../../providers/DateProvider'
import 'react-datepicker/dist/react-datepicker.css'

interface CalendarPropsType {
  isOpen: boolean
}
const Calendar: FC<CalendarPropsType> = ({ isOpen }) => {
  const { todayDate, setDate } = useContext(DateContext)

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate)
  }
  const containerClassName = `fixed top-30 left-0 transform transition-transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`

  return (
    <div className={containerClassName}>
      <DatePicker selected={todayDate} onChange={handleDateChange} dateFormat="MMMM d, yyyy" inline />
    </div>
  )
}

export default Calendar
