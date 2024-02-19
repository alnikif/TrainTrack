import React, { useContext } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { DateContext } from '../../providers/DateProvider'

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext)
  const { endDate } = selectedDate

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate((prevState) => ({
        ...prevState,
        endDate: date,
      }))
    }
  }

  return (
    <DatePicker inline dateFormat="yyyy-MM-dd" selected={endDate} maxDate={new Date()} onChange={handleDateChange} />
  )
}

export default Calendar
