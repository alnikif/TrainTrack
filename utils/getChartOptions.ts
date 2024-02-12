import { ChartDataItem } from '../types/chartData'

import getDateFormattedTime from './getDateFormattedTime'

function GetChartOptions(data: ChartDataItem[], type: string, title: string) {
  const xAxisData = data.map((item) => getDateFormattedTime(item[0]))

  const options = {
    chart: {
      type: type,
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
        text: 'Heart Rate',
      },
    },
    series: [
      {
        name: 'Heart Rate',
        data: data.map((item) => item[1]),
      },
    ],
  }
  return { options }
}

export default GetChartOptions
