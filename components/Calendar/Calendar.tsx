import React, { useContext } from 'react'
import DatePicker from 'react-datepicker'

import { DateContext } from '../../providers/DateProvider'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext)

  return (
    <DatePicker
      inline
      dateFormat="yyyy-MM-dd"
      selected={selectedDate}
      maxDate={new Date()}
      onChange={setSelectedDate}
    />
  )
}

export default Calendar
