import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { FilterDataContext } from '../../providers/HeartRateDataProvider'
import GetChartOptions from '../../utils/getChartOptions'
import getHeartRateChartOptions from '../../utils/getHeartRateChartOptions'
import Chart from '../Chart/Chart'
import ChartTypesDropdown from '../Dropdown/ChartTypesDropdown/ChartTypesDropdown'

const HeartRateChart = () => {
  const filteredData = useContext(FilterDataContext)

  const { chartType } = useContext(ChartTypeContext)
  const options = getHeartRateChartOptions(filteredData, chartType, 'Heart Rate', 'High', 'High Rate', 'Low Rate')
  console.log(filteredData)
  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HeartRateChart
