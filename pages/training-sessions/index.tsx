import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext, useEffect } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { trainingData } from '../../constants/mocked-data'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { DateContext } from '../../providers/DateProvider'

import getTrainingDataChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { setDateRange } = useContext(DateContext)

  const { chartType } = useContext(ChartTypeContext)
  const { options } = getTrainingDataChartOptions(trainingData, chartType, 'Training Chart', 'Training')

  useEffect(() => {
    setDateRange({ startDate: new Date(), endDate: null })
  }, [])
  return (
    <>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default TrainingSessionsChart
