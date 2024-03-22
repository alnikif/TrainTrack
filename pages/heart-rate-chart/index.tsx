import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { useChart } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { useHeartRateData } from '../../providers/HeartRateDataProvider'

import getHeartRateChartOptions from './getHeartRateChartOptions'

const HeartRateChart = () => {
  const { chartType } = useChart()
  const filteredData = useHeartRateData()
  const { datesList } = useDate()

  const options = getHeartRateChartOptions(filteredData, chartType, 'Heart Rate', datesList)
  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HeartRateChart
