import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useContext } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { useHeartRateData } from '../../providers/HeartRateDataProvider'

import getHeartRateChartOptions from './getHeartRateChartOptions'

const HeartRateChart = () => {
  const filteredData = useHeartRateData()

  const { chartType } = useContext(ChartTypeContext)
  const { datesList } = useDate()
  const { options } = getHeartRateChartOptions(filteredData, chartType, 'Heart Rate Chart', 'Heart Rate', datesList)

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HeartRateChart
