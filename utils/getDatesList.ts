import { uniq } from 'lodash-es'

import getFormattedDate from './getFormattedDate'
import { getNextDay } from './getNextDay'

const getDatesList = (startDate: Date, endDate: Date | null) => {
  const lastDate = endDate || startDate

  const datesList: Date[] = []
  let currentDate = new Date(startDate)

  while (currentDate <= lastDate) {
    datesList.push(currentDate)
    currentDate = getNextDay(currentDate)
  }

  const formattedDatesList = datesList.map((date) => getFormattedDate(date))

  return uniq(formattedDatesList)
}

export default getDatesList
