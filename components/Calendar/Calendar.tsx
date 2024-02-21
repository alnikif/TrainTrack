import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { DateContext } from '../../providers/DateProvider'

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext)
  const { startDate, endDate } = selectedDate
  const [initialDate, setInitialDate] = useState(new Date())

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate((prevState) => ({
        ...prevState,
        endDate: date,
      }))
    }
  }

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates
    if (start !== null && end !== null) {
      setSelectedDate({ startDate: start, endDate: end })
    }
  }

  return (
    <DatePicker
      inline
      dateFormat="yyyy-MM-dd"
      startDate={startDate}
      endDate={endDate}
      selectsRange
      selected={endDate}
      onChange={onChange}
      onSelect={handleDateChange}
    />
  )
}

export default Calendar
