import { ChartDataItem } from '../types/chartData'

const GetChartOptions = (filteredData: ChartDataItem[], title: string) => {
  const xAxisData = filteredData
    .filter((item) => typeof item[0] === 'string')
    .map((item) => {
      const date = new Date(item[0])
      return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
    })
  const options = {
    chart: {
      type: 'line',
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
        data: filteredData.map((item) => item[1]),
      },
    ],
  }
  return { options }
}

export default GetChartOptions
