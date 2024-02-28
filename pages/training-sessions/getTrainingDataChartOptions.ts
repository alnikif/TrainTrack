import { ChartDataItem, ExerciseData } from '../../types/chartData'
import getDateFormattedTime from '../../utils/getDateFormattedTime'

function getTrainingDataChartOptions(data: ExerciseData[], chartType: string, title: string, yTitle: string) {
  const xAxisLabels = data.map((item) => item[0])
  // const seriesData = data.map((item) => {
  //   const valuesData: [number] = item[1].reduce((acc: [number], value: number) => {
  //     return [...acc, value]
  //   })
  //   return valuesData
  // })
  const seriesData = data.map((item) => item[1])
  console.log(seriesData)

  const options = {
    chart: {
      type: chartType,
      zoomType: 'x',
    },

    title: {
      text: title,
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
      categories: xAxisLabels,
    },
    yAxis: {
      title: {
        text: yTitle,
      },
    },
    series: seriesData,
  }
  return { options }
}

export default getTrainingDataChartOptions
