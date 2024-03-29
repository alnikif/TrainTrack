import sum from 'lodash/sum'

import { ChartDataItem } from '../../types/chartData'
import getDateFormattedTime from '../../utils/getDateFormattedTime'
import getFormattedDate from '../../utils/getFormattedDate'

const getChartSeries = (data: ChartDataItem[], yTitle: string, datesList?: string[]) => {
  if (datesList?.length === 1) {
    return [{ name: yTitle, data: data.map((item) => item[1]) }]
  }

  const dateMap = data.reduce(
    (acc: Record<string, number[]>, item) => {
      const formattedDate = getFormattedDate(item[0])
      return {
        ...acc,
        [formattedDate]: [...(acc[formattedDate] || []), item[1]],
      }
    },
    {} as Record<string, number[]>,
  )

  return [{ name: yTitle, data: Object.values(dateMap).map((item) => sum(item)) }]
}

function getHeartRateChartOptions(data: ChartDataItem[], chartType: string, yTitle: string, datesList: string[]) {
  const seriesLength = datesList.length

  const xAxisLabels = seriesLength > 1 ? datesList : data.map((item) => getDateFormattedTime(item[0]))
  const seriesData = getChartSeries(data, yTitle, datesList)

  const options = {
    chart: {
      type: chartType,
      zoomType: 'x',
    },

    title: {
      text: 'Heart Rate',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
      categories: xAxisLabels,
    },
    yAxis: {
      title: {
        text: yTitle,
      },
    },
    series: seriesData,
  }
  return options
}

export default getHeartRateChartOptions
