import { useEffect, useMemo, useState } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import { useChart } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { useTrainingsData } from '../../providers/TrainingsDataProvider'
import getFormattedDate from '../../utils/getFormattedDate'

import TrainingSessionChart from './TrainingSessionChart'
import getTrainingChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { datesList, startDate } = useDate()
  const { dataMap, trainingData } = useTrainingsData()
  const { chartType } = useChart()

  const [pickedDate, setPickedDate] = useState<Date | null>(null)

  const trainingDetails = useMemo(() => {
    if (!pickedDate) return null
    return dataMap[getFormattedDate(pickedDate)]
  }, [dataMap, pickedDate])

  useEffect(() => {
    if (datesList.length === 1 && startDate) {
      setPickedDate(startDate)
    }
  }, [startDate])

  const onBarClick = (pickedPoint: any) => {
    if (datesList.length > 1) {
      const nextPickedDate = new Date(pickedPoint)
      if (!Number.isNaN(nextPickedDate.getTime())) {
        setPickedDate(new Date(pickedPoint))
      }
    }
  }

  const options = getTrainingChartOptions({
    chartType,
    trainingData,
    datesList,
    pickedDate,
    onBarClick,
  })

  return (
    <>
      <ChartTypesDropdown />
      <TrainingSessionChart options={options} />
      <ExerciseList trainingDetails={trainingDetails || []} />
    </>
  )
}

export default TrainingSessionsChart
