import * as Highcharts from 'highcharts'
import { useContext } from 'react'

import { FilterDataContext } from '../providers/FilterDataProvider'

const GetChartOptions = () => {
  const filteredData = useContext(FilterDataContext)
  const xAxisData = filteredData
    .filter((item) => typeof item[0] === 'string')
    .map((item) => {
      const date = new Date(item[0])
      return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
    })
  const options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Heart Rate Chart',
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
