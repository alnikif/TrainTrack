import { ChartDataItem } from '../types/chartData'

const filterDataByDateRange = (dataArray: ChartDataItem[], startDate: Date, endDate: Date) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  })

  const formattedStartDate = new Date(dateFormatter.format(startDate))
  const formattedEndDate = new Date(dateFormatter.format(endDate))

  return dataArray.filter((item) => {
    const formattedEntryDateString = dateFormatter.format(new Date(item[0]))
    const formattedEntryDate = new Date(formattedEntryDateString)

    return formattedEntryDate >= formattedStartDate && formattedEntryDate < formattedEndDate
  })
}

export default filterDataByDateRange
