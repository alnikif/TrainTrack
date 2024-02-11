import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { StepsCounterContext } from '../../providers/StepsCounterDataProvider'
import GetChartOptions from '../../utils/getChartOptions'

const StepsCounterChart = () => {
  const stepsCounter = useContext(StepsCounterContext)
  const { options } = GetChartOptions(stepsCounter, 'line', 'Steps Counter Chart')
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default StepsCounterChart
