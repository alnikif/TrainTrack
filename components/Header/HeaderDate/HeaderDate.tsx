import React from 'react'

import { getTodaysMonthAndYear } from '../../../utils/dateUtils'

const HeaderDate = () => {
  const date = getTodaysMonthAndYear()
  return <div className="flex items-center">{date}</div>
}

export default HeaderDate
