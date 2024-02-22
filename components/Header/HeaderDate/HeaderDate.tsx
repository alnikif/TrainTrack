import React, { useContext } from 'react'

import { DateContext } from '../../../providers/DateProvider'
import getFormattedDate from '../../../utils/getFormattedDate'

const HeaderDate = () => {
  const { dateRange: selectedDate } = useContext(DateContext)
  const { startDate } = selectedDate
  return <div className="flex items-center">{getFormattedDate(startDate)}</div>
}

export default HeaderDate
