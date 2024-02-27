import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { StepsCounterContext } from '../../providers/StepsCounterDataProvider'

import getStepsChartOptions from './getStepsChartOptions'

const StepsCounterChart = () => {
  const stepsData = useContext(StepsCounterContext)

  const { chartType } = useContext(ChartTypeContext)
  const { datesList } = useDate()
  const { options } = getStepsChartOptions(stepsData, chartType, 'Calories Chart', 'Calories', datesList)

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default StepsCounterChart
