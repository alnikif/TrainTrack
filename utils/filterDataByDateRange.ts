import { ChartDataItem, ExerciseResult } from '../types/chartData'

import getFormattedDate from './getFormattedDate'
import { getNextDay } from './getNextDay'

const filterDataByDateRange = <T extends ExerciseResult | ChartDataItem>(
  dataArray: T[],
  startDate: Date,
  endDate: Date | null,
) => {
  const finishDate = getNextDay(endDate || startDate)
  const formattedStartDate = new Date(getFormattedDate(startDate, 'UTC'))
  const formattedEndDate = new Date(getFormattedDate(finishDate, 'UTC'))
  console.log({ finishDate, formattedEndDate, formattedStartDate, startDate, endDate })
  return dataArray.filter((item) => {
    const [timestamp] = item
    const formattedEntryDateString = getFormattedDate(new Date(timestamp))
    const formattedEntryDate = new Date(formattedEntryDateString)

    return formattedEntryDate >= formattedStartDate && formattedEntryDate < formattedEndDate
  })
}

export default filterDataByDateRange
