import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { CaloriesDataContext } from '../../providers/CaloriesDataProvider'
import { useChart } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'

import getCaloriesChartOptions from './getCaloriesChartOptions'

const CaloriesCounterChart = () => {
  const caloriesData = useContext(CaloriesDataContext)

  const { chartType } = useChart()
  const { datesList } = useDate()
  const { options } = getCaloriesChartOptions(caloriesData, chartType, 'Calories Chart', 'Calories', datesList)

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default CaloriesCounterChart
