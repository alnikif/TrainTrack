import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { useChart } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { HeartRateDataContext } from '../../providers/HeartRateDataProvider'
import getHeartRateChartOptions from '../../utils/getHeartRateChartOptions'

const HeartRateChart = () => {
  const { datesList } = useDate()
  const { chartType } = useChart()
  const filteredData = useContext(HeartRateDataContext)

  const options = getHeartRateChartOptions(filteredData, chartType, 'Heart Rate', 'High', datesList)

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HeartRateChart
