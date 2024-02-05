import React, { useContext } from 'react'

import { DateContext } from '../../../providers/DateProvider'
import { getTodaysMonthAndYear } from '../../../utils/dateUtils'

const HeaderDate = () => {
  const { todayDate, setDate } = useContext(DateContext)
  const date = getTodaysMonthAndYear({ todayDate })
  return <div className="flex items-center">{date}</div>
}

export default HeaderDate
