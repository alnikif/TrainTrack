import { ChartDataItem } from '../types/chartData'

import getDateFormattedTime from './getDateFormattedTime'

function GetChartOptions(data: ChartDataItem[], chartType: string, title: string, yTitle: string) {
  const xAxisData = data.map((item) => getDateFormattedTime(item[0]))

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
        name: yTitle,
        data: data.map((item) => {
          return item[1]
        }),
      },
    ],
  }
  return { options }
}

export default GetChartOptions
