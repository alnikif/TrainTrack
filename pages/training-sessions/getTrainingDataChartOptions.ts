import { useChart } from '../../providers/ChartTypesProvider'
import { useTrainingsData } from '../../providers/TrainingsDataProvider'
import { ExerciseResult } from '../../types/chartData'
import getFormattedDate from '../../utils/getFormattedDate'

const TITLE = 'Training Chart'
const Y_TITLE = 'Training'

const getXAxisLabels = (seriesLength: number, trainingData: ExerciseResult[], datesList: string[]) => {
  if (seriesLength === 1) {
    const [_, exercises] = trainingData[0]
    return exercises.map((item) => item.title)
  }

  return datesList
}

const getSeries = (trainingData: ExerciseResult[], seriesLength: number) => {
  if (seriesLength === 1) {
    const [_, exercises] = trainingData[0]
    return [{ name: Y_TITLE, data: exercises.map((item) => item.result) }]
  }

  const dateMap = trainingData.reduce(
    (acc, item) => {
      const [timestamp, training] = item
      const formattedDate = getFormattedDate(timestamp)
      const sumArray = training.map((t) => t.sum)
      const filteredSumArray = sumArray.filter((item) => item !== undefined) as number[]
      return { ...acc, [formattedDate]: filteredSumArray }
    },
    {} as Record<string, number[]>,
  )

  return [{ name: Y_TITLE, data: Object.values(dateMap).map((item) => item[0]) }]
}

const useTrainingChartOptions = (datesList: string[], onBarClick: (pointCategory: string) => void) => {
  const { chartType } = useChart()
  const { trainingData, dataMap } = useTrainingsData()

  const seriesLength = datesList.length
  const xAxisLabels = getXAxisLabels(seriesLength, trainingData, datesList)
  const seriesData = getSeries(trainingData, seriesLength)

  console.log(trainingData, 'trainingData')

  const options = {
    chart: { type: chartType, zoomType: 'x' },
    plotOptions: {
      series: {
        events: {
          click: (event: any) => seriesLength > 1 && onBarClick(event.point.category),
        },
      },
    },
    title: { text: TITLE },
    xAxis: { type: 'datetime', title: { text: 'Date' }, categories: xAxisLabels },
    yAxis: { title: { text: Y_TITLE } },
    series: seriesData,
  }
  return { options }
}

export default useTrainingChartOptions
