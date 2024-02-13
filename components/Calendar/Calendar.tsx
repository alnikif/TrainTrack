import { subDays } from 'date-fns'
import React, { useContext } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { DateContext } from '../../providers/DateProvider'

const Calendar = () => {
  const { todayDate, setDate } = useContext(DateContext)

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate)
  }

  const yesterday = subDays(new Date(), 1)

  return (
    <DatePicker selected={todayDate} onChange={handleDateChange} maxDate={yesterday} dateFormat="yyyy-MM-dd" inline />
  )
}

export default Calendar
