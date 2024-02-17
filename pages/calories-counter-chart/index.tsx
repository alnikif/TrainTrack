import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { CaloriesDataContext } from '../../providers/CaloriesDataProvider'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import GetChartOptions from '../../utils/getChartOptions'

const CaloriesCounterChart = () => {
  const { chartType } = useContext(ChartTypeContext)
  const stepsData = useContext(CaloriesDataContext)
  const { options } = GetChartOptions(stepsData, chartType, 'Calories Counter Chart', 'Calories')
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default CaloriesCounterChart
