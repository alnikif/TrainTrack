import { ExerciseResult } from '../types/chartData'

import { getNextDay } from './getNextDay'

const filterDataByDateRange = (dataArray: ExerciseResult[], startDate: Date, endDate: Date | null) => {
  const finishDate = getNextDay(endDate || startDate)
  const dateFormatter = new Intl.DateTimeFormat('UTC', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  })

  const formattedStartDate = new Date(dateFormatter.format(startDate))
  const formattedEndDate = new Date(dateFormatter.format(finishDate))

  return dataArray.filter((item) => {
    const formattedEntryDateString = dateFormatter.format(new Date(item.timestamp))
    const formattedEntryDate = new Date(formattedEntryDateString)

    return formattedEntryDate >= formattedStartDate && formattedEntryDate < formattedEndDate
  })
}

export default filterDataByDateRange
