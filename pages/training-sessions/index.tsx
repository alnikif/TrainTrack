import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useContext } from 'react'

import ChartTypesDropdown from '../../components/Dropdown/ChartTypesDropdown/ChartTypesDropdown'
import { trainingData } from '../../constants/mocked-data'
import { ChartTypeContext } from '../../providers/ChartTypesProvider'
import { useDate } from '../../providers/DateProvider'
import filterDataByDateRange from '../../utils/filterDataByDateRange'

import getTrainingDataChartOptions from './getTrainingDataChartOptions'

const TrainingSessionsChart = () => {
  const { datesList, startDate, endDate } = useDate()
  const { chartType } = useContext(ChartTypeContext)
  const dateRangeData = filterDataByDateRange(trainingData, startDate, endDate)
  const { options } = getTrainingDataChartOptions(dateRangeData, chartType, 'Training Chart', 'Training', datesList)

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
