import { ChartDataItem } from '../types/chartData'

import { getNextDay } from './getNextDay'

const filterDataByDateRange = (dataArray: ChartDataItem[], startDate: Date, endDate: Date | null) => {
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
    const formattedEntryDateString = dateFormatter.format(new Date(item[0]))
    const formattedEntryDate = new Date(formattedEntryDateString)

    return formattedEntryDate >= formattedStartDate && formattedEntryDate < formattedEndDate
  })
}

export default filterDataByDateRange
