import { Dispatch, SetStateAction, useEffect } from 'react'

import { Exercise, ExerciseResult } from '../../types/chartData'
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
  setSelectedTraining: Dispatch<SetStateAction<Exercise[] | null | undefined>>,
) {
  const seriesLength = datesList.length
  const xAxisLabels = seriesLength > 1 ? datesList : data.map((item) => item.title)
  const seriesData = getChartSeries(data, yTitle, datesList)

  const getSelectedTraining = (event: any, data: ExerciseResult[]) => {
    const dateMap = data.reduce(
      (acc: Record<string, any>, item) => {
        const formattedDate = getFormattedDate(item.timestamp)
        return {
          ...acc,
          [formattedDate]: [...(acc[formattedDate] || []), item.training],
        }
      },
      {} as Record<string, any>,
    )
    if (event && datesList.length > 1) {
      setSelectedTraining(Object.values(dateMap)[event.point.index][0])
    } else if (event && datesList.length === 1) {
      setSelectedTraining(Object.values(dateMap)[0][0])
    }
  }

  const options = {
    chart: {
      type: chartType,
      zoomType: 'x',
    },
    plotOptions: {
      series: {
        events: {
          click: (event: any) => getSelectedTraining(event, data),
        },
      },
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
