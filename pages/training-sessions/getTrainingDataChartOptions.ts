import { ChartDataItem, ExerciseData, ExerciseResult } from '../../types/chartData'
import getDateFormattedTime from '../../utils/getDateFormattedTime'

function getTrainingDataChartOptions(data: ExerciseResult[], chartType: string, title: string, yTitle: string) {
  const seriesData = data.map((series, index) => ({
    y: series.result,
    name: series.title, // Use exercise title as the name for each data point
  }))
  console.log(seriesData, 'seriesData')

  const options = {
    chart: {
      type: chartType,
      zoomType: 'x',
    },

    title: {
      text: title,
    },
    xAxis: {
      type: 'category', // Use category type since the x-axis represents exercise titles
      title: {
        text: 'Exercise',
      },
    },
    yAxis: {
      title: {
        text: yTitle,
      },
    },
    series: [
      {
        data: seriesData,
      },
    ],
  }

  return { options }
}

export default getTrainingDataChartOptions
