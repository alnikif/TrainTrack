import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { StepsCounterContext } from '../../providers/StepsCounterDataProvider'
import GetChartOptions from '../../utils/getChartOptions'

const StepsCounterChart = () => {
  const stepsData = useContext(StepsCounterContext)
  const { chartType } = useContext(ChartTypeContext)

  const { options } = GetChartOptions(stepsData, chartType, 'Steps Counter Chart', 'Steps counter')
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default StepsCounterChart
