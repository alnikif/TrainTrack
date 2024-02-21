import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import Chart from '../../components/Chart/Chart'
import { CaloriesDataContext } from '../../providers/CaloriesDataProvider'

const CaloriesCounterChart = () => {
  const stepsData = useContext(CaloriesDataContext)

  return <Chart data={stepsData} title="Calories Chart" />
}

export default CaloriesCounterChart
