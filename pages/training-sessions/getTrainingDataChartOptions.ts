import { ChartDataItem, ExerciseResult } from '../../types/chartData'
import getDateFormattedTime from '../../utils/getDateFormattedTime'
import getFormattedDate from '../../utils/getFormattedDate'

const getChartSeries = (data: ExerciseResult[], yTitle: string, datesList?: string[]) => {
  if (datesList?.length === 1) {
    return [{ name: yTitle, data: data.map((item) => item.result) }]
  }

  const dateMap = data.reduce(
    (acc: Record<string, number[]>, item) => {
      return {
        ...acc,
        [item.title]: [...(acc[item.title] || []), item.result],
      }
    },
    {} as Record<string, number[]>,
  )

  return [{ name: yTitle, data: Object.values(dateMap).map((item) => item) }]
}

function getTrainingDataChartOptions(
  data: ExerciseResult[],
  chartType: string,
  title: string,
  yTitle: string,
  datesList: string[],
) {
  const seriesLength = datesList.length

  const xAxisLabels = seriesLength > 1 ? datesList : data.map((item) => item.title)
  const seriesData = getChartSeries(data, yTitle, datesList)

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
