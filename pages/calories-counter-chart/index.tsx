import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { CaloriesDataContext } from '../../providers/CaloriesDataProvider'
import GetChartOptions from '../../utils/getChartOptions'

const CaloriesCounterChart = () => {
  const stepsData = useContext(CaloriesDataContext)
  const { options } = GetChartOptions(stepsData, 'line', 'Calories Counter Chart')
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default CaloriesCounterChart
