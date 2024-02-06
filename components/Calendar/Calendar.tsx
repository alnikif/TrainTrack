import en from 'date-fns/locale/en-GB'
import React, { useContext } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { DateContext } from '../../providers/DateProvider'

const Calendar = () => {
  const { todayDate, setDate } = useContext(DateContext)

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate)
  }

  return <DatePicker selected={todayDate} onChange={handleDateChange} locale={en} dateFormat="yyyy-MM-dd" inline />
}

export default Calendar
