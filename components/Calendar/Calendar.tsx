import React from 'react'
import DatePicker from 'react-datepicker'

import { useDate } from '../../providers/DateProvider'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const { dateRange: selectedDate, setDateRange } = useDate()
  const { startDate, endDate } = selectedDate

  const onChange = ([start, end]: [Date | null, Date | null]) => {
    if (!start) return
    setDateRange({ startDate: start, endDate: end })
  }

  return (
    <DatePicker
      inline
      selectsRange
      dateFormat="yyyy-MM-dd"
      maxDate={new Date()}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
    />
  )
}

export default Calendar
