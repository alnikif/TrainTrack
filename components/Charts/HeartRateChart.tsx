import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { HeartRateDataContext } from '../../providers/HeartRateDataProvider'
import getChartOptions from '../../utils/getChartOptions'
import getHeartRateChartOptions from '../../utils/getHeartRateChartOptions'
import Chart from '../Chart/Chart'
import ChartTypesDropdown from '../Dropdown/ChartTypesDropdown/ChartTypesDropdown'

const HeartRateChart = () => {
  const filteredData = useContext(HeartRateDataContext)

  const { chartType } = useContext(ChartTypeContext)
  const options = getHeartRateChartOptions(filteredData, chartType, 'Heart Rate', 'High', 'High Rate', 'Low Rate')

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HeartRateChart
