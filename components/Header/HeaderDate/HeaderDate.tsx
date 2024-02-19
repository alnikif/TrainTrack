import React, { useContext } from 'react'

import { DateContext } from '../../../providers/DateProvider'
import getFormattedDate from '../../../utils/getFormattedDate'

const HeaderDate = () => {
  const { selectedDate } = useContext(DateContext)
  const { startDate, endDate } = selectedDate
  return <div className="flex items-center">{getFormattedDate(endDate)}</div>
}

export default HeaderDate
