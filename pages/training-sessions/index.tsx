import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext, useEffect } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { trainingData } from '../../constants/mocked-data'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { DateContext, useDate } from '../../providers/DateProvider'

import getTrainingDataChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { setDateRange, dateRange } = useContext(DateContext)

  const { chartType } = useContext(ChartTypeContext)
  const { datesList } = useDate()
  const { options } = getTrainingDataChartOptions(trainingData, chartType, 'Training Chart', 'Training', datesList)

  // useEffect(() => {
  //   setDateRange({ startDate: new Date(), endDate: null })
  // }, [])
  return (
    <>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default TrainingSessionsChart
