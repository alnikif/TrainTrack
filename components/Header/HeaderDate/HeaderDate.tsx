import React, { useContext } from 'react'

import { DateContext } from '../../../providers/DateProvider'
import getFormattedDate from '../../../utils/getFormattedDate'

const HeaderDate = () => {
  const { selectedDate } = useContext(DateContext)
  return <div className="flex items-center">{getFormattedDate(selectedDate)}</div>
}

export default HeaderDate
