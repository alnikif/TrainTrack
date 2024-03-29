import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { FC, useContext } from 'react'

import { useChart } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { ChartDataItem } from '../../types/chartData'
import getChartOptions from '../../utils/getChartOptions'
import ChartTypesDropdown from '../Dropdown/ChartTypesDropdown/ChartTypesDropdown'

interface ChartPropsType {
  data: ChartDataItem[]
  title: string
  yTitle: string
}

const Chart: FC<ChartPropsType> = (props) => {
  const { data, title, yTitle } = props
  const { chartType } = useChart()
  const { datesList } = useDate()
  const { options } = getChartOptions(data, chartType, title, yTitle, datesList)

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Chart
