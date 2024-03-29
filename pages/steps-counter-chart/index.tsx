import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { useChart } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { StepsCounterContext } from '../../providers/StepsCounterDataProvider'

import getStepsChartOptions from './getStepsChartOptions'

const StepsCounterChart = () => {
  const stepsData = useContext(StepsCounterContext)
  const { chartType } = useChart()
  const { datesList } = useDate()
  const { options } = getStepsChartOptions(stepsData, chartType, 'Steps Counter Chart', 'Calories', datesList)
  console.log(options)
  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default StepsCounterChart
