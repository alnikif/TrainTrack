import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useContext, useState } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { trainingData } from '../../constants/mocked-data'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import { Exercise, ExerciseResult } from '../../types/chartData'
import filterDataByDateRange from '../../utils/filterDataByDateRange'

import getTrainingDataChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { datesList, startDate, endDate } = useDate()
  const { chartType } = useContext(ChartTypeContext)
  const dateRangeData = filterDataByDateRange(trainingData, startDate, endDate)
  const [selectedTraining, setSelectedTraining] = useState<Exercise[] | ExerciseResult[] | null | undefined>()

  const { options } = getTrainingDataChartOptions(
    dateRangeData,
    chartType,
    'Training Chart',
    'Training',
    datesList,
    setSelectedTraining,
  )

  return (
    <>
      <ChartTypesDropdown />
      <HighchartsReact highcharts={Highcharts} options={options} />
      {selectedTraining?.map((el, index) => {
        return (
          <div className="ml-10" key={index}>
            {el.title}
          </div>
        )
      })}
    </>
  )
}

export default TrainingSessionsChart
