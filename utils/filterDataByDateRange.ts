import { ChartDataItem, ExerciseResult } from '../types/chartData'

import { getNextDay } from './getNextDay'

type DataArrayType = [string, unknown]

function isExerciseResultType(item: any): item is ExerciseResult {
  return 'timestamp' in item
}

const filterDataByDateRange = <T extends ExerciseResult | ChartDataItem>(
  dataArray: T[],
  startDate: Date,
  endDate: Date | null,
) => {
  const finishDate = getNextDay(endDate || startDate)
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  })

  const formattedStartDate = new Date(dateFormatter.format(startDate))
  const formattedEndDate = new Date(dateFormatter.format(finishDate))

  return dataArray.filter((item) => {
    const isExerciseResult = isExerciseResultType(item)
    const timestemp = isExerciseResult ? item.timestamp : item[0]

    const formattedEntryDateString = dateFormatter.format(new Date(timestemp))
    const formattedEntryDate = new Date(formattedEntryDateString)

    return formattedEntryDate >= formattedStartDate && formattedEntryDate < formattedEndDate
  })
}

export default filterDataByDateRange
