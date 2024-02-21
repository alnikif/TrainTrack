import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { FC, useContext } from 'react'

import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { ChartDataItem } from '../../types/chartData'
import GetChartOptions from '../../utils/getChartOptions'
import ChartTypesDropdown from '../Dropdown/ChartTypesDropdown/ChartTypesDropdown'

interface ChartPropsType {
  data: ChartDataItem[]
  title: string
}

const Chart: FC<ChartPropsType> = (props) => {
  const { chartType } = useContext(ChartTypeContext)
  const { data, title } = props
  const { options } = GetChartOptions(data, chartType, title, 'Calories')

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Chart
