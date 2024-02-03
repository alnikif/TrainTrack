import React from 'react'

import { getTodaysMonthAndYear } from '../../../utils/dateUtils'

const HeaderDate = () => {
  const date = getTodaysMonthAndYear()
  return <span>{date}</span>
}

export default HeaderDate
