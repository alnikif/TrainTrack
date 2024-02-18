import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { FC, useContext } from 'react'

import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { ChartDataItem } from '../../types/chartData'
import GetChartOptions from '../../utils/getChartOptions'
import ChartTypesDropdown from '../Dropdown/ChartTypesDropdown/ChartTypesDropdown'

interface ChartPropsType {
  data: ChartDataItem[]
}

const Chart: FC<ChartPropsType> = (props) => {
  const { chartType } = useContext(ChartTypeContext)
  const { data } = props
  const { options } = GetChartOptions(data, chartType, 'Calories Counter Chart', 'Calories')

  return (
    <div>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Chart
