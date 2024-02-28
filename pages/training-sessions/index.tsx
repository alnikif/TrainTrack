import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useContext, useEffect } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { DateContext, useDate } from '../../providers/DateProvider'
import { TrainingsDataContext } from '../../providers/TrainingsDataProvider'
import getCaloriesChartOptions from '../calories-counter-chart/getCaloriesChartOptions'

import getTrainingDataChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { setDateRange } = useContext(DateContext)
  const trainingData = useContext(TrainingsDataContext)

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
