import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'

import GetChartOptions from '../../utils/getChartOptions'

const HeartRateChart = () => {
  const { options } = GetChartOptions()
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HeartRateChart
