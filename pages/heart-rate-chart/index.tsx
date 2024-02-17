import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { FilterDataContext } from '../../providers/HeartRateDataProvider'
import GetChartOptions from '../../utils/getChartOptions'

const HeartRateChart = () => {
  const filteredData = useContext(FilterDataContext)
  const { chartType } = useContext(ChartTypeContext)

  const { options } = GetChartOptions(filteredData, chartType, 'Heart Rate Chart', 'Heart Rate')
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HeartRateChart
