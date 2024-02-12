import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { FilterDataContext } from '../../providers/HeartRateDataProvider'
import GetChartOptions from '../../utils/getChartOptions'

const HeartRateChart = () => {
  const filteredData = useContext(FilterDataContext)

  const { options } = GetChartOptions(filteredData, 'line', 'Heart Rate Chart')
  console.log(options)
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HeartRateChart
