import { ChartDataItem } from '../types/chartData'

import getDateFormattedTime from './getDateFormattedTime'

function getHeartRateChartOptions(
  data: ChartDataItem[],
  chartType: string,
  title: string,
  yTitle: string,
  highRateTitle: string,
  lowRateTitle: string,
) {
  const xAxisData = data.map((item) => getDateFormattedTime(item[0]))

  const seriesData = data.map((item) => item[1])

  const highRate = data.filter((el) => {
    return el[1] > 100
  })
  const lowRate = data.filter((el) => {
    return el[1] < 100
  })

  const options = {
    chart: {
      type: chartType,
    },
    title: {
      text: title,
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
      categories: xAxisData,
    },
    yAxis: {
      title: {
        text: yTitle,
      },
    },
    series: [
      {
        name: highRateTitle,
        data: highRate,
      },
      {
        name: lowRateTitle,
        data: lowRate,
      },
    ],
  }

  return options
}

export default getHeartRateChartOptions
