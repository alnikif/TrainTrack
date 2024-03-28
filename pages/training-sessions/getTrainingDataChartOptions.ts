import Highcharts from 'highcharts'

import { ChartTypes } from '../../constants/chartTypes'
import { ExerciseResult } from '../../types/chartData'
import getFormattedDate from '../../utils/getFormattedDate'

const TITLE = 'Training Chart'
const Y_TITLE = 'Training'

interface TrainingChartOptionsParams {
  chartType: ChartTypes
  trainingData: ExerciseResult[]
  datesList: string[]
  pickedDate: Date | null
  onBarClick: (pointCategory: Date) => void
}

const getSeries = (trainingData: ExerciseResult[], datesList: string[], pickedDate: Date | null) => {
  if (datesList.length === 1) {
    const [_, exercises = []] = trainingData?.[0] || []
    return exercises.map((item, index) => ({
      x: index,
      y: item.result,
      name: item.title,
    }))
  }

  return trainingData.map((item, index) => {
    const [timestamp, training] = item
    const summary = training.map((t) => t.sum).find((item) => item !== undefined)
    const isSelected = pickedDate && pickedDate.toISOString() === timestamp

    return {
      x: index,
      y: summary,
      name: timestamp,
      color: isSelected ? '#6ADC9C' : '#FEC903',
    }
  })
}

const getTrainingChartOptions = (params: TrainingChartOptionsParams): Highcharts.Options => {
  const { chartType, trainingData, datesList, pickedDate, onBarClick } = params
  const seriesData = getSeries(trainingData, datesList, pickedDate)

  const labelsFormatter = (data: any) => {
    if (datesList.length === 1) return data.value
    return getFormattedDate(data.value)
  }

  const onPointClick = (pointData: any) => {
    onBarClick(pointData?.point?.name)
  }

  return {
    chart: {
      type: chartType,
      height: 550,
    },
    title: { text: TITLE },
    xAxis: {
      type: 'category',
      title: { text: 'Date' },
      labels: {
        style: { fontSize: '12px', color: '#697586' },
        formatter: labelsFormatter,
      },
    },
    yAxis: {
      title: { text: Y_TITLE },
      style: { fontSize: '12px', color: '#697586' },
    } as Highcharts.YAxisOptions,
    series: [
      {
        name: Y_TITLE,
        colors: ['#FEC903'],
        borderRadius: '8px',
        colorByPoint: true,
        groupPadding: 0,
        data: seriesData,
        point: { events: { click: onPointClick } },
      },
    ] as Highcharts.SeriesOptionsType[],
  }
}

export default getTrainingChartOptions
