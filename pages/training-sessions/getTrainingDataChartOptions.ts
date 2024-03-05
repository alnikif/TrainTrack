import { ExerciseResult } from '../../types/chartData'
import getFormattedDate from '../../utils/getFormattedDate'

const getChartSeries = (data: ExerciseResult[], yTitle: string, datesList?: string[]) => {
  if (datesList?.length === 1) {
    return [{ name: yTitle, data: data.map((item) => item.result) }]
  }
  const dateMap = data.reduce(
    (acc: Record<string, unknown[]>, item) => {
      const formattedDate = getFormattedDate(item.timestamp)
      return {
        ...acc,
        [formattedDate]: [...(acc[formattedDate] || []), item.sum],
      }
    },
    {} as Record<string, number[]>,
  )

  return [{ name: yTitle, data: Object.values(dateMap).map((item) => item[0]) }]
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
