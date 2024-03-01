import { ChartDataItem, ExerciseData, ExerciseResult } from '../../types/chartData'
import getDateFormattedTime from '../../utils/getDateFormattedTime'
import getFormattedDate from '../../utils/getFormattedDate'

function getTrainingDataChartOptions(data: ExerciseResult[], chartType: string, title: string, yTitle: string) {
  const seriesData = data.map((series, index) => ({
    y: series.result,
    name: series.title,
  }))

  const options = {
    chart: {
      type: chartType,
      zoomType: 'x',
    },

    title: {
      text: title,
    },
    xAxis: {
      type: 'category',
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
