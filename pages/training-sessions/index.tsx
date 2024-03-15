import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useCallback, useEffect, useMemo, useState } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import { useDate } from '../../providers/DateProvider'
import { useTrainingsData } from '../../providers/TrainingsDataProvider'
import { TrainingDetails } from '../../types/chartData'
import getFormattedDate from '../../utils/getFormattedDate'

import useTrainingChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { datesList, startDate } = useDate()
  const { dataMap } = useTrainingsData()

  const [trainingDetails, setTrainingDetails] = useState<TrainingDetails[] | null>(null)

  const startDateTraining = useMemo(() => {
    const dateTrainingKey = getFormattedDate(startDate)
    return dataMap[dateTrainingKey]
  }, [dataMap, startDate])

  useEffect(() => {
    if (datesList.length === 1 && startDate) {
      setTrainingDetails(startDateTraining)
    }
  }, [datesList, startDate, startDateTraining])

  const onBarClick = useCallback(
    (pointCategory: string) => {
      const pointTraining = dataMap[pointCategory]
      const targetTraining = datesList.length > 1 ? pointTraining : startDateTraining
      setTrainingDetails(targetTraining)
    },
    [dataMap, datesList, startDateTraining],
  )

  const { options } = useTrainingChartOptions(datesList, onBarClick)

  return (
    <>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
      <ExerciseList trainingDetails={trainingDetails || []} />
    </>
  )
}

export default TrainingSessionsChart
