import React, { FC, useContext } from 'react'
import DatePicker from 'react-datepicker'

import { DateContext } from '../../providers/DateProvider'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const { todayDate, setDate } = useContext(DateContext)

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate)
  }

  return <DatePicker selected={todayDate} onChange={handleDateChange} dateFormat="MMMM d, yyyy" inline />
}

export default Calendar
